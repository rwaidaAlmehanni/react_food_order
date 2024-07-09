import { useContext } from 'react'
import logoImage from '../assets/logo.jpg'
import Button from './UI/Button'
import MealsContext from '../store/mealsContext'
import UserCartProgress from '../store/progressContext'

export default function Header() { 
    const cardCtx = useContext(MealsContext)
    const modalCtx = useContext(UserCartProgress)
    const cardValue = cardCtx.items.reduce((acc, item) => acc + item.quantity, 0)

    const onOpenCart = () => { 
        modalCtx.openCart()
    }
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImage} alt="logo"/>
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly onClick={onOpenCart}>Cart ({ cardValue})</Button>
            </nav>
        </header>
    )
}