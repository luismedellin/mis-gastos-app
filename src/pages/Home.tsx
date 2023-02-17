import { LoginButton } from "../auth"

export const Home = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Mis Gastos App</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">Acerca de</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Mis Gastos App</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Organiza todos tus gastos diarios de una manera ágil y fácil</h2>
                        <LoginButton />
                    </div>
                </div>
            </div>
        </header>
    </>
    // <main id="LoginPage" className="d-flex align-items-center justify-content-center mt-2" style={{minHeight: '60vh'}}>
    //   <div className="col col-md-4 p-4 border">
      
    //     <div className="mb-4 d-flex justify-content-center col-8 m-auto" 
    //       style={{backgroundColor: '#FF8200'}}
    //       >
    //       <img src={process.env.PUBLIC_URL + '/img/ultra_logo_light.svg'} height="70px" width="70px" alt="logo" />
    //     </div>

    //     <h1 className="text-center">Mis Gastos App</h1>
    //     <p>Bienvenido a la ap</p>
        
    //     <h2 className="text-center mb-4">Iniciar sesión:</h2>

    //     <div className="d-flex justify-content-center">
    //       <button type="button" 
    //           className="btn btn-outline-danger mb-4" 
    //           // style={{backgroundColor:"#eb3c00"}}
    //           >
    //           <i className="fab fa-microsoft text-danger"></i>&nbsp;
    //           Iniciar sesión</button>
    //     </div>
    //   </div>
    // </main>
  )
}
