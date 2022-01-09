import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { signupDTO } from '../../interfaces/AuthInterface';
import { isFormValidated } from '../../utils/formUtils';
import setAuthToken from '../../utils/setAuthToken';
import { addToast } from '../../utils/toastNotifications';
import { endpoints } from '../../utils/urls';
import ButtonLoader from '../common/ButtonLoader';

const MerchantSignup = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [localState, setLocalState] = useState(signupDTO);

  const { dispatch } = useContext(AppContext);

  const registerMerchant = async (event: any) => {
    if (!isFormValidated('login-form')) {
      return;
    }

    event.preventDefault();
    setLoading(true);

    let url = `${endpoints.auth.getToken}`;

    const payload = {
      username: localState.email,
      password: localState.password,
    };
    try {
      const response = await axios.post(url, payload);

      const token = response.data.token;
      dispatch({
        type: 'SET_TOKEN',
        payload: response.data.token,
      });

      setAuthToken(token);

      //redirect to home.
      // window.location.href = '/';

      //get user details
      // getUserDetails(localState.email);
    } catch (error) {
      addToast('Username or password is invalid', 'error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // const getUserDetails = async (email: string) => {
  //   const url = `${endpoints.users.mainUrl}/${email}`;
  //   try {
  //     const response = await axios.get(url);

  //     //set in state
  //     dispatch({
  //       type: 'SET_USER',
  //       payload: response.data,
  //     });

  //     //got to home page
  //     window.location.href = '/';
  //   } catch (error) {
  //     addToast('User not found. Please register');
  //   } finally {
  //   }
  // };

  const handleChange = (input: string) => (event: any) => {
    setLocalState({
      ...localState,
      [input]: event.target.value,
    });
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      {/* <div className='container'>
        <div className='row align-items-center'>
          <div className='col-sm-6 become-merchant-section-signup'>
            <form id='login-form'>
              <div className='text-center'>
                <img
                  src={require('../../assets/images/Jara Logo.svg').default}
                  alt='JARA'
                  style={{ width: '50%' }}
                />
                <br />
                <p style={{ color: '#009933', fontSize: '30px' }}>BECOME A MERCHANT</p>
                <h5 style={{ marginTop: '10px', color: '#596271' }}>
                  Sign up now and get plenty Jara
                </h5>
              </div>
              <br />
              <fieldset disabled={loading}>
                <div className='form-area merchant-section-form'>
                  <div className='single-input'>
                    <input
                      name='firstName'
                      id='firstName'
                      className='input'
                      required
                      placeholder='First Name'
                      type='text'
                      value={localState.firstName}
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
                      value={localState.lastName}
                      onChange={handleChange('lastName')}
                    />
                  </div>
                  <div className='position-relative single-input'>
                    <input
                      name='emailAddress'
                      id='emailAddress'
                      className='input'
                      required
                      placeholder='Email'
                      type='email'
                      value={localState.email}
                      onChange={handleChange('email')}
                    />
                    <i className='bi bi-envelope-fill position-absolute show-password'></i>
                  </div>
                  <div className='single-input'>
                    <input
                      type='tel'
                      name='phoneNumber'
                      id='phoneNumber'
                      className='input'
                      required
                      placeholder='Phone Number'
                      value={localState.phoneNumber}
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
                      value={localState.password}
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
                      value={localState.confirmPassword}
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

                  {localState.password !== '' &&
                  localState.password !== localState.confirmPassword ? (
                    <small className='text-danger text-sm'>Passwords do not match</small>
                  ) : (
                    ''
                  )}

                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label className='form-check-label' htmlFor='flexCheckDefault'>
                      I agree to Jara terms of Service and Privacy Policy
                    </label>
                  </div>

                
                  <div className='submit-button-section'>
                    <button onClick={loginCustomer} className='login'>
                      {loading ? <ButtonLoader /> : 'Sign up'}
                    </button>
                    <p className='not-registered'>
                      Already have an account?{' '}
                      <Link to='/merchant-login'>
                        <span>Login</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div className='col-sm-6 become-merchant-section-image'>
            <img
              src={require('../../assets/images/Merchant.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div> */}

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
            <br />
            <p style={{ color: '#009933', fontSize: '30px' }}>BECOME A MERCHANT</p>
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
                      value={localState.firstName}
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
                      value={localState.lastName}
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
                      value={localState.email}
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
                      value={localState.phoneNumber}
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
                      value={localState.password}
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
                      value={localState.confirmPassword}
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
                  {localState.password !== '' &&
                  localState.password !== localState.confirmPassword ? (
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
                    <button onClick={registerMerchant} className='rounded-pill login'>
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
            <Link to='/merchant-login'>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MerchantSignup;
