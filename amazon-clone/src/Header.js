import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import {auth} from './Firebase'

function Header()
{
    const [{basket, user}] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className = "header">
            <Link to = '/'>
                <img className = 'header__logo'
                src = 'http://pngimg.com/uploads/amazon/amazon_PNG21.png'
                alt = ''/>
            </Link>

            <div class = 'header__search'>
                <input type = 'text' className = 'header__searchInput' />
                <SearchIcon className = 'header__searchIcon'/>
            </div>

            <div class = 'headerNav'>
                <Link to = { !user && '/login'} className = 'header__link'>
                    <div onClick = {login} className = 'headerOption'>
                        <span className = 'header__OptionLineOne'>Hello, {user?.email}</span>
                        <span className = 'header__OptionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to = '/' className = 'header__link'>
                    <div className = 'headerOption'>
                        <span className = 'header__OptionLineOne'>Returns</span>
                        <span className = 'header__OptionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to = '/' className = 'header__link'>
                    <div className = 'headerOption'>
                        <span className = 'header__OptionLineOne'>Your</span>
                        <span className = 'header__OptionLineTwo'>Prime</span>
                    </div>
                </Link>

                <Link to = '/checkout'>
                    <div class = 'header__link'>
                        <div className = 'header__optionBasket'>
                            <ShoppingBasketIcon />
                            <span className = 'header__OptionLineTwo header__basketCount'>{basket?.length}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header