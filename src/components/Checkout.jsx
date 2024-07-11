import { currencyFormatter } from "../utils/formatting"
import Button from "./UI/Button"
import Input from "./UI/Input"
import Modal from "./Modal"
import { useContext } from "react"
import MealsContext from "../store/mealsContext"
import UserCartProgress from "../store/progressContext"

const Checkout = () => {
    const itemsCtx = useContext(MealsContext)
    const modalCtx = useContext(UserCartProgress)
    const isModalOpen = modalCtx.progress === 'checkout'
    const cartTotal = itemsCtx.items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
    const handleClose = () => { 
        modalCtx.hideCheckout()
    }
    const onSubmitOrder = (event) => { 
        event.preventDefault() // to stop the default behaviour of the form which alwayes reload the page
        const fd = new FormData(event.target) // to get all inputs values by default js function
        const data = Object.fromEntries(fd.entries()) // add data in data object
        console.log(itemsCtx, 'xxxitemsCtx')
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: itemsCtx?.items,
                    customer: data
                }
        })})

    }

    return (
        <Modal className="main-header" open={isModalOpen} onClose={handleClose}>
            <form onSubmit={onSubmitOrder}>
                <h2>Checkout</h2>
                <p>Total mount:{currencyFormatter.format(cartTotal)}</p>
                <Input id="name" label="Full Name" type="text" />
                <Input id="email" label="Email" type="email" />
                <Input id="street" label="Street" type="text" />
                <p className="control-row">
                    <Input id="postal-code" label="Postal Code" type="text" />
                    <Input id="city" label="City" type="text" />
                </p>
                <p className="modal-actions">
                    <Button textOnly type="button" onClick={ handleClose }>Close</Button>
                    <Button>Submit</Button>
                </p>      
            </form>
        </Modal>
    )
 }
export default Checkout