import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      {/* Top section */}
      <div className='top-section' id='top-section' style={{ paddingBottom: '16rem' }}>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-6' id='first-image'>
            <img
              src={require('../../assets/images/Pricing.png').default}
              alt='JARA images'
              style={{ width: '90%' }}
            />
          </div>

          <div className='col-md-5' id='first-content'>
            <div className='top-hero-content'>
              <h1>Pricing</h1>
              <p style={{ color: '#596271', fontSize: '20px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint illo quas
                eaque mollitia non magni recusandae! Ducimus, saepe voluptatum aperiam fugit id.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Jara packages Section */}
      <div className='packages-section'>
        <div className='row align-items-center justify-content-center'>
          <h1>Our Packages</h1>
          <span className='subtitle text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint illo quas eaque
            mollitia non magni recusandae! Ducimus, saepe voluptatum aperiam fugit id.
          </span>
          <div className='row mt-4 mb-5 gx-2 align-items-center justify-content-center'>
            <div className='card col-sm-2 py-4 px-3 mx-2 my-3 align-items-center justify-content-center'>
              <h5 className='green-text mb-0 text-center font-weight-700'>BASIC</h5>
              <strong className='h2 my-3 text-center'>N2,999</strong>
              <span
                className='card-text text-center mb-1'
                style={{ lineHeight: '1.3', color: '#777', fontSize: '0.9rem' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam et.
                Earum.
              </span>
              <div className='mt-4 capture-button w-100'>
                <Link to='/deals' className='btn w-100 find-out-more'>
                  View More
                </Link>
              </div>
            </div>

            <div className='card col-sm-2 py-4 px-3 mx-2 my-3 align-items-center justify-content-center'>
              <h5 className='green-text font-weight-700 mb-0 text-center'>ENTERPRISE</h5>
              <strong className='h2 my-3 text-center'>N5,999</strong>
              <span
                className='card-text text-center mb-1'
                style={{ lineHeight: '1.3', color: '#777', fontSize: '0.9rem' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam et.
                Earum.
              </span>
              <div className='mt-4 capture-button w-100'>
                <Link to='/deals' className='btn w-100 find-out-more'>
                  View More
                </Link>
              </div>
            </div>

            <div className='card col-sm-2 py-4 px-3 mx-2 my-3 align-items-center justify-content-center'>
              <h5 className='green-text font-weight-700 mb-0 text-center'>SILVER</h5>
              <strong className='h2 my-3 text-center'>N7,999</strong>
              <span
                className='card-text text-center mb-1'
                style={{ lineHeight: '1.3', color: '#777', fontSize: '0.9rem' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam et.
                Earum.
              </span>
              <div className='mt-4 capture-button w-100'>
                <Link to='/deals' className='btn w-100 find-out-more'>
                  View More
                </Link>
              </div>
            </div>

            <div className='card col-sm-2 py-4 px-3 mx-2 my-3 align-items-center justify-content-center'>
              <h5 className='green-text font-weight-700 mb-0 text-center'>DIAMOND</h5>
              <strong className='h2 my-3 text-center'>N9,999</strong>
              <span
                className='card-text text-center mb-1'
                style={{ lineHeight: '1.3', color: '#777', fontSize: '0.9rem' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam et.
                Earum.
              </span>
              <div className='mt-4 capture-button w-100'>
                <Link to='/deals' className='btn w-100 find-out-more'>
                  View More
                </Link>
              </div>
            </div>
          </div>

          <h2 className='text-center'>Our Partners</h2>
          <div className='d-flex col mb-3 flex-wrap align-items-center justify-content-around'>
            <div className='mx-2 my-2'>
              <img
                src={require('../../assets/images/bumble.png').default}
                alt='bumble'
                className='d-block w-auto mx-auto'
              />
            </div>

            <div className='mx-2 my-2'>
              <img
                src={require('../../assets/images/ccompass.png').default}
                alt='ccompass'
                className='d-block w-auto mx-auto'
              />
            </div>

            <div className='mx-2 my-2'>
              <img
                src={require('../../assets/images/unfold.png').default}
                alt='unfold'
                className='d-block w-auto mx-auto'
              />
            </div>

            <div className='mx-2 my-2'>
              <img
                src={require('../../assets/images/surveymonkey.png').default}
                alt='surveymonkey'
                className='d-block w-auto mx-auto'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Jara testimonial Section */}
      <div className='testimonial-section'>
        <div className='row align-items-center justify-content-center'>
          <h1>What Client Say</h1>
          <span className='subtitle text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint illo quas eaque
            mollitia non magni recusandae! Ducimus, saepe voluptatum aperiam fugit id.
          </span>
          <div className='row mt-4 gx-2 align-items-center justify-content-center'>
            <div className='card col-md-5 p-4 mx-2 my-3 align-items-center justify-content-center'>
              <img
                className='rounded-circle card-img-top mx-auto'
                src={require('../../assets/images/Adeola Garba.png').default}
                alt=''
                style={{ backgroundColor: '#e9dddd', width: '9rem', height: '9rem' }}
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Adeola Garba</h5>
                <h6 className='card-subtitle text-center' style={{ color: '#666' }}>
                  Professional
                </h6>
                <span className='d-block card-text text-center my-4 mx-auto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam et.
                  Earum.
                </span>
                <div className='d-flex col mt-3 w-auto align-items-center justify-content-center'>
                  <div className='rating-wrap rounded-circle p-2 mx-2 my-2'>
                    <img
                      src={require('../../assets/images/Star rating.svg').default}
                      alt='rating icon'
                      className='d-block w-100'
                    />
                  </div>

                  <div className='rating-wrap rounded-circle p-2 mx-2 my-2'>
                    <img
                      src={require('../../assets/images/Star rating.svg').default}
                      alt='rating icon'
                      className='d-block w-100'
                    />
                  </div>

                  <div className='rating-wrap rounded-circle p-2 mx-2 my-2'>
                    <img
                      src={require('../../assets/images/Star rating.svg').default}
                      alt='rating icon'
                      className='d-block w-100'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='card col-md-5 p-4 mx-2 my-3 align-items-center justify-content-center'>
              <img
                className='rounded-circle card-img-top mx-auto'
                src={require('../../assets/images/Adeola Garba.png').default}
                alt=''
                style={{ backgroundColor: '#e9dddd', width: '9rem', height: '9rem' }}
              />
              <div className='card-body'>
                <h5 className='card-title text-center'>Adeola Serbas</h5>
                <h6 className='card-subtitle text-center' style={{ color: '#666' }}>
                  Professional
                </h6>
                <span className='d-block card-text text-center my-4 mx-auto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam et.
                  Earum.
                </span>
                <div className='d-flex col mt-3 w-auto align-items-center justify-content-center'>
                  <div className='rating-wrap rounded-circle p-2 mx-2 my-2'>
                    <img
                      src={require('../../assets/images/Star rating.svg').default}
                      alt='surveymonkey'
                      className='d-block w-100'
                    />
                  </div>

                  <div className='rating-wrap rounded-circle p-2 mx-2 my-2'>
                    <img
                      src={require('../../assets/images/Star rating.svg').default}
                      alt='surveymonkey'
                      className='d-block w-100'
                    />
                  </div>

                  <div className='rating-wrap rounded-circle p-2 mx-2 my-2'>
                    <img
                      src={require('../../assets/images/Star outline rating.svg').default}
                      alt='surveymonkey'
                      className='d-block w-100'
                    />
                  </div>
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
