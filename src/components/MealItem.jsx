export default function MealItem({ image, name, description, price }) {
    
    return (
        <li className="meal-item">
            <img src={image} />
            <h3>{name}</h3>
            <div className="meal-item-price">{price}</div>
            <article className="meal-item-description">{description}</article>
            <button className="meal-item-actions">Add to Cart</button>
        </li>
    )
}