import { useCallback, useEffect, useState } from "react"

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config)
    const data = await response.json()
    if (!response.ok) { 
        throw new Error (data.message || 'Something went wrong!')
    }
    return data
}
function useHttp(url, config, init) { 
    const [data, setData] = useState(init)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const sendRequest = useCallback(async () => {
        setIsLoading(true)
        try { 
        const resData = await sendHttpRequest(url, config)
        setData(resData)
    } catch (error) { 
        setError(error.message || 'Something went wrong!') 
        } 
        setIsLoading(false)
    }, [url, config])
   
    useEffect(() => {
        if (config && (config.method === 'GET' || !config.method)) {
           sendRequest() 
        }  
    }, [sendRequest, url, config])
    
    return {
        data, 
        error,
        isLoading
    }
}
export default useHttp