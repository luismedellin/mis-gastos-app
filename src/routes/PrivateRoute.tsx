import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
    children: JSX.Element
}
export const PrivateRoute = ({ children }: Props) => {
    const { isAuthenticated} = useAuth0();

    const { pathname, search } = useLocation();
    localStorage.setItem('lastPath', `${pathname+search}`);

    return isAuthenticated
        ? children
        : <Navigate to='/login' />
}
