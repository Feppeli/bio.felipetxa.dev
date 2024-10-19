import { useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
} 

// remove types number
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        phone: "",
        name: "",
        ddd: "",
        ads: "",
        cash: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // console.log('Valor capturado:', value); // Debug
    };

    const handleSubmit = (e: React.FormEvent) => {
        const {phone, name, ddd, ads, cash, description} = formData
        e.preventDefault();

        // console.log('Dados do formulário:', formData);
        
        let validationName = name.trim().replace(/\s+/g, '+');
        let validationDescription = description.trim().replace(/\s+/g, '+');

        const url = `https://wa.me/5581991274483?text=Olá+preciso+de+um+site+ou+sistema+:) %0 %0AANome:+${validationName} %0AContato:+(${ddd})+${phone} %0AOrcamento:+${cash} %0Adescrição+do+projeto:+${validationDescription} %0ACanal:+${ads}`
        window.open(url, '_blank')

        onClose(); // Fecha o modal após o submit
    };

    return (
        <form onSubmit={handleSubmit} className="h-screen w-screen backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center p-4">
            <div className="w-full p-1 bg-white flex flex-col items-center justify-center p-2 rounded md:w-1/2 md:pt-8 md:pb-8 md:pl-6 md:pr-6">
                <h1 className='text-xl font-bold text-center mt-4'>Preencha as seguintes informações</h1>
                <div className='flex flex-col items-left w-full p-2 m-4 gap-3 '>
                    <input
                        type="text"
                        placeholder='nome completo'
                        name="name"
                        id="name"
                        onChange={handleChange}
                        required
                        className='border-2 rounded p-2 bg-slate-300 text-black'
                    />

                    <input
                        type="text"
                        placeholder='Informe o seu DDD'
                        name="ddd"
                        id="ddd"
                        onChange={handleChange}
                        required
                        maxLength={3}
                        className='border-2 rounded p-2 bg-slate-300 text-black'
                    />
                    
                    <input
                        type="text"
                        placeholder='Digite seu número para contato'
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        required
                        maxLength={9}
                        className='border-2 rounded p-2 bg-slate-300 text-black'
                    />

                    <input
                        type="text"
                        placeholder='Descreva o seu projeto'
                        name="description"
                        id="description"
                        onChange={handleChange}
                        required
                        className='border-2 rounded p-2 bg-slate-300 text-black'
                    />

                    <label htmlFor="orcamento"> Qual é o seu orçamento?</label>
                    <select
                        name="cash"
                        id="cash"
                        onChange={handleChange}
                        required
                        className='border-2 rounded p-2 bg-slate-300 text-black'
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="basic">Básico: R$699,90</option>
                        <option value="standard">Intermediário: R$1450,97</option>
                        <option value="pro">Pro: R$2980,50</option>
                        <option value="premium">Premium: a partir de R$5000,00</option>
                    </select>
                    
                    <label htmlFor="funil">Como você nos encontrou?</label>
                    <select
                        name="ads"
                        id="ads"
                        onChange={handleChange}
                        required
                        className='border-2 rounded p-2 bg-slate-300 text-black'
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="Instagram pessoal do Felipe">Instagram do Felipe</option>
                        <option value="Istagram da Ravel Systems">Instagram da Ravel Systems</option>
                        <option value="facebook">Facebook</option>
                        <option value="Anúncio do Instagram">Anúncio do Instagram</option>
                        <option value="google">Google</option>
                    </select>
                </div>
                <div className='flex flex row gap-1'>
                    <button type="submit" className='pl-14 pr-14 pt-3 pb-3 mb-4 bg-black rounded text-white bg-green-600'>Enviar</button>
                    <button type="button" onClick={onClose} className='pl-14 pr-14 pt-3 pb-3 mb-4 bg-black rounded text-white bg-red-600'>Fechar</button>
                </div>
            </div>
        </form>
    );
};

export default Modal;