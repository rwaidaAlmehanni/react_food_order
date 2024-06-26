import { useState, useEffect } from 'react'
import MealItem from './MealItem'
export default function Meals() {
    const [mealsList, setMealsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchMeals() {
                setIsLoading(true)
                const response = await fetch('http://localhost:3000/meals')
                const result = await response.json()
                setMealsList(result)  
                setIsLoading(false)
            }
            fetchMeals() 
    }, [])
    
    return (
        <ul id="meals">
            {isLoading ? <p>Loading...</p> :
                mealsList.map((meal) => {
                   return  <MealItem key={meal.id} {...meal} />
                })}
        </ul>
    )
}