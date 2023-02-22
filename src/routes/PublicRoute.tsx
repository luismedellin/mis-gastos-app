import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom'

interface Props {
    children: JSX.Element
}
export const PublicRoute = ({ children }: Props) => {
    const { isAuthenticated} = useAuth0();

    return !isAuthenticated
        ? children
        : <Navigate to="/mis-gastos/dashboard" />
}
