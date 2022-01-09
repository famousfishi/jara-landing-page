import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '50px' }}>
        <div className='row align-items-center'>
          <div className='col-sm-6' id='fourth-image'>
            {/* Rewards image */}
            <img
              src={require('../../assets/images/faq image.svg').default}
              alt='JARA images'
              style={{ width: '100%' }}
            />
          </div>
          <div className='col-sm-6' id='fourth-content'>
            <div className='top-hero-content'>
              <h1 style={{ color: '#009933' }}>JARA FAQs</h1>
              {/* <p style={{ color: '#009933', fontSize: '25px' }}>JARA FAQs</p> */}
              <p style={{ color: '#596271', fontSize: '20px' }}>
                Find answers to themost frequently asked questions about JARA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='accordion ' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              What is JARA?
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>JARA is your number one shopping and rewards platform</p>
              <br />
              <p>
                We provide you a personalized seamless shoppping experience that &nbsp fits your{' '}
                shopping needs and rewards you for every purchase
              </p>
              <br />
              So you're welcome to join us on this journey, tell a friend to tell a friend JARA don
              come
              <p></p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Who can apply for JARA?
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque doloremque qui
                autem adipisci dolore non eius incidunt, vitae dolores consequuntur! Repudiandae
                dolore culpa asperiores est molestias! Ipsam, quis iste?
              </p>
              .
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              What is the cost associated for using JARA reward?
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque doloremque qui
                autem adipisci dolore non eius incidunt, vitae dolores consequuntur! Repudiandae
                dolore culpa asperiores est molestias! Ipsam, quis iste?
              </p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFour'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='false'
              aria-controls='collapseFour'
            >
              What are the benefits of using JARA?
            </button>
          </h2>
          <div
            id='collapseFour'
            className='accordion-collapse collapse'
            aria-labelledby='headingFour'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque doloremque qui
                autem adipisci dolore non eius incidunt, vitae dolores consequuntur! Repudiandae
                dolore culpa asperiores est molestias! Ipsam, quis iste?
              </p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFive'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFive'
              aria-expanded='false'
              aria-controls='collapseFive'
            >
              Where can I use CredPal cards?
            </button>
          </h2>
          <div
            id='collapseFive'
            className='accordion-collapse collapse'
            aria-labelledby='headingFive'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque doloremque qui
                autem adipisci dolore non eius incidunt, vitae dolores consequuntur! Repudiandae
                dolore culpa asperiores est molestias! Ipsam, quis iste?
              </p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingSix'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSix'
              aria-expanded='false'
              aria-controls='collapseSix'
            >
              What is JARA privacy policy?
            </button>
          </h2>
          <div
            id='collapseSix'
            className='accordion-collapse collapse'
            aria-labelledby='headingSix'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque doloremque qui
                autem adipisci dolore non eius incidunt, vitae dolores consequuntur! Repudiandae
                dolore culpa asperiores est molestias! Ipsam, quis iste?
              </p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingSeven'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSeven'
              aria-expanded='false'
              aria-controls='collapseSeven'
            >
              How to create a business account?
            </button>
          </h2>
          <div
            id='collapseSeven'
            className='accordion-collapse collapse'
            aria-labelledby='headingSeven'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque doloremque qui
                autem adipisci dolore non eius incidunt, vitae dolores consequuntur! Repudiandae
                dolore culpa asperiores est molestias! Ipsam, quis iste?
              </p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingEight'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseEight'
              aria-expanded='false'
              aria-controls='collapseEight'
            >
              How much does it cost to use JARA?
            </button>
          </h2>
          <div
            id='collapseEight'
            className='accordion-collapse collapse'
            aria-labelledby='headingEight'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque doloremque qui
                autem adipisci dolore non eius incidunt, vitae dolores consequuntur! Repudiandae
                dolore culpa asperiores est molestias! Ipsam, quis iste?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row align-items-center'>
        <p style={{ color: '#009933', fontSize: '2rem', textAlign: 'center' }}>
          Would you need any further help?
        </p>
      </div>

      <div className='mb-5 capture-button mx-auto' style={{ maxWidth: '250px' }}>
        <Link to='/contact' className='btn find-out-more' style={{ width: '100%' }}>
          Contact Support
        </Link>
      </div>
    </>
  );
};

export default Main;
