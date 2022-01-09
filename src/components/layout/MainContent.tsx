import { Link } from 'react-router-dom';
import AppStoresNewsLetter from './AppStoresNewsLetter';

const Main = () => {
  const downloadApple = () => {};
  const downloadGoogle = () => {};
  return (
    <>
      {/* Top section */}
      <div className='top-section'>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='first-image'>
            <img
              src={require('../../assets/images/top-section-image.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-sm-6' id='first-content'>
            <div className='top-hero-content'>
              {/* <h1> Easy Shopping With The Best Deals Just For You </h1> */}
              <h1>Deals Made Just For You</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                {/* JARA gives you access to the very best deals, and rewards you when you buy your
                favorite products and services */}
                JARA rewards you for every purchase you make and gives you access to the best deals
                from your favourite brands
              </p>
              {/* <div className='capture-button'>
                <Link to='/contact' className='btn find-out-more'>
                  Find Out More
                </Link>
              </div> */}
              <div className='app-store-buttons'>
                <img
                  src={require('../../assets/images/App Store Black_button.svg').default}
                  alt='JARA images'
                  className='main-page-app-store-buttons'
                  onClick={downloadApple}
                />
                <img
                  src={require('../../assets/images/Google Store Black_button.svg').default}
                  alt='JARA images'
                  className='main-page-app-store-buttons'
                  onClick={downloadGoogle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Innovative Customer section */}
      <div
        className='deals-section reward-page'
        style={{ backgroundColor: '#F1F0F5', paddingBottom: '50px' }}
      >
        <div className='row gx-4 align-items-center mx-auto'>
          <h1 className='mb-4 mt-4' style={{ color: '#596271', fontWeight: 'bold' }}>
            Jara is an Innovative Customer Loyalty Ecosystem at Its Best
          </h1>
          <div className='innovative-images'>
            <div className='row gx-4'>
              <div className='col-sm-4'>
                <div className='p-3'>
                  <Link to='/register'>
                    <img
                      src={require('../../assets/images/earnpoints.svg').default}
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
                      src={require('../../assets/images/beyondtransactions.svg').default}
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
                      src={require('../../assets/images/jarabrands.svg').default}
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

      {/* Jara Rewards Section */}
      <div className='rewards-section' style={{ backgroundColor: '#FAF8F6' }}>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='second-content'>
            <div className='top-hero-content'>
              <h1>Jara Rewards</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem', display: 'inline' }}>
                When you shop on Jara, you spend less and get maximum rewards on each purchase.
              </p>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                {' '}
                For every item bought, you earn JARA POINTS - which is used to earn even more
                rewards!
              </p>
              <div className='capture-button'>
                <Link to='/reward' className='rounded-pill btn find-out-more '>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6' id='second-image'>
            <img
              src={require('../../assets/images/rewards-image.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
              // id="second-image"
            />
          </div>
        </div>
      </div>

      {/* Merchant Section */}
      <div className='merchant-section' style={{ backgroundColor: '#F1F0F5' }}>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='third-image'>
            <img
              src={require('../../assets/images/Merchant.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-sm-6' id='third-content'>
            <div className='top-hero-content'>
              <h1>Get Jara Today</h1>
              <h4 style={{ color: '#596271', fontSize: '20px' }}>Become a Merchant today</h4>
              <p style={{ color: '#596271', fontSize: '1.3rem', display: 'inline' }}>
                Jara is your one-stop-platform to sell, earn, or buy the best products at the best
                rates.
              </p>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                We are on a mission to give Nigerians more value for their money.
              </p>

              <div className='capture-button'>
                <Link to='/merchant-register' className='rounded-pill btn find-out-more'>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jara deals Section */}
      <div className='deals-section' style={{ backgroundColor: '#FAF8F6' }}>
        <div className='row gx-4'>
          <h1 className='mt-4'>Latest Deals on Jara</h1>
          <div
            id='careerStoriesCarousel'
            className='d-flex row mt-4 justify-content-center carousel slide position-relative'
            data-bs-interval='8000'
          >
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#careerStoriesCarousel'
              data-bs-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>

            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#careerStoriesCarousel'
              data-bs-slide='next'
              style={{ right: '0' }}
            >
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>

            <div
              className='carousel-inner'
              style={{
                width: 'calc(100% - 30px)', // subtract width of two control buttons from total width of carousel
                minWidth: '300px',
              }}
            >
              <div className='carousel-item active'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/phone.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/shirt.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/shoe.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/laptop.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='carousel-item'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/phone.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/shirt.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/shoe.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/laptop.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='carousel-item '>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/phone.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/shirt.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/shoe.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='p-3'>
                      <img
                        src={require('../../assets/images/laptop.png').default}
                        alt='JARA images'
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className='capture-button'>
                <Link to='/deals' className='rounded-pill btn find-out-more'>
                  See All Deals
                </Link>
              </div> */}
            </div>
            <div className='carousel-indicators position-relative mt-4'>
              <button
                type='button'
                data-bs-target='#careerStoriesCarousel'
                data-bs-slide-to='0'
                className='active'
                aria-current='true'
                aria-label='Slide 1'
              ></button>
              <button
                type='button'
                data-bs-target='#careerStoriesCarousel'
                data-bs-slide-to='1'
                aria-label='Slide 2'
              ></button>
              <button
                type='button'
                data-bs-target='#careerStoriesCarousel'
                data-bs-slide-to='2'
                aria-label='Slide 3'
              ></button>
            </div>
          </div>

          <div className='capture-button'>
            <Link to='/deals' className='rounded-pill btn find-out-more'>
              See All Deals
            </Link>
          </div>
        </div>
      </div>

      {/* Jara Wallet Section */}
      <div className='wallet-section'>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='fourth-content'>
            <div className='top-hero-content'>
              <h1>Jara Wallet</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem', display: 'inline' }}>
                Your Jara Wallet is your ticket to quick and easy online transactions.
              </p>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                When you sign up on Jara, you get a free and secure digital wallet to handle all
                your online payments. A wallet that rewards you every time you spend.
              </p>
              <div className='capture-button'>
                <Link to='/wallet' className=' rounded-pill btn find-out-more'>
                  Find Out More
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

      {/* Jara Stores Section */}
      <div className='stores-section' style={{ paddingBottom: '50px', paddingTop: '50px' }}>
        <div className='row align-items-center justify-content-center'>
          <div className='col-sm-6' id='fifth-image'>
            <img
              src={require('../../assets/images/Stores.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-sm-5' id='fifth-content'>
            <div className='top-hero-content'>
              <h1>Jara Stores</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem', display: 'inline' }}>
                Jara Stores are Nigeria’s no. 1 marketplace for the best deals with a shopping
                experience tailored specific to your needs and preferences.
              </p>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                {' '}
                The best way to shop is the Jara way – spend less to earn more
              </p>
              <div className='capture-button'>
                <Link to='/stores' className=' rounded-pill btn find-out-more'>
                  Find Out More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <AppStoresNewsLetter />
    </>
  );
};

export default Main;
