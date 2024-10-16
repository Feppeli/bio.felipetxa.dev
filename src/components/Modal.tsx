interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps>  = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="h-screen w-screen backdrop-blur-sm	 fixed top-0 left-0 flex items-center justify-center p-4">
            <div className="w-full p-1 bg-white flex flex-col items-center justify-center p-2 rounded">
                <h1 className='text-xl font-bold text-center mt-4'>Preencha as seguintes indormações</h1>
                {children}
            </div>
        </div>
    )
}

export default Modal;