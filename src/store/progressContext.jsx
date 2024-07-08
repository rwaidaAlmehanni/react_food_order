import { createContext, useState } from "react";

const UserCartProgress = createContext({
    progress: '',
    openCart: () => { },
    hideCart: () => { },
    openCheckout: () => { },
    hideCheckout: () => { }
})
export function UserCartProgrssProvider({ children }) { 
    const [userProgress, setUserProgress] = useState('')
    const openCart = () => { 
      setUserProgress('cart')  
    }
    const hideCart = () => { 
      setUserProgress('')  
    }
    const openCheckout = () => { 
      setUserProgress('checkout')  
    }
    const hideCheckout = () => { 
      setUserProgress('')  
    }
    const userProgressCtx = {
        progress: userProgress,  
        openCart,
        hideCart,
        openCheckout,
        hideCheckout
    }
    return (<UserCartProgress.Provider value={userProgressCtx}>{ children}</UserCartProgress.Provider>)
} 
export default UserCartProgress