
import './CartWidget.css'

const CartWidget = () => {
    const cartImg = "../assets/img/cart.png"
    return (
        <div className='m-2 p-2 justify-content-center d-flex'>
            <img className='cart m-0' src={cartImg} alt="cart" />
            <p>10</p>
        </div>
  )
}

export default CartWidget
