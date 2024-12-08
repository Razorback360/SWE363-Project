import { Request, Response, Router } from 'express';

import UserModel from '../models/user.js';

const router = Router();

// Sample routes, not to be used in deployment, only for reference.
router.get('/users', async (_req, res) => {
  const allUsers = await UserModel.find();
  res.sendStatus(200).json(allUsers);
});

interface UserParams {
  id: string;
}

router.get('/user/:id', async (req: Request<UserParams>, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      res.sendStatus(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json(user);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }
});

export default router;
