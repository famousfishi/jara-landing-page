import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      {/* Jara Wallet Section */}
      <div className='top-section'>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='fourth-content'>
            <div className='top-hero-content'>
              <h1 style={{ marginBottom: '35px' }}>Jara Wallet</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                Your secure Jara wallet is your key to quick, easy and flexible transactions – that
                rewards you on each purchase.
              </p>
              <div className='capture-button'>
                <Link to='/register' className='rounded-pill btn find-out-more'>
                  Create Your Account
                </Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6' id='fourth-image'>
            {/* Rewards image */}
            <img
              src={require('../../assets/images/Wallet.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Jara deals Section */}
      <div className='deals-section reward-page wallet-page'>
        <div className='row gx-4 align-items-center banner-reward-page'>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/rewardwallet.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content' style={{ color: 'white' }}>
                Pay using your rewards in your wallet
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/cardwallet.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content' style={{ color: 'white' }}>
                Pay with your debit/credit card
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/bothwallet.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content' style={{ color: 'white' }}>
                {' '}
                Pay with a combination of both
              </p>
            </div>
          </div>
        </div>
        {/* <div className='row gx-4 align-items-center mx-auto'>
          <h1 className='mb-4'>Use your Jara Rewards to</h1>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/Pay Wallet icon.svg').default}
                alt='JARA images'
              />
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/Pay Card icon.svg').default}
                alt='JARA images'
              />
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
              <img
                src={require('../../assets/images/Pay both icon.svg').default}
                alt='JARA images'
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className='wallet-section'>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='fourth-image'>
            {/* Rewards image */}
            <img
              src={require('../../assets/images/Card.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-sm-6' id='fourth-content'>
            <div className='top-hero-content'>
              <h1>COMING SOON</h1>
              <p style={{ color: '#596271', fontSize: '25px' }}>JARA Card</p>
              <p style={{ color: '#596271', fontSize: '20px' }}>
                {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
