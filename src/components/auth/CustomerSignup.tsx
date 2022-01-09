// import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupDTO } from '../../interfaces/AuthInterface';
import { isFormValidated } from '../../utils/formUtils';
import { addToast } from '../../utils/toastNotifications';
// import { endpoints } from '../../utils/urls';
import ButtonLoader from '../common/ButtonLoader';
// import AccountCreatedPage from './AccountCreatedPage';
import './styles.css';

const CustomerSignup = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [userDataDTO, setRegisterUserData] = useState(signupDTO);
  const [showAccountCreatedPage, setShowAccountCreatedPage] = useState(false);

  const registerUser = async (event: any) => {
    if (!isFormValidated('register-user-form')) {
      addToast('Fill the required fields', 'warning');
      return;
    }
    event.preventDefault();
    if (userDataDTO.password !== userDataDTO.confirmPassword) {
      addToast('Passwords do not match', 'warning');
      return;
    }
    setLoading(true);
    //url to post signupDTO  (change to the appropriate endpoint)
    // let url = `${endpoints.users.mainUrl}`;

    //success and error messages
    let message = 'You have been registered successfully';
    let errorMessage = 'Error registering this account';

    try {
      // await axios.post(url, userDataDTO);
      addToast(message, 'success');

      // if success,  login
      // signIn();
      setShowAccountCreatedPage(!showAccountCreatedPage);
    } catch (error) {
      addToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  // const signIn = async () => {};

  const handleChange = (input: any) => (event: any) => {
    if (input === 'confirmPassword') {
      //check if the passwords match, if not return;
      if (event.target.value !== userDataDTO.password) {
      }
    }

    setRegisterUserData({
      ...userDataDTO,
      [input]: event.target.value,
    });
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div
        className='auth-section-signup'
        // style={showAccountCreatedPage ? { filter: 'blur(8px)' } : undefined}
      >
        <div className='container'>
          <div className='text-center'>
            <img
              src={require('../../assets/images/Jara Logo.svg').default}
              alt='JARA'
              style={{ width: '50%' }}
            />
          </div>
          <div
            className='row'
            style={{
              border: '1px solid #707070',
              borderRadius: '20px',
              padding: '25px',
              marginTop: '15px',
            }}
          >
            <form id='register-user-form' className='col-lg-12'>
              <div className='text-center'>
                {/* <img
                  src={require('../../assets/images/Jara Logo.svg').default}
                  alt='JARA'
                  style={{ width: '50%' }}
                />
                <br /> */}
                <h5 style={{ marginTop: '10px', color: '#596271' }}>CREATE YOUR ACCOUNT</h5>
              </div>
              <br />
              <fieldset disabled={loading}>
                <div className='form-area'>
                  <div className='single-input'>
                    <input
                      name='firstName'
                      id='firstName'
                      className='input'
                      required
                      placeholder='First Name'
                      type='text'
                      value={userDataDTO.firstName}
                      onChange={handleChange('firstName')}
                    />
                  </div>
                  <div className='single-input'>
                    <input
                      name='lastName'
                      id='lastName'
                      className='input'
                      required
                      placeholder='Last Name'
                      type='text'
                      value={userDataDTO.lastName}
                      onChange={handleChange('lastName')}
                    />
                  </div>
                  <div className='single-input'>
                    <input
                      name='email'
                      className='input'
                      id='email'
                      required
                      placeholder='Email'
                      type='email'
                      value={userDataDTO.email}
                      onChange={handleChange('email')}
                    />
                  </div>
                  <div className='single-input'>
                    <input
                      type='tel'
                      name='phoneNumber'
                      id='phoneNumber'
                      className='input'
                      required
                      placeholder='Phone Number'
                      value={userDataDTO.phoneNumber}
                      maxLength={13}
                      pattern='[0]{1}[7-9]{1}[0-2]{1}[0-9]{8}|[2]{1}[3]{1}[4]{1}[0-9]{10}'
                      onChange={handleChange('phoneNumber')}
                    />
                  </div>

                  <div className='position-relative single-input'>
                    <input
                      name='password'
                      id='password'
                      className='input'
                      required
                      placeholder='Password'
                      value={userDataDTO.password}
                      type={passwordShown ? 'text' : 'password'}
                      onChange={handleChange('password')}
                      pattern='^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,24}$'
                      title='Password must be atleast 6 characters, with atleast one number, one letter and one special character'
                    />
                    <i
                      className='bi bi-eye-fill position-absolute show-password'
                      onClick={togglePasswordVisiblity}
                    ></i>
                  </div>

                  <div className='position-relative single-input'>
                    <input
                      name='confirmpassword'
                      id='confirmpassword'
                      className='input'
                      required
                      placeholder='Confirm Password'
                      value={userDataDTO.confirmPassword}
                      type={passwordShown ? 'text' : 'password'}
                      onChange={handleChange('confirmPassword')}
                      pattern='^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,24}$'
                      title='Password must be atleast 6 characters, with atleast one number, one letter and one special character'
                    />

                    <i
                      className='bi bi-eye-fill position-absolute show-password'
                      onClick={togglePasswordVisiblity}
                    ></i>
                  </div>
                  {userDataDTO.password !== '' &&
                  userDataDTO.password !== userDataDTO.confirmPassword ? (
                    <small className='text-danger text-sm'>Passwords do not match</small>
                  ) : (
                    ''
                  )}

                  {/* <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label className='form-check-label' htmlFor='flexCheckDefault'>
                      I agree to Jara terms of Service and Privacy Policy
                    </label>
                  </div> */}

                  {/* <Link className='forget-btn' to='/password/recover'>
                    Forgot password?
                  </Link> */}
                  <div className='submit-button-section'>
                    <button onClick={registerUser} className='rounded-pill login'>
                      {loading ? <ButtonLoader /> : 'Create My Account'}
                    </button>
                    {/* <p className='not-registered'>
                      Already have an account?{' '}
                      <Link to='/login'>
                        <span>Login</span>
                      </Link>
                    </p> */}
                    {/* {showAccountCreatedPage ? <AccountCreatedPage /> : null} */}
                    <div className='text-center not-registered'>
                      <p>
                        By clicking the "Create My Account" button, you agree to Jara's terms of
                        acceptable use
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <p className='text-center not-registered'>
            Already have an account?{' '}
            <Link to='/login'>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomerSignup;
