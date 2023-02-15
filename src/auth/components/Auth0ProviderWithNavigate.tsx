import { Auth0Provider } from '@auth0/auth0-react'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Auth0ProviderWithNavigate = ({ children }: Props) => {

    const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;

    console.log(process.env, domain)

    return (
        <Auth0Provider 
            domain={ domain }
            clientId={ clientId }
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
            >
            { children }
        </Auth0Provider>
    )
}
