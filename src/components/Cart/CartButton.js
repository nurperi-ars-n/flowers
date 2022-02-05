import cart from '../../assets/icons/cart.svg'
import classes from '../../assets/styles/CartButton.module.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function CartButton() {

    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <Link to='/cart'>
            <div className={classes.cartStyle}>
                <img src={cart} alt='flower'/>
                <span className={classes.round}>{totalAmount}</span>
            </div>   
        </Link>
    )
}
