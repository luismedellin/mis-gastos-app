import { LoginButton, LogoutButton, Profile } from './auth/components';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { isAuthenticated } = useAuth0();


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola mundo</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {
          isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          )
          : <LoginButton />
        }
      </header>
    </div>
  );
}

export default App;
