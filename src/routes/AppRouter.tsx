import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MisGastosRoutes } from '../mis-gastos';
import { Home } from '../pages';
import { PrivateRoute, PublicRoute } from './';

export const AppRouter = () => {

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
    <Routes>
        
        <Route path="mis-gastos/*" element={
            <PrivateRoute>
                <MisGastosRoutes />
            </PrivateRoute>
        } />

        <Route path="*" element={
            <PublicRoute>
                <Routes>
                    <Route path="/*" element={<Home />} />
                </Routes>
            </PublicRoute>
        } />
        
    </Routes>
    )    
}
