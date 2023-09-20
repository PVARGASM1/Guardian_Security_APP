import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import styles from './Login.module.css'

const handleClickSubmit = (e) => {
    e.prevent.default
}

const handleLoginForm = () => {
  const credentials = { 
    email: '',
    password: '',
  }
};

const Login = () => {
  return (
    <div>
        <form onSubmit={handleClickSubmit}>

          <h4 className={styles.sign}>Sign in to account</h4>
          <p className={styles.p}>Enter your email & password to login</p>
          <div className="form-group">
            <label htmlFor="sign-in-email">Email Address</label>
            <br />
            <input
              onChange={handleLoginForm}
              type="email"
              id="sign-in-email"
              name="email"
              required
              placeholder="guardian.security@test.com"
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="sign-in-password">Password</label>
            <br />
            <input
              onChange={handleLoginForm}
              type="password"
              id="sign-in-password"
              name="password"
              required
              placeholder="***************"
            />
          </div>
          <div className="form-group">
            <div className="forgot">
              {/* <p onClick={handleForgotPassword}> */}
                Forgot password?
              {/* </p> */}
            </div>
            <div className="btn">
              <button className="signin-btn" type="submit">Sign In</button>
            </div>
          </div>
          <h6 className="text-muted">Or Sign In With</h6>
          <div className="social">
            <div className="social-showcase">
              <div className="btn-light facebook">
                <div className="facebook">
                  <FaFacebookF />
                </div>
                <span>Facebook</span>
              </div>
              <div className="btn-light google">
                <div className="google">
                  <FaGoogle />
                </div>
                <span>Google</span>
              </div>
            </div>
          </div>
          <p className="text-center">
            Don't have account?
            <span 
              // onClick={handleShowAccess}
            >
              Create Account
            </span>
          </p>
        </form>


    </div>
  )
}

export default Login