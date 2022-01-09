import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <nav
      className='navbar navbar-light navbar-expand-lg'
      style={{ backgroundColor: '#F1F0F5', paddingRight: '50px' }}
      id='navbar-section'
    >
      <div className='' style={{ margin: '10px 0px 15px 70px' }}>
        <Link to='/'>
          <img src={require('../../assets/images/Jara Logo.svg').default} alt='JARA' width='100' />
        </Link>
      </div>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
          {/* <li className='nav-item'>
            <Dropdown style={{ display: 'inline' }}>
              <Dropdown.Toggle style={{ color: '#596271' }} variant='' id='dropdown-basic-1'>
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu className='drop-down-menu-custom-1'>
                <Dropdown.Item as='div'>
                  <Link className='nav-link' to='/deals'>
                    JARA Deals
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as='div'>
                  <Link className='nav-link' to='/reward'>
                    JARA Rewards
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as='div'>
                  <Link className='nav-link' to='/stores'>
                    JARA Stores
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item as='div'>
                  <Link className='nav-link' to='/wallet'>
                    JARA Wallets
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li> */}

          <li className='nav-item'>
            <Link className='nav-link' to='/deals'>
              Jara Deals
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/reward'>
              Jara Rewards
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/stores'>
              Jara Stores
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/wallet'>
              Jara Wallets
            </Link>
          </li>
          {/* <li className='nav-item'>
            <Link className='nav-link' to='/pricing'>
              Pricings
            </Link>
          </li> */}
          <li className='nav-item'>
            {/* <Link className='nav-link' to='/'> */}
            <a
              href='https://medium.com/@getjara '
              className='nav-link'
              rel='noreferrer'
              target='_blank'
            >
              Blog
            </a>
            {/* </Link> */}
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Sign In
            </Link>
          </li>
          <li>
            <Link
              type='button'
              style={{ paddingLeft: '20px', paddingRight: '20px' }}
              className='rounded-pill btn merchant-button'
              to='/merchant-login'
            >
              Become a Merchant
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
