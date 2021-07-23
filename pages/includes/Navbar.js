import React, { Component } from 'react'
import Link from 'next/link'

export default class Navbar extends Component {


    // handleCloseExpand(){
    //     document.getElementById("navbarsExample04").classList.remove("show");
    // }

    // handleShowExpand(){
    //     document.getElementById("navbarsExample04").classList.add("show");
    // }

    
    componentDidUpdate(){
        document.getElementById("navbarsExample04").classList.remove("show");
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container">
                    <a className="navbar-brand" href="/">Qtonix</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">

                        <li className="nav-item">
                        <Link href='/signin'><a className="nav-link" aria-current="page">Sign In</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link href='/register'><a className="nav-link" aria-current="page">Register</a></Link>
                        </li>


                        {/* <li className="nav-item">
                        <Link href='/'><a className="nav-link" aria-current="page" onClick={this.handleCloseExpand}>Home</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link href='/aboutus'><a className="nav-link" aria-current="page" onClick={this.handleCloseExpand}>About</a></Link>
                        </li> */}
                        {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown04">
                            <li>                        <Link href='/aboutus'><a className="nav-link" aria-current="page">About</a></Link>
                        </li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> */}
                    </ul>
                    
                    </div>
                </div>
            </nav>

        )
    }
}
