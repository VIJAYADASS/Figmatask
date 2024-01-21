import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentIcon from '@mui/icons-material/Payment';
import BuildIcon from '@mui/icons-material/Build';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import PaletteIcon from '@mui/icons-material/Palette';
import ExtensionIcon from '@mui/icons-material/Extension';
import CallIcon from '@mui/icons-material/Call';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <SmartToyIcon />
        <div className="name">
          <h1>Nishyan</h1>
          <p>Visit store</p>
          <KeyboardArrowDownIcon className="dropdown-icon" />
        </div>
      </div>
      <div className="nav-item">
        <HomeIcon />
        Home
      </div>
      <div className="nav-item">
        <ShoppingCartIcon />
        Order
      </div>
      <div className="nav-item">
        <StorefrontIcon />
        Product
      </div>
      <div className="nav-item">
        <LocalShippingIcon />
        Delivery
      </div>
      <div className="nav-item">
        <BarChartIcon />
        Analytics
      </div>
      <div className="nav-item active">
        <PaymentIcon />
        Payment
      </div>
      <div className="nav-item">
        <BuildIcon />
        Tool
      </div>
      <div className="nav-item">
        <LocalOfferIcon />
        Discount
      </div>
      <div className="nav-item">
        <PeopleIcon />
        Audience
      </div>
      <div className="nav-item">
        <PaletteIcon />
        Appearance
      </div>
      <div className="nav-item">
        <ExtensionIcon />
        Plugins
      </div>
      <div className='nav-item'>
        <CallIcon />
        Contact
      </div>
      <div className="wallet-section">
        <AccountBalanceWalletIcon className='icon' />
        <div className="wallet-info">
          <p>Available credits</p>
          <h3>520.77</h3>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
