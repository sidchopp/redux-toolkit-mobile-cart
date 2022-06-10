import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  // we use useSelector hook to access our cart(which represents our initial state) from our entire store
  const { cartItems, total, amount } = useSelector(store => store.cart);

  //Conditional rendering: if items in cart < 1
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2> your bag</h2>
          <h4 className="empty-cart">
            is currently empty
          </h4>
        </header>
      </section>
    )
  }

  //otherwise,if items > 1
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  )
}
export default CartContainer;