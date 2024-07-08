import { createContext, useReducer } from 'react'

const MealsContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
})

const CartReducer = (state, action) => { 
    const itemIndex = state.items.findIndex(item => item.id === action.item.id)
     const itemsList = [...state.items]
    switch (action.type) { 
        case "ADD_ITEM": {
            if (itemIndex > -1) {
                itemsList[itemIndex] = { ...itemsList[itemIndex], quantity: itemsList[itemIndex].quantity + 1 }
            } else {
                itemsList.push({ ...action.item, quantity: 1 })
            }
            return {...state, items: itemsList}
        }
        case "REMOVE_ITEM": { 
            if (itemsList[itemIndex].quantity > 1) {
                itemsList[itemIndex] = { ...itemsList[itemIndex], quantity: itemsList[itemIndex].quantity - 1 }
            } else {
                itemsList.splice(itemIndex, 1)
            }
            return {...state, items: itemsList}
        }
    }
}

export const MealsContextProvider = ({children}) => {
    const [card, dispatchActions] = useReducer(CartReducer, {
        items: [],
    })
    const addItem = (item) => { 
        dispatchActions({type: "ADD_ITEM", item })
    }
    const deleteItem = (item) => { 
        dispatchActions({type: "REMOVE_ITEM", item })
    }
    const cardValue = {
        items: card.items,
        addItem,
        deleteItem
    }
    return <MealsContext.Provider value={cardValue}>{children}</MealsContext.Provider>
}

export default MealsContext