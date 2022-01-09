import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { loginDTO } from '../../interfaces/AuthInterface';
import { isFormValidated } from '../../utils/formUtils';
import setAuthToken from '../../utils/setAuthToken';
import { addToast } from '../../utils/toastNotifications';
import { endpoints } from '../../utils/urls';
import ButtonLoader from '../common/ButtonLoader';

const MerchantLogin = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [localState, setLocalState] = useState(loginDTO);

  const { dispatch } = useContext(AppContext);

  const loginCustomer = async (event: any) => {
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
          <div className='col-sm-6 become-merchant-section'>
            <form id='login-form'>
              <div className='text-center'>
                <img
                  src={require('../../assets/images/Jara Logo.svg').default}
                  alt='JARA'
                  style={{ width: '50%' }}
                />
                <br />
                <p style={{ color: '#009933', fontSize: '30px' }}>BECOME A MERCHANT</p>
                <h5 style={{ marginTop: '10px', color: '#596271' }}>Login into your account</h5>
              </div>
              <br />
              <fieldset disabled={loading}>
                <div className='form-area merchant-section-form'>
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
                  <div className='position-relative single-input '>
                    <input
                      name='password'
                      id='password'
                      className='input'
                      required
                      placeholder='Password'
                      type={passwordShown ? 'text' : 'password'}
                      value={localState.password}
                      onChange={handleChange('password')}
                    />
                    <i
                      className='bi bi-eye-fill position-absolute show-password'
                      onClick={togglePasswordVisiblity}
                    ></i>
                  </div>

                  
                  <div className='submit-button-section'>
                    <button onClick={loginCustomer} className='login'>
                      {loading ? <ButtonLoader /> : 'Log in'}
                    </button>
                    <p className='not-registered'>
                      Don’t have an account?{' '}
                      <Link to='/merchant-register'>
                        <span>Create One</span>
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

      <div className='auth-section-login'>
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
            <form id='login-form' className='col-lg-12'>
              <div className='text-center'>
                <h5 style={{ marginTop: '10px', color: '#596271' }}>LOGIN</h5>
              </div>
              <br />
              <fieldset disabled={loading}>
                <div className='form-area'>
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
                  <div className='position-relative single-input '>
                    <input
                      name='password'
                      id='password'
                      className='input'
                      required
                      placeholder='Password'
                      type={passwordShown ? 'text' : 'password'}
                      value={localState.password}
                      onChange={handleChange('password')}
                    />
                    <i
                      className='bi bi-eye-fill position-absolute show-password'
                      onClick={togglePasswordVisiblity}
                    ></i>
                  </div>

                  {/* <Link className='forget-btn' to='/password/recover'>
                    Forgot password?
                  </Link> */}
                  <div className='submit-button-section'>
                    <button onClick={loginCustomer} className='rounded-pill login'>
                      {loading ? <ButtonLoader /> : 'Login to your account'}
                    </button>
                    <p className='not-registered'>
                      Don’t have an account?{' '}
                      <Link to='/merchant-register'>
                        <span style={{ textDecoration: 'none !important' }}>Sign up</span>
                      </Link>
                    </p>
                    <p className='not-registered'>Forgot your password?</p>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MerchantLogin;
