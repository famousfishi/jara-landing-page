// import { Link } from 'react-router-dom';
// import Rating from '../common/Rating';

// import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      {/* Top section */}
      <div className='stores top-section' id='top-section'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-sm-8' id='first-image'>
            <img
              src={require('../../assets/images/Stores.svg').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>

          <div className='col-sm-5' id='first-content'>
            <div className='top-hero-content'>
              <h1 style={{ marginBottom: '35px' }}>Jara Stores</h1>
              {/* <p style={{ color: '#596271', fontSize: 'calc(1rem + 0.9vw)' }}> */}
              <p style={{ color: '#596271', fontSize: '1.3rem', display: 'inline' }}>
                Set up your store on the Jara Marketplace and get those loyal customers your
                business so rightly deserves!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Innovative Customer section */}
      {/* <div className='deals-section reward-page'>
        <div className='row gx-4 align-items-center mx-auto'>
          <h1 className='mb-4'>Become a Jara Merchant and get those return customers today</h1>
          <div className='col-sm-4'>
            <div className='p-3'>
             
              <img
                src={require('../../assets/images/Marketing icon.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content'>Done-for-you Marketing</p>
              <br />
              <br />
              <p className='content'>
                Never have to worry about endless hours promoting your business. We take the burden
                off your hands and drive traffic to your store for you.{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
             
              <img
                src={require('../../assets/images/Payout icon.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content'>Secure and Instant Payout </p>
              <br />
              <br />
              <p className='content'>
                Get your profit paid instantly into your Jara wallet which securely holds your funds
                for you until you are ready to withdraw.{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='p-3'>
             
              <img
                src={require('../../assets/images/Analytics icon.svg').default}
                alt='JARA images'
                className='stores-image'
              />
              <p className='header-stores-content'> Jara Analytics</p>
              <br />
              <br />
              <p className='content'>
                Gain priceless insights into your customers and their shopping experience to better
                tailor their shopping experience, and keep them coming back.{' '}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/*Innovative Customer section */}
      <div
        className='deals-section reward-page'
        style={{ backgroundColor: '#F1F0F5', paddingBottom: '50px' }}
      >
        <div className='row gx-4 align-items-center mx-auto'>
          <h1 className='mb-4 mt-4' style={{ color: '#596271', fontWeight: 'bold' }}>
            Become a Jara Merchant and get those return customers today
          </h1>
          <div className='innovative-images'>
            <div className='row gx-4'>
              <div className='col-sm-4'>
                <div className='p-3'>
                  <img
                    src={require('../../assets/images/doneforyou.svg').default}
                    alt='JARA images'
                  />
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='p-3'>
                  <img
                    src={require('../../assets/images/securepayout.svg').default}
                    alt='JARA images'
                  />
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='p-3'>
                  <img
                    src={require('../../assets/images/jaraanalytics.svg').default}
                    alt='JARA images'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      {/* <div
        id='store-section-navigation'
        className='row gx-3 align-items-center justify-content-center mt-5'
      >
        <div className='clickable col-sm-3 text-center border-end border-2'>
          <h2 className='m-0 fs-3 fw-bold'>FEATURED</h2>
        </div>
        <div className='clickable active col-sm-3 text-center'>
          <h2 className='m-0 fs-3 fw-bold'>MOST POPULAR</h2>
        </div>
        <div className='clickable col-sm-3 text-center border-start border-2'>
          <h2 className='m-0 fs-3 fw-bold'>BEST SALE</h2>
        </div>
      </div> */}

      {/* Jara Stores Section */}
      {/* <div className='stores deals-section pt-3'>
        <div className='row'>
          <div className='card col-sm-4 mb-4 border-0'>
            <img
              className='card-img-top px-1'
              src={require('../../assets/images/shirt.png').default}
              alt='JARA images'
            />
            <div className='card-body row mt-2 px-1'>
              <b className='card-title product-name'>Black T-Shirt</b>
              <span
                className='price green-text col-auto my-0 fw-normal'
                style={{ fontSize: '1.2rem' }}
              >
                N200,000.00
              </span>
              <div className='d-flex flex-wrap align-items-center justify-content-between mt-auto'>
                <Rating rating={4} />
                <div
                  className='capture-button flex-fill justify-content-end'
                  style={{ maxWidth: '200px' }}
                >
                  <Link to='/' className='rounded-pill btn find-out-more w-100'>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='card col-sm-4 mb-4 border-0'>
            <img
              className='card-img-top px-1'
              src={require('../../assets/images/shoe.png').default}
              alt='JARA images'
            />
            <div className='card-body row mt-2 px-1'>
              <b className='card-title product-name'>Leather Derby Shoes</b>
              <span
                className='price green-text col-auto my-0 fw-normal'
                style={{ fontSize: '1.2rem' }}
              >
                N200,000.00
              </span>
              <div className='d-flex flex-wrap align-items-center justify-content-between mt-auto'>
                <Rating rating={4} />
                <div
                  className='capture-button flex-fill justify-content-end'
                  style={{ maxWidth: '200px' }}
                >
                  <Link to='/' className='rounded-pill btn find-out-more w-100'>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='card col-sm-4 mb-4 border-0'>
            <img
              className='card-img-top px-1'
              src={require('../../assets/images/Gray Shorts.png').default}
              alt='JARA images'
            />
            <div className='card-body row mt-2 px-1'>
              <b className='card-title product-name'>Starched Chinos Short</b>
              <span
                className='price green-text col-auto my-0 fw-normal'
                style={{ fontSize: '1.2rem' }}
              >
                N200,000.00
              </span>
              <div className='d-flex flex-wrap align-items-center justify-content-between mt-auto'>
                <Rating rating={3} />
                <div
                  className='capture-button flex-fill justify-content-end'
                  style={{ maxWidth: '200px' }}
                >
                  <Link to='/' className='rounded-pill btn find-out-more w-100'>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='card col-sm-4 mb-4 border-0'>
            <img
              className='card-img-top px-1'
              src={require('../../assets/images/shirt.png').default}
              alt='JARA images'
            />
            <div className='card-body row mt-2 px-1'>
              <b className='card-title product-name'>Black T-Shirt</b>
              <span
                className='price green-text col-auto my-0 fw-normal'
                style={{ fontSize: '1.2rem' }}
              >
                N200,000.00
              </span>
              <div className='d-flex flex-wrap align-items-center justify-content-between mt-auto'>
                <Rating rating={4} />
                <div
                  className='capture-button flex-fill justify-content-end'
                  style={{ maxWidth: '200px' }}
                >
                  <Link to='/' className='rounded-pill btn find-out-more w-100'>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='card col-sm-4 mb-4 border-0'>
            <img
              className='card-img-top px-1'
              src={require('../../assets/images/shoe.png').default}
              alt='JARA images'
            />
            <div className='card-body row mt-2 px-1'>
              <b className='card-title product-name'>Leather Derby Shoes</b>
              <span
                className='price green-text col-auto my-0 fw-normal'
                style={{ fontSize: '1.2rem' }}
              >
                N200,000.00
              </span>
              <div className='d-flex flex-wrap align-items-center justify-content-between mt-auto'>
                <Rating rating={4} />
                <div
                  className='capture-button flex-fill justify-content-end'
                  style={{ maxWidth: '200px' }}
                >
                  <Link to='/' className='rounded-pill btn find-out-more w-100'>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='card col-sm-4 mb-4 border-0'>
            <img
              className='card-img-top px-1'
              src={require('../../assets/images/Gray Shorts.png').default}
              alt='JARA images'
            />
            <div className='card-body row mt-2 px-1'>
              <b className='card-title product-name'>Starched Chinos Short</b>
              <span
                className='price green-text col-auto my-0 fw-normal'
                style={{ fontSize: '1.2rem' }}
              >
                N200,000.00
              </span>
              <div className='d-flex flex-wrap align-items-center justify-content-between mt-auto'>
                <Rating rating={3} />
                <div
                  className='capture-button flex-fill justify-content-end'
                  style={{ maxWidth: '200px' }}
                >
                  <Link to='/' className='rounded-pill btn find-out-more w-100'>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-5 mt-5 capture-button'>
            <Link to='/deals' className='btn find-out-more'>
              View More
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Main;
