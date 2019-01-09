import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar1'>
                    <ul>
                        <li><Link style={{ textDecoration: 'none', color:'white' }} to='/' >Home</Link></li>
                        <li><Link style={{ textDecoration: 'none', color:'white' }} to='/login' >Login</Link></li>
                        <li><Link style={{ textDecoration: 'none', color:'white' }} to='/signup' >Signup</Link></li>
                        <li><Link style={{ textDecoration: 'none', color:'white' }} to='/about' >About</Link></li>
                        <li><Link style={{ textDecoration: 'none', color:'white' }} to='/profile' >Perfil</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}



export default Navbar;