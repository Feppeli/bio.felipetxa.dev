interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="h-screen w-screen backdrop-blur-sm	 fixed top-0 left-0 flex items-center justify-center p-4">
            <div className="w-full p-1 bg-white flex flex-col items-center justify-center p-2 rounded md:w-1/2 md:pt-10 md:pb-10 md:pl-6 md:pr-6">
                <h1 className='text-xl font-bold text-center mt-4'>Preencha as seguintes informações</h1>
                <form className='flex flex-col items-left w-full p-2 m-4 gap-3 '>
                    <input type="text" placeholder='Nome completo' required className='border-2 rounded p-2 bg-slate-300 text-black' />
                    <label htmlFor="DDD">Selecione o DDD do seu número:</label>
                    <select name="ddd" id="ddd" required className='border-2 rounded p-2 bg-slate-300 text-black'>
                        <option value="11" >11</option>
                        <option value="11">81</option>
                        <option value="11">27</option>
                    </select>
                    <input type="number" placeholder='numero para contato com DDD' required className='border-2 rounded p-2 bg-slate-300 text-black' />
                    <textarea name="description" id="description" placeholder='Nos conte mais sobre o que você precisa' className='border-2 rounded p-2 bg-slate-300 text-black'></textarea>
                    <label htmlFor="orcamento"> Qual é o seu orçameno?</label>
                    <select name="orcamento" id="orcamento" required className='border-2 rounded p-2 bg-slate-300 text-black'>
                        <option value="basic" >Básico: R$699,90</option>
                        <option value="standard">Intermediario: R$1450,97</option>
                        <option value="pro">Pro: R$2980,50</option>
                        <option value="premium">Premium: a partir de R$5000,00</option>
                    </select>
                </form>
                <div className='flex flex row gap-1'>
                    <button onClick={onClose} className='pl-14 pr-14 pt-3 pb-3 mb-4 bg-black rounded text-white bg-green-600'>Enviar</button>
                    <button onClick={onClose} className='pl-14 pr-14 pt-3 pb-3 mb-4 bg-black rounded text-white bg-red-600'>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;