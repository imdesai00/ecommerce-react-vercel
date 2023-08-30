import React from 'react'


const Navbar = () => {
    return (
        <>
            <header id="header" className="header">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="/" className="logo d-flex align-items-center">
                        <span>NooralSidhra</span>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/">Home</a></li>
                            <li className="dropdown"><a href="#"><span>Products</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/MEP">MEP</a></li>
                                    <li><a href="/Food">Food</a></li>
                                    <li><a href="/Textile">Textile</a></li>
                                    <li><a href="/Cosmetic">Cosmetic & readymate garments</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="/About">About</a></li>
                            <li><a className="nav-link scrollto" href="/Contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>

    )
}

export default Navbar