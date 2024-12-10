import './Questionnaire.css';

const MedicalQuestionnaire = () => {
  return (
    <main>
      <div className="content-container">
        <div className="image-container">
          <img src="Quest.jpg" alt="Donation Illustration" />
        </div>
        <div className="form-container">
          <h2>Medical Questionnaire</h2>
          <p>Please fill out this form before donating blood.</p>
          <form action="/submit" method="POST">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                min="18"
                max="65"
                placeholder="Enter your age"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bloodType">Blood Type</label>
              <select id="bloodType" name="bloodType" required>
                <option value="" disabled selected>
                  Select your blood type
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="chronicIllnesses">Chronic Illnesses</label>
              <textarea
                id="chronicIllnesses"
                name="chronicIllnesses"
                placeholder="List any chronic illnesses or conditions"
                required
                style={{ height: '100px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recentMedications">Recent Medications</label>
              <textarea
                id="recentMedications"
                name="recentMedications"
                placeholder="List any medications you are currently taking"
                required
                style={{ height: '100px' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="previousDonation">Previous Blood Donation</label>
              <select id="previousDonation" name="previousDonation" required>
                <option value="" disabled selected>
                  Have you donated blood before?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MedicalQuestionnaire;
