import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from './auth';
import { AppRouter } from './routes';

function MisGastosApp() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <AppRouter />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
}

export default MisGastosApp;
