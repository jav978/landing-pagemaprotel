
import ImageHero from './../../assets/image-agent/agente1.png';
import whatsappIcon from './../../assets/icons/icons8-whatsapp.svg';

import '@fontsource/bakbak-one';
const Hero = () => {
  return (
	<>
	<section className="" id="home" >
    <div className="grid max-w-screen-xl grid-cols-1 px-4 py-6 mx-auto text-center md:grid-cols-1 lg:py-8 lg:grid-cols-2">
            
      <div className="flex flex-col items-center w-full gap-2 lg:items-start text-slate-800 dark:text-white">
    
        <h1 className="text-3xl lg:text-[60px] lg:leading-none lg:text-start font-bakbak text-center  font-bakbak-one">
          Brindamos Inteligencia tecnológica para su negocio
        </h1>
        <p className="mx-auto mt-8 text-lg font-normal lg:mb-8 lg:mr-10 lg:text-left sm:text-center lg:text-2xl font-montserrat">
          Lo acompañamos en su proceso de Transformación Digital, pues nuestra pasión es hacer que la tecnología sea el mejor aliado para su negocio.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
        href="https://api.whatsapp.com/send?phone=584123456789&text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tu%20producto"
        className="inline-flex items-center justify-center px-5 py-3 mt-6 text-base font-bold text-center text-white capitalize bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
    >	
        
       Contactenos
        <img className="w-6 h-6 ml-2" src={whatsappIcon} alt="Logoo de Whatsapp" /> 
		
    </a>
        </div>        
      </div>        
         <img src={ImageHero} className="rounded-3xl  mt-8 lg:mt-0 w-[100%]   lg:block  mx-auto lg:h-[100%]" alt="Agent image"/>
      
    </div>
  </section>
	</>
  )
}

export default Hero
