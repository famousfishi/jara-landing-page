import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      {/* Top section */}
      <div className='top-section' id='top-section' style={{ paddingBottom: '50px' }}>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-5' id='first-content'>
            <div className='top-hero-content'>
              <h1 style={{ marginBottom: '35px' }}>Jara Rewards</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem', display: 'inline' }}>
                Why shop the old way when you can shop the Jara way and get rewards on each
                purchase?
              </p>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                Whether its cosmetics, food stuffs, or the best odds, at Jara, we strive to give you
                more as you spend less.
              </p>
            </div>
          </div>
          <div className='col-md-6' id='first-image'>
            <img
              src={require('../../assets/images/Reward Illustration.svg').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Rewards Middle Section */}
      <div className='wallet-section reward-page'>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='fourth-image'>
            {/* Rewards image */}
            <img
              src={require('../../assets/images/Reward.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-sm-5' id='fourth-content'>
            <div className='top-hero-content'>
              <h1>Enjoy your Jara Rewards</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                Jara Rewards gives you access to the very best deals, and rewards you when you buy
                your favourite products and services.
              </p>
              <div className='capture-button'>
                <Link to='/register' className='rounded-pill btn find-out-more'>
                  Create Your Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jara deals Section */}
      <div className='deals-section reward-page reward-page'>
        <div className='row gx-4 align-items-center banner-reward-page'>
          <h1 className='mb-4 mt-6' style={{ fontWeight: 'normal', color: 'white' }}>
            Use your Jara Rewards to
          </h1>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/airtime-reward.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content' style={{ color: 'white' }}>
                Purchase Airtime{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/wishlist-reward.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content' style={{ color: 'white' }}>
                Buy the next item on your Wishlist
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/electricity-reward.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content' style={{ color: 'white' }}>
                {' '}
                Pay your electricity bill
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*How to get Jara Rewards section */}
      <div
        className='deals-section reward-page'
        style={{ backgroundColor: '#F1F0F5', paddingBottom: '50px' }}
      >
        <div className='row gx-4 align-items-center mx-auto'>
          <h1 className='mb-4 mt-4' style={{ color: '#596271', fontWeight: 'bold' }}>
            How To Get Jara Rewards
          </h1>
          <div className='innovative-images'>
            <div className='row gx-4'>
              <div className='col-sm-4'>
                <div className='p-3'>
                  <Link to='/register'>
                    <img
                      src={require('../../assets/images/jaramarketplace.svg').default}
                      alt='JARA images'
                      // className='innovative images'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='p-3'>
                  <Link to='/register'>
                    <img
                      src={require('../../assets/images/pointsearn.svg').default}
                      alt='JARA images'
                      // className='innovative images'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='p-3'>
                  <Link to='/merchant-register'>
                    <img
                      src={require('../../assets/images/referearn.svg').default}
                      alt='JARA images'
                      // className='innovative images'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
