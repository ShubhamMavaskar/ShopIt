import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, Links } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
   
  return (
    <div className='header'>
      <Link to='/'>
        <img className='headerlogo' src='https://user-gen-media-assets.s3.amazonaws.com/seedream_images/47b3e768-994e-4c15-a2fb-6a6fd43547bd.png' />

      </Link>

      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className='header_option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'>{user ? 'Sign Out' :'Sign In'}</span>
        </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingBagIcon />
            <span className='header_optionLineTwo header_basketCount'>
              {basket?.length}
            </span>

          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header
