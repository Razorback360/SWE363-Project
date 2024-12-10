import { Router } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
import User from '../models/user.js';
import Hospital from '../models/hospital.js';

const router = Router();
const saltRounds = 10;
// Sample routes, not to be used in deployment, only for reference.
router.post('/login', async (_req, res) => {
    const { email, password } = _req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        console.log(user);
        res.status(404).json({ error: 'Incorrect Email or Password' }).send();
        return;
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        res.sendStatus(404).json({ error: 'Incorrect Email or Password' });
        return;
    }
    res.status(200).json({"user": user._id, "isHospital": user.isHospital}).send()
    return;
});

router.post('/register', async (_req, res) => {
    const { firstName, lastName, email, password, name, location, contactNumber, isHospital } = _req.body;
    console.log(_req);
    // Validate the request body
    if (isHospital) {
        if (!email || !password || !name || !location || !contactNumber) {
            res.status(400).json({ error: 'All fields are required' });
            return;
        }
    } else if (!firstName || !lastName || !email || !password) {
        console.log("here");
        res.status(400).json({ error: 'All fields are required' });
        return;
    }

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        console.log(existingUser);
        res.status(400).json({ error: 'User already exists' });
        return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
        firstName: firstName || " ",
        lastName: lastName || " ",
        email,
        password: hashedPassword,
        isHospital: isHospital,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    if (isHospital) {
        // Create a new hospital
        const newHospital = new Hospital({
            userId: savedUser._id,
            name,
            location,
            contactNumber,
        });
        await newHospital.save();
    }
    res.status(200).json({"user": savedUser._id, "isHospital": savedUser.isHospital}).send()
    return;
});

export default router;
