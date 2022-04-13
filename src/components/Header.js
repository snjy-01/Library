import React from 'react'
import { Link } from 'react-router-dom';
export default function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light pd-10">

            <div className="container-fluid">
                
                <form className="container-fluid justify-content-start">
                <h6 className="navbar-brand"></h6>
                    <p></p>
                    <button type="button" className="btn btn-secondary btn-lg me-2 disable">{props.title}</button>
                    <button type="button" className="btn btn-outline-primary me-2"><Link className="nav-link active" to="/LibHome">ISSUED BOOK</Link></button>
                    <button type="button" className="btn btn-outline-secondary me-2"><Link className="nav-link" to="/Issue"> ISSUE BOOK</Link></button>
                    <button type="button" className="btn btn-outline-info me-2"><Link className="nav-link " to="/About">About</Link></button>
                </form>
                </div>
            
        </nav>
    )
}
