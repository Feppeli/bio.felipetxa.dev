import './modal.css'

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps>  = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="h-screen w-screen bg-black">
            <div className="p-1 bg-white">
                <button onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;