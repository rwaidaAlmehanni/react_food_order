import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
const Modal = ({ open, children, className = '', onClose }) => { 
    const dialogRef = useRef()

    useEffect(() => {
        if (open) {
            dialogRef?.current?.showModal()
        }
        return() => { dialogRef?.current?.close() }
        
    }, [open])
    console.log(open, 'xxxopen')

    return createPortal(
        <dialog className={`modal ${className}`} ref={ dialogRef } onClose={ onClose }>
             { children }
        </dialog>, document.getElementById('modal')
    )
}
export default Modal