// import background from './assets/background.jpg'
import img1 from './assets/curso de programacao.png'
import img2 from './assets/landingpage de advogado.png'
import img3 from './assets/orçamento.png'
import img4 from './assets/sistema.png'

function App() {

  // style={{ backgroundImage: `url(${background})` }}  background colorido

  return (
    <>
      <main className='bg-black h-screen w-full'>
        <div className="h-full md:h-screen bg-cover bg-center bg-black pb-4" >
          <div className='w-full h-full  sm:p-4 backdrop-blur-sm flex flex-col items-center justify-center	gap-8'>
            <h1 className='pt-0 pb-5 text-4xl text-white font-bold '>DF<span className='font-normal text-3xl'>Systems</span></h1>

            {/* grid */}
            <div className='flex flex-col md:grid grid-cols-2 gap-4 w-3/4 h-3/4'>

            {/* Elementos do grid */}
              <div className='row-start-1 row-end-3 p-5 md:p-10 rounded-xl bg-cover bg-center hover:grayscale cursor-pointer delay-500 md:hover:p-6 md:hover:m-6 easy-in-out duration-500' style={{ backgroundImage: `url(${img2})` }}>
                <div className='flex items-left justify-center flex-col w-full h-full'>
                  <h1 className='text-4xl font-normal text-white'>Landingpages<br /> <span className='text-2xl font-thin'>para advogados e escritórios de advocacia</span></h1>
                  <h3 className=' text-2xl md:text-4xl text-white pt-4 font-bold'>A partir de:<span className='text-4xl font-semibold text-green-600'>R$699,90</span></h3>
                </div>
              </div>

              <div className='col-start-2 p-5 md:p-10  rounded-xl bg-cover bg-center flex items-left justify-center flex-col w-full h-full hover:grayscale ease-in-out cursor-pointer delay-500 md:hover:p-6 md:hover:m-6 easy-in-out duration-500' style={{ backgroundImage: `url(${img1})` }}>
                <h1 className=' text-center text-3xl md:text-4xl font-bold text-white '>Realizar Orçamento</h1>
              </div>

              <div className='col-start-2 p-5 md:p-10  rounded-xl bg-cover bg-center flex items-left justify-center flex-col w-full h-full hover:grayscale ease-in-out cursor-pointer delay-500 md:hover:p-6 md:hover:m-6 easy-in-out duration-500' style={{ backgroundImage: `url(${img3})` }}>
                <h1 className='text-center text-3xl md:text-4xl font-bold text-white'>Preciso de um Site!</h1>
              </div>

              <div className='col-start-1 col-end-3 p-5 md:p-10 rounded-xl bg-cover bg-center flex items-left justify-center flex-col w-full h-full hover:grayscale ease-in-out cursor-pointer delay-500 md:hover:p-6 md:hover:m-6 easy-in-out duration-500' style={{ backgroundImage: `url(${img4})` }}>
                <h1 className='text-left text-2xl md:text-4xl font-normal text-white'>Curso de programação<br/> web Full Stack <span className=' text-2xl md:text-4xl font-black text-white'>(em breve)</span></h1>
              </div>

            </div>
          </div>

        </div>
      </main>
    </>
  )

}

export default App
