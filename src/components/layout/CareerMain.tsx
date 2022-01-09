import { Link } from 'react-router-dom';

const Main = () => {
  const shortStory = {
    color: 'white',
    top: '12rem',
    left: '2rem',
  };

  // const readStoryButton = {};
  return (
    <>
      {/* Top section */}
      <div className='d-flex row career top-section' id='top-section'>
        <div
          className='input-wrap d-flex justify-content-center mx-auto mt-5 mb-2 position-relative'
          style={{ maxWidth: '60rem' }}
        >
          <i className='bi bi-search position-absolute search-icon' style={{ left: '2rem' }}></i>
          <input
            type='search'
            placeholder='Search for a career path'
            className='flex-fill text-center search-input'
          />

          <div className='capture-button'>
            <Link to='/' className='rounded-pill btn find-out-more w-100'>
              Search
            </Link>
          </div>
        </div>

        <div className='row align-items-center justify-content-center'>
          <div className='col-sm-6' id='first-image'>
            <img
              src={require('../../assets/images/career.svg').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>

          <div className='col-sm-6' id='first-content'>
            <div className='top-hero-content'>
              <h1>Careers at JARA</h1>
              <p style={{ color: '#596271', fontSize: '20px' }}>
                Join JARA and help empower and foster the growth of businesses across the world
              </p>
              <div className='capture-button' style={{ maxWidth: '250px' }}>
                <Link to='/' className='rounded-pill btn find-out-more w-100'>
                  See Open Positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jara About Career Section */}
      <div className='about-career page-section'>
        <div className='d-flex row pb-3'>
          <h1>About Careers at JARA</h1>
          <div className='d-flex col flex-wrap justify-content-center mt-3'>
            <div className='card m-2'>
              <div className='row g-0'>
                <div className='col-sm-5'>
                  <img
                    src={require('../../assets/images/Artboard – 1.png').default}
                    className='d-block rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-sm-7 px-1'>
                  <div className='card-body'>
                    <h3 className='card-title mb-3 green-text'>What We Do</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam
                      dolor repudiandae cupiditate natus.
                    </p>
                    <div className='capture-button mt-5' style={{ maxWidth: '55%' }}>
                      <Link to='/' className='rounded-pill btn find-out-more w-100'>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card m-2'>
              <div className='row g-0'>
                <div className='col-sm-5'>
                  <img
                    src={require('../../assets/images/Artboard – 2.png').default}
                    className='d-block rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-sm-7 px-1'>
                  <div className='card-body'>
                    <h3 className='card-title mb-3 green-text'>How We Hire</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam
                      dolor repudiandae cupiditate natus.
                    </p>
                    <div className='capture-button mt-5' style={{ maxWidth: '55%' }}>
                      <Link to='/' className='rounded-pill btn find-out-more w-100'>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card m-2'>
              <div className='row g-0'>
                <div className='col-sm-5'>
                  <img
                    src={require('../../assets/images/Artboard – 3.png').default}
                    className='d-block rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-sm-7 px-1'>
                  <div className='card-body'>
                    <h3 className='card-title mb-3 green-text'>Job Spotlight</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam
                      dolor repudiandae cupiditate natus.
                    </p>
                    <div className='capture-button mt-5' style={{ maxWidth: '55%' }}>
                      <Link to='/' className='rounded-pill btn find-out-more w-100'>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card m-2'>
              <div className='row g-0'>
                <div className='col-sm-5'>
                  <img
                    src={require('../../assets/images/Artboard – 4.png').default}
                    className='d-block rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-sm-7 px-1'>
                  <div className='card-body'>
                    <h3 className='card-title mb-3 green-text'>
                      Contact & Freelance Partner Opportunities
                    </h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam
                      dolor repudiandae cupiditate natus.
                    </p>
                    <div className='capture-button mt-5' style={{ maxWidth: '55%' }}>
                      <Link to='/' className='rounded-pill btn find-out-more w-100'>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card m-2'>
              <div className='row g-0'>
                <div className='col-sm-5'>
                  <img
                    src={require('../../assets/images/Artboard – 5.png').default}
                    className='d-block rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-sm-7 px-1'>
                  <div className='card-body'>
                    <h3 className='card-title mb-3 green-text'>Employee Benefits</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam
                      dolor repudiandae cupiditate natus.
                    </p>
                    <div className='capture-button mt-5' style={{ maxWidth: '55%' }}>
                      <Link to='/' className='rounded-pill btn find-out-more w-100'>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card m-2'>
              <div className='row g-0'>
                <div className='col-sm-5'>
                  <img
                    src={require('../../assets/images/Artboard – 6.png').default}
                    className='d-block rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-sm-7 px-1'>
                  <div className='card-body'>
                    <h3 className='card-title mb-3 green-text'>Students</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam
                      dolor repudiandae cupiditate natus.
                    </p>
                    <div className='capture-button mt-5' style={{ maxWidth: '55%' }}>
                      <Link to='/' className='rounded-pill btn find-out-more w-100'>
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jara Career Stories Section */}
      <div className='career-stories page-section' style={{ backgroundColor: '#f1f0f5' }}>
        <div className='d-flex row justify-content-center pt-4'>
          <h1>Careers Stories</h1>
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
                width: 'calc(100% - 100px)', // subtract width of two control buttons from total width of carousel
                minWidth: '300px',
              }}
            >
              <div className='carousel-item active'>
                <div className='row'>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers Stories.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read her story
                      </Link>
                    </div>
                  </div>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers StoriesTwo.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read his story
                      </Link>
                    </div>
                  </div>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers StoriesThree.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read her story
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row'>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers Stories.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read her story
                      </Link>
                    </div>
                  </div>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers StoriesTwo.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read his story
                      </Link>
                    </div>
                  </div>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers StoriesThree.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read her story
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row'>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers Stories.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read her story
                      </Link>
                    </div>
                  </div>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers StoriesTwo.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read his story
                      </Link>
                    </div>
                  </div>
                  <div className='col-sm-4 position-relative'>
                    <img
                      src={require('../../assets/images/Careers StoriesThree.png').default}
                      className='d-block w-100'
                      alt='...'
                      style={{ height: '300px' }}
                    />
                    <div className='position-absolute' style={shortStory}>
                      <p>Uti wisi enim ad minim veniam</p>
                    </div>
                    <div
                      className='mb-5 capture-button position-absolute'
                      style={{ maxWidth: '250px', top: '15rem', left: '2rem' }}
                    >
                      <Link to='/' className='btn find-out-more' style={{ width: '100%' }}>
                        Read her story
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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

          <div className='mb-5 capture-button mx-auto' style={{ maxWidth: '250px' }}>
            <Link to='/deals' className='btn find-out-more' style={{ width: '100%' }}>
              View All Careers Stories
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
