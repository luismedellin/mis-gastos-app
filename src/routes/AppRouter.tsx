import { Route, Routes } from 'react-router-dom';
import { MisGastosRoutes } from '../mis-gastos';
import { Home } from '../pages';
import { PrivateRoute, PublicRoute } from './';

export const AppRouter = () => {
    return (
    <Routes>
        <Route path="login/*" element={
            <PublicRoute>
                <Routes>
                    <Route path="/*" element={<Home />} />
                </Routes>
            </PublicRoute>
        } />

        <Route path="/*" element={
            <PrivateRoute>
                <MisGastosRoutes />
            </PrivateRoute>
        } />
        
    </Routes>
    )    
}
