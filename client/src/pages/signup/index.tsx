import "./signup.css";

const signup = () => {
  return (
    <div className="sign-up-page-container signup">
      <div className="sign-up-container">
        <h1>Welcome!</h1>
        <p>Please sign up to continue</p>
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Placeholder" />

          <label>Password</label>
          <input type="password" placeholder="Placeholder" />
          <p className="password-note">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>

          <label>Confirm Password</label>
          <input type="password" placeholder="Placeholder" />

          <div className="sign-up-checkbox-container">
            <div className="checkbox-label">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
          </div>

          <button type="submit" onClick={(e) => {e.preventDefault(); location.href = "/profile"}}>Sign Up</button>
          <p>
            Have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signup;
