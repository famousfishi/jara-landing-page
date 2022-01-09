const AppStoresNewsLetter = () => {
  return (
    <>
      {/* ioS and Android app store Section */}
      <div className='app-stores-section'>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='fourth-content'>
            <div className='app-stores-hero-content'>
              <h1 style={{ fontWeight: 'bold' }}>Get Jara Today</h1>
              <h3 style={{ color: 'white', fontWeight: 'normal' }}>
                Pay less and earn more with the best deals
              </h3>
              <div className='app-store-buttons'>
                <img
                  src={require('../../assets/images/App Store_button.svg').default}
                  alt='JARA images'
                  className='appstores-page-app-store-buttons '
                />
                <img
                  src={require('../../assets/images/Google Play_button.svg').default}
                  alt='JARA images'
                  className='appstores-page-app-store-buttons'
                />
              </div>
            </div>
          </div>
          <div className='col-sm-6' id='fourth-image'>
            {/* Rewards image */}
            <img
              src={require('../../assets/images/Mobile Devices.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Email NewsLetter section */}
      <div className='newsletter-section'>
        <div className='row text-center'>
          <div className='col-sm-6 offset-sm-3'>
            <h1 style={{ color: '#596271', fontWeight: 'bold' }}>
              Get 10% off your first purchase
            </h1>
            <p style={{ fontWeight: 'normal' }}>
              You’ll also be the first to know about new and upcoming deals for your favorite
              products
            </p>
            <br />

            <div className='input-group mb-3'>
              <input type='email' className='form-control' placeholder='Enter your email address' />
              <button
                className='input-group-text'
                style={{ backgroundColor: '#009933' }}
                id='basic-addon2'
              >
                <i
                  // style={{ color: 'white' }}
                  className='bi bi-arrow-right email-address-newsletter'
                ></i>
              </button>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStoresNewsLetter;
