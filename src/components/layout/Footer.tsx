import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <Fragment>
      <footer className='footer-section' id='footer-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <img
                src={require('../../assets/images/Jara Logo White.png').default}
                alt='JARA images'
                style={{ width: '50%' }}
              />
              <h5 style={{ color: 'white' }}>
                Your number 1 connect for the best of the best in Nigeria
              </h5>
              <br />
              <h6 style={{ color: 'white' }}>Download the Jara App today</h6>
              <div className='app-store-buttons'>
                <img
                  src={require('../../assets/images/App Store White_button.svg').default}
                  alt='JARA images'
                  className='appstores-page-app-store-buttons'
                />
                <img
                  src={require('../../assets/images/Google Store White_button.svg').default}
                  alt='JARA images'
                  className='appstores-page-app-store-buttons'
                />
              </div>
            </div>
            <div className='col-md-7 offset-md-2'>
              <div className='row'>
                <div className='col-sm-3 footer-header'>
                  <p>Products</p>
                  <Link to='/deals' style={{ color: 'white', textDecoration: 'none' }}>
                    Jara Deals
                  </Link>
                  <br />
                  <br />
                  <Link to='/stores' style={{ color: 'white', textDecoration: 'none' }}>
                    Jara Stores
                  </Link>
                  <br />
                  <br />
                  <Link to='/reward' style={{ color: 'white', textDecoration: 'none' }}>
                    Jara Rewards
                  </Link>
                  <br />
                  <br />
                  <Link to='/wallet' style={{ color: 'white', textDecoration: 'none' }}>
                    Jara Wallet
                  </Link>
                </div>
                <div className='col-sm-3 footer-header'>
                  <p>Support</p>
                  {/* <Link to='/faq' style={{ color: 'white', textDecoration: 'none' }}>
                    FAQs
                  </Link> */}
                  {/* <br />
                  <br /> */}
                  <a
                    href='https://medium.com/@getjara '
                    style={{ color: 'white', textDecoration: 'none' }}
                    rel='noreferrer'
                    target='_blank'
                  >
                    Blog
                  </a>
                  <br />
                  <br />
                </div>
                <div className='col-sm-3 footer-header'>
                  {/* <Link to='/career' style={{ color: 'white', textDecoration: 'none' }}>
                    Careers
                  </Link> */}
                  {/* <br />
                  <br /> */}
                  {/* <br /> */}
                  {/* <p>Contact</p>
                  <p>Careers</p> */}
                  <Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>
                    Contact
                  </Link>{' '}
                  <br /> <br />
                  <br />
                  <a
                    href='mailto: info@getjara.co'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    info@getjara.co
                  </a>
                </div>
                <div className='col-sm-3 footer-header'>
                  <p>Connect with us</p>
                  <div className='social-buttons'>
                    <a
                      href='https://www.facebook.com/jaraofficialng/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img
                        src={require('../../assets/images/Social media icon-FB.svg').default}
                        alt='JARA facebook'
                        // style={{ width: '20%' }}
                      />
                    </a>

                    {/* <a
                      href='https://www.facebook.com/jaraofficialng/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img
                        src={require('../../assets/images/Twitter Logo.png').default}
                        alt='JARA twitter'
                        style={{ width: '20%' }}
                      />
                    </a> */}

                    <a
                      href='https://www.instagram.com/jaraofficialng/ '
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img
                        src={require('../../assets/images/Social media icon-IG.svg').default}
                        alt='JARA Instagram'
                        // style={{ width: '20%' }}
                      />
                    </a>
                    <a
                      href='https://www.linkedin.com/company/jaraanalytics/mycompany/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img
                        src={require('../../assets/images/Social media icon-Li.svg').default}
                        alt='JARA LinkedIn'
                        // style={{ width: '20%' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <hr style={{ color: 'whitesmoke', border: '2px solid whitesmoke' }}></hr>
          <br />
          <div>
            <div style={{ float: 'left', color: 'white' }}>
              Copyright &copy;{new Date().getFullYear()} All Rights Reserved.
            </div>
            <i
              onClick={smoothScroll}
              style={{ float: 'right', color: 'white' }}
              className='bi bi-arrow-up-circle back-to-top'
            >
              {' '}
              {/* Back to top */}
            </i>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
