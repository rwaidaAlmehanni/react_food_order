import Button from './UI/Button'
import { currencyFormatter } from '../utils/formatting'
import { useContext } from 'react'
import MealsContext from '../store/mealsContext'

export default function MealItem({ meal }) {
    const cardCtx = useContext(MealsContext)
    const onAddItem = () => { 
        cardCtx.addItem(meal)
    }
     
    return (
        <li className="meal-item">
            <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name} image`} />
            <h3>{name}</h3>
            <div className="meal-item-price">{currencyFormatter.format(meal.price)}</div>
            <article className="meal-item-description">{meal.description}</article>
            <Button className={'meal-item-actions'} onClick={onAddItem}>Add to Cart</Button>
        </li>
    )
}