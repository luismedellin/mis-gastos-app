import { NavLink, Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

import { Home } from '../pages/Home'
import { LoginButton, LogoutButton, Profile } from '../auth/components';
import { About } from '../pages/About';
import { useEffect } from 'react';

export const Navigation = () => {

    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const getToken = async () => { 
            const accessToken = await getAccessTokenSilently();
            localStorage.setItem('token', accessToken );
            localStorage.setItem('token-init-date', new Date().getTime().toString() );
        }

        if(isAuthenticated) {
            getToken();
        }
    }, [getAccessTokenSilently, isAuthenticated])

    return (
        <div>
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
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" 
                            className={ ({isActive}) => isActive ? 'nav-active': '' }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                            className={ ({isActive}) => isActive ? 'nav-active': '' }>About</NavLink>
                    </li>
                </ul>
            </nav>

            </header>

            <Routes>
                <Route path="/about" element={ <About /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="*" element={ <Home /> } />
            </Routes>
        </div>
    )
}
