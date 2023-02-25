import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from './auth';
import { AppRouter } from './routes';
import { Provider } from 'react-redux';
import { store } from './store/store';

function MisGastosApp() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Provider store={ store } >
          <AppRouter />
        </Provider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
}

export default MisGastosApp;
