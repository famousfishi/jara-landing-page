import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

// stylesheet imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CustomerLogin from './components/auth/CustomerLogin';
import CustomerSignup from './components/auth/CustomerSignup';
import { DefaultToastContainer, ToastProvider } from 'react-toast-notifications';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './utils/ErrorBoundary';
import MerchantSignup from './components/auth/MerchantSignup';
import MerchantLogin from './components/auth/MerchantLogin';
import Pricing from './components/pages/Pricing';
import Deals from './components/pages/Deals';
import Stores from './components/pages/Stores';
import Reward from './components/pages/Reward';
import Wallet from './components/pages/Wallet';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';
import Faq from './components/pages/faq';

declare global {
  interface Window {
    __react_toast_provider: any;
  }
}

window.__react_toast_provider = React.createRef();
// create a default container so we can override the styles
const ToastContainer = (props: any) => (
  <DefaultToastContainer style={{ zIndex: '1900' }} {...props} />
);

const App = (): JSX.Element => {
  return (
    <ToastProvider components={{ ToastContainer }} ref={window.__react_toast_provider}>
      <AppProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={CustomerLogin} />
              <Route exact path='/register' component={CustomerSignup} />
              <Route exact path='/merchant-register' component={MerchantSignup} />
              <Route exact path='/merchant-login' component={MerchantLogin} />
              <Route exact path='/pricing' component={Pricing} />
              <Route exact path='/deals' component={Deals} />
              <Route exact path='/stores' component={Stores} />
              <Route exact path='/reward' component={Reward} />
              <Route exact path='/wallet' component={Wallet} />
              <Route exact path='/career' component={Career} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/faq' component={Faq} />
            </Switch>
          </BrowserRouter>
        </ErrorBoundary>
      </AppProvider>
    </ToastProvider>
  );
};

export default App;
