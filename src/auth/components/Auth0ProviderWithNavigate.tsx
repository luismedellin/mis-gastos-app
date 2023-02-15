import { AppState, Auth0Provider, User } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const navigate = useNavigate();

    const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri && audience)) {
        return null;
    }

    return (
        <Auth0Provider 
            domain={ domain }
            clientId={ clientId }
            authorizationParams={{
                audience: audience,
                redirect_uri: redirectUri,
              }}
              onRedirectCallback={ onRedirectCallback }
            >
            { children }
        </Auth0Provider>
    )
}
