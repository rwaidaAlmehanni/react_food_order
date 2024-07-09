import { useContext } from "react"
import Modal from "./Modal"
import MealsContext from "../store/mealsContext"
import { currencyFormatter } from "../utils/formatting"
import Button from "./UI/Button"
import UserCartProgress from "../store/progressContext"
import CartItem from "./CartItem"

export default function Cart() { 
    const itemsCtx = useContext(MealsContext)
    const modalCtx = useContext(UserCartProgress)
    const isModalOpen = modalCtx.progress === 'cart'
    const total = itemsCtx.items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)

    const onHideCart = () => { 
        modalCtx.hideCart()
    }
     const onOpenCheckout = () => { 
        modalCtx.openCheckout()
     }

    return (
        <Modal className="main-header" open={isModalOpen} onClose={isModalOpen ? onHideCart : null}>
            <h2>Your Cart</h2>
            <ul>
                {itemsCtx?.items?.map((item) => (
                    <CartItem key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onDecrease={() => itemsCtx.deleteItem(item)}
                        onIncrease={() => itemsCtx.addItem(item)} />))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(total)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={onHideCart}>Cancel</Button>
                {itemsCtx?.items?.length > 0 && <Button onClick={onOpenCheckout}>Go to checkout</Button>}
            </p>
        </Modal>
    )
}