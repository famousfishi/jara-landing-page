import { Link } from 'react-router-dom';
const badge = require('../../assets/images/20percent off.svg').default;

const Main = () => {
  const badgeStyle = {
    width: '60px',
    height: '60px',
    top: '2rem',
    right: '2rem',
  };

  return (
    <>
      {/* Top section */}
      <div className='top-section' id='top-section'>
        <div className='row  align-items-center justify-content-center'>
          <div className='col-sm-7' id='first-image'>
            <img
              src={require('../../assets/images/Deal of the day.png').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-sm-5' id='first-content'>
            <div className='top-hero-content'>
              <h1 style={{ marginBottom: '35px' }}>Jara Deals</h1>
              <p style={{ color: '#596271', fontSize: '1.3rem', display: 'inline' }}>
                Jara brings you the best deals on all your favorite products and services.
              </p>
              <p style={{ color: '#596271', fontSize: '1.3rem' }}>
                With a seamless shopping experience tailored just for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 20% off Section */}
      <div className='d-flex flex-sm-row gx-0 a-section flex-wrap'>
        <div className='col-md-4'>
          <img
            className='px-0 flex-fill'
            src={require('../../assets/images/newbags.jpg').default}
            alt='JARA images'
            style={{
              width: '100%',
            }}
          />
        </div>
        <div className='col-md-4'>
          <img
            className='px-0 flex-fill'
            src={require('../../assets/images/newperfume.jpg').default}
            alt='JARA images'
            style={{
              width: '100%',
            }}
          />
        </div>
        <div className='col-md-4'>
          <img
            className='px-0 flex-fill'
            src={require('../../assets/images/newshoe.jpg').default}
            alt='JARA images'
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>

      <div className='deals-section reward-page deal-page'>
        <div className='row gx-4 align-items-center banner-deal-page'>
          <div className='col'>
            <img
              src={require('../../assets/images/getdiscount.svg').default}
              alt='JARA images'
              className='stores-image'
            />
          </div>
        </div>
      </div>

      {/* Jara deals Section */}
      <div className='deals-section'>
        <div
          className='row gx-3 align-items-center'
          style={{ paddingLeft: '10px', paddingRight: '10px' }}
        >
          <h1 className='mt-5' style={{ color: '#596271', fontWeight: 'bold' }}>
            Deal Of The Day
          </h1>
          <div className='position-relative col-sm-4'>
            <div className='position-absolute' style={badgeStyle}>
              <img src={badge} alt='JARA images' />
            </div>
            <div className='my-1'>
              <img
                src={require('../../assets/images/phone.png').default}
                alt='JARA images'
                style={{ width: '100%' }}
              />
            </div>
            <div className='col mt-2 mb-5 p-2' style={{ backgroundColor: '#e9e2d8' }}>
              <b className='product-name'>Vivo Phone</b>
              <div
                className='row align-items-end justify-content-between'
                style={{ lineHeight: '1' }}
              >
                <small className='striked-price col-auto'>N200,000.00</small>
                <b className='price green-text col-auto'>N200,000.00</b>
              </div>
            </div>
          </div>

          <div className='position-relative col-sm-4'>
            <div className='position-absolute' style={badgeStyle}>
              <img src={badge} alt='JARA images' />
            </div>
            <div className='my-1'>
              <img
                src={require('../../assets/images/shirt.png').default}
                alt='JARA images'
                style={{ width: '100%' }}
              />
            </div>
            <div className='col mt-2 mb-5 p-2' style={{ backgroundColor: '#e9e2d8' }}>
              <b className='product-name'>Black T-Shirt</b>
              <div
                className='row align-items-end justify-content-between'
                style={{ lineHeight: '1' }}
              >
                <small className='striked-price col-auto'>N200,000.00</small>
                <b className='price green-text col-auto'>N200,000.00</b>
              </div>
            </div>
          </div>

          <div className='position-relative col-sm-4'>
            <div className='position-absolute' style={badgeStyle}>
              <img src={badge} alt='JARA images' />
            </div>
            <div className='my-1'>
              <img
                src={require('../../assets/images/shoe.png').default}
                alt='JARA images'
                style={{ width: '100%' }}
              />
            </div>
            <div className='col mt-2 mb-5 p-2' style={{ backgroundColor: '#e9e2d8' }}>
              <b className='product-name'>Leather Derby Shoes</b>
              <div
                className='row align-items-end justify-content-between'
                style={{ lineHeight: '1' }}
              >
                <small className='striked-price col-auto'>N200,000.00</small>
                <b className='price green-text col-auto'>N200,000.00</b>
              </div>
            </div>
          </div>

          <div className='position-relative col-sm-4'>
            <div className='position-absolute' style={badgeStyle}>
              <img src={badge} alt='JARA images' />
            </div>
            <div className='my-1'>
              <img
                src={require('../../assets/images/phone.png').default}
                alt='JARA images'
                style={{ width: '100%' }}
              />
            </div>
            <div className='col mt-2 mb-5 p-2' style={{ backgroundColor: '#e9e2d8' }}>
              <b className='product-name'>Vivo Phone</b>
              <div
                className='row align-items-end justify-content-between'
                style={{ lineHeight: '1' }}
              >
                <small className='striked-price col-auto'>N200,000.00</small>
                <b className='price green-text col-auto'>N200,000.00</b>
              </div>
            </div>
          </div>

          <div className='position-relative col-sm-4'>
            <div className='position-absolute' style={badgeStyle}>
              <img src={badge} alt='JARA images' />
            </div>
            <div className='my-1'>
              <img
                src={require('../../assets/images/shirt.png').default}
                alt='JARA images'
                style={{ width: '100%' }}
              />
            </div>
            <div className='col mt-2 mb-5 p-2' style={{ backgroundColor: '#e9e2d8' }}>
              <b className='product-name'>Black T-Shirt</b>
              <div
                className='row align-items-end justify-content-between'
                style={{ lineHeight: '1' }}
              >
                <small className='striked-price col-auto'>N200,000.00</small>
                <b className='price green-text col-auto'>N200,000.00</b>
              </div>
            </div>
          </div>

          <div className='position-relative col-sm-4'>
            <div className='position-absolute' style={badgeStyle}>
              <img src={badge} alt='JARA images' />
            </div>
            <div className='my-1'>
              <img
                src={require('../../assets/images/shoe.png').default}
                alt='JARA images'
                style={{ width: '100%' }}
              />
            </div>
            <div className='col mt-2 mb-5 p-2' style={{ backgroundColor: '#e9e2d8' }}>
              <b className='product-name'>Leather Derby Shoes</b>
              <div
                className='row align-items-end justify-content-between'
                style={{ lineHeight: '1' }}
              >
                <small className='striked-price col-auto'>N200,000.00</small>
                <b className='price green-text col-auto'>N200,000.00</b>
              </div>
            </div>
          </div>

          <div className='mb-5 capture-button'>
            <Link to='/deals' className='rounded-pill btn find-out-more'>
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
