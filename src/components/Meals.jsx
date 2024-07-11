import { useState, useEffect } from 'react'
import MealItem from './MealItem'
import Modal from './Modal'
import useHttp from '../hooks/useHttp'


const requestConfig = {}
export default function Meals() {
    // const [mealsList, setMealsList] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    const { data: mealsList, error, isLoading } = useHttp('http://localhost:3000/meals', requestConfig, [])
    
    // useEffect(() => {
    //     async function fetchMeals() {
    //             setIsLoading(true)
    //             const response = await fetch('http://localhost:3000/meals')
    //             const result = await response.json()
    //             setMealsList(result)
    //             setIsLoading(false)
    //         }
    //         fetchMeals()
    // }, [])
    if (error) { 
        return <p> No Meals Found !!</p>
    }
    
    return (
        <>
        <ul id="meals">
            {isLoading ? <p>Loading...</p> :
                mealsList?.map((meal) => {
                   return  <MealItem key={meal.id} meal={meal} />
                })}
        </ul>
        <Modal />
        </>
        
    )
}