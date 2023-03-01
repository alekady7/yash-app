import React from 'react'
import './Navbar.css'

//icons
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='navbar__left'>
                <Link to='/'><h2 className='logo'>Name</h2></Link>
            </div>
            <div className='navbar__right'>
                <span className='searchIcon'><SearchIcon /></span>
                <Link to='/wishlist'><span className='favIcon'><FavoriteBorderIcon /></span></Link>
                <Link to='/cart'><span className='cartIcon'><ShoppingCartIcon /></span></Link>
                <span className='menuIcon'><MenuIcon /></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar