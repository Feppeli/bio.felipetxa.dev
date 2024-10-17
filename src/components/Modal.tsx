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
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="24">24</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="51">51</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="61">61</option>
                        <option value="62">62</option>
                        <option value="63">63</option>
                        <option value="64">64</option>
                        <option value="65">65</option>
                        <option value="66">66</option>
                        <option value="67">67</option>
                        <option value="68">68</option>
                        <option value="69">69</option>
                        <option value="71">71</option>
                        <option value="73">73</option>
                        <option value="74">74</option>
                        <option value="75">75</option>
                        <option value="77">77</option>
                        <option value="79">79</option>
                        <option value="81">81</option>
                        <option value="82">82</option>
                        <option value="83">83</option>
                        <option value="84">84</option>
                        <option value="85">85</option>
                        <option value="86">86</option>
                        <option value="87">87</option>
                        <option value="88">88</option>
                        <option value="89">89</option>
                        <option value="91">91</option>
                        <option value="92">92</option>
                        <option value="93">93</option>
                        <option value="94">94</option>
                        <option value="95">95</option>
                        <option value="96">96</option>
                        <option value="97">97</option>
                        <option value="98">98</option>
                        <option value="99">99</option>
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