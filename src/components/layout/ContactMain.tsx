import MapContainer from '../common/MapContainer';

const Main = () => {
  return (
    <>
      <div className='contact-section'>
        <div className='row'>
          <div className='col-sm-6' id='contact-image'>
            {/* <img
              src={require('../../assets/images/maps.jpg').default}
              alt='JARA images'
              style={{ width: '100%', height: '100%' }}
            /> */}
            <MapContainer />
          </div>
          <div
            className='col-sm-6'
            id='contact-content'
            style={{ backgroundColor: '#009933', marginLeft: '-10px' }}
          >
            <div style={{ padding: '50px' }}>
              <h1 style={{ color: 'white', fontWeight: 'bolder' }}>Contact Us</h1>
              <p style={{ color: 'white' }}>
                Are you experiencing any difficulty using our app? Or perhaps you have questions or
                comments? Simply fill the form below and a sales representative will be in touch
                with you shortly
              </p>
              <form>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label
                        htmlFor='exampleFormControlInput1'
                        style={{ color: 'white' }}
                        className='form-label'
                      >
                        First Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Enter your first name'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label
                        htmlFor='exampleFormControlInput1'
                        style={{ color: 'white' }}
                        className='form-label'
                      >
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Enter your last name'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div className='mb-3'>
                      <label
                        htmlFor='exampleFormControlInput1'
                        style={{ color: 'white' }}
                        className='form-label'
                      >
                        Email Address
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Enter your email address'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div className='mb-3'>
                      <label
                        htmlFor='exampleFormControlInput1'
                        style={{ color: 'white' }}
                        className='form-label'
                      >
                        Messages
                      </label>
                      <textarea
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Write your messages'
                        rows={10}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  className='rounded-pill btn'
                  style={{
                    backgroundColor: 'white',
                    color: '#009933',
                    borderRadius: '15px',
                    marginTop: '5px',
                  }}
                >
                  Send Message
                  {/* <Link to='/wallet' className='btn find-out-more'>
                    Learn More
                  </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
