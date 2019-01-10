import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';


class Navbar extends Component {
    
    state = {
        current: 'mail',
      }

      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    render() {      
        
        return (

            // <div>

            //     <nav>
            //         <div class="nav-wrapper">
            //             <Link to='/' class="brand-logo">Logo</Link>
            //             <Link to='#' data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></Link>
            //             <ul class="right hide-on-med-and-down">
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/' >Home</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/login' >Login</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/signup' >Signup</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/about' >About</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/profile' >Perfil</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/logout' >logout</Link></li>
            //             </ul>
            //         </div>
            //     </nav>    

            //             <ul class="sidenav" id="mobile-demo">
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/' >Home</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/login' >Login</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/signup' >Signup</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/about' >About</Link></li>
            //                 <li><Link style={{ textDecoration: 'none', color:'white' }} to='/profile' >Perfil</Link></li>
            //             </ul>
          
            // </div>

            <div>
       <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        >
        <Menu.Item key="home">
        <Link to='/'><Icon type="home" theme="twoTone"/>Home</Link>
        </Menu.Item>

        <Menu.Item key="login">
        <Link to='/login' ><Icon type="login" style={{color: 'rgb(94,149,255)'}}/>Login</Link>
        </Menu.Item>

        <Menu.Item key="signup">
        <Link to='/signup'><Icon type="plus-square" theme="twoTone" />Sign up</Link>
        </Menu.Item>

        <Menu.Item key="about">
        <Link to='/about'><Icon type="info-circle" style={{color: 'rgb(94,149,255)'}}/>About</Link>
        </Menu.Item>
        
        <Menu.Item key="profile">
        <Link to='/profile'><Icon type="idcard" theme="twoTone" />Profile</Link>
        </Menu.Item>

        <Menu.Item key="logout">
        <Link to='/logout'><Icon type="logout" style={{color: 'rgb(94,149,255)'}} />Logout</Link>
        </Menu.Item>

      </Menu>
      </div>

        );
    }
}



export default Navbar;