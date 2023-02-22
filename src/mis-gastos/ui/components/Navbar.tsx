import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { LogoutButton } from '../../../auth';
import { routes } from '../../routes/routes';

export const Navbar = () => {

    const isActive = ({isActive}: {
        isActive: boolean;
        isPending: boolean;
    })=> {
        return `nav-link ${isActive ? 'active' : ''}`;
    }

    const onLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarTogglerUltraVotes" 
                            aria-controls="navbarTogglerUltraVotes" 
                            ria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link 
                        className="navbar-brand" 
                        to="/mis-gastos/dashboard"
                    >
                        Mis Gastos
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerUltraVotes">
                        
                        <ul className="navbar-nav col-6">
                            {
                                routes.map(({to, name})=> (
                                    <li key={ to }>
                                        <NavLink to={ to } 
                                            className={ isActive }>{ name }</NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                        <div id="navbarLogout"
                            className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex">
                            <ul className="navbar-nav ml-auto">
                                <span className="nav-item nav-link text-primary">
                                    {/* { user?.name } */}
                                </span>
                                <LogoutButton />
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
  )
}
