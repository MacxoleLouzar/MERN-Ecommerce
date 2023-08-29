import React, { useState } from 'react'
import AppContext from './AppContext'

const AppState = ({children}) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [user, setUser] = useState(null)


    const addProduct = (data) => {
        setProducts(data)
    }

    const addToCart = (data) => {
        if (cart.includes(data)) {
            return
        }
        setCart([...cart, data])
    }

    const removeFromCart = (product) => {
        let prod = cart.filter((x) => x._id !== product._id)
        setCart(prod)
    }

    const updateCountCart = (id, count) => {
        let itemCount = cart.map((x) => x._id ? { ...x, count } : x);
        setCart(itemCount)
    }

    const clearCart = () => {
        setCart([])
    }

    const updateUserData = (data) => {
        setUser(data)
    }

  return (
      <AppContext.Provider value={{ products, cart, user, addProduct, addToCart, removeFromCart, updateCountCart, clearCart, updateUserData }}>
          {children}
    </AppContext.Provider>
  )
}

export default AppState