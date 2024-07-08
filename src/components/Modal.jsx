import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
const Modal = ({ open, children, className = '' }) => { 
    const dialogRef = useRef()

    useEffect(() => {
        if (open) {
            dialogRef?.current?.showModal()
        }
        return() => { dialogRef?.current?.close() }
        
    }, [open])

    return createPortal(
        <dialog className={`modal ${className}`} ref={ dialogRef }>
             { children }
        </dialog>, document.getElementById('modal')
    )
}
export default Modal