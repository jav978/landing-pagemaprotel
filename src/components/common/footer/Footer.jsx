import Logo from "./../../../assets/logo/logo-white.png"
const year = new Date().getFullYear();    

const Footer = () => {
  return (
	<>
	<nav className="bg-[#004094] text-white flex flex-wrap dark:bg-slate-900">
	<div className="flex flex-col items-center justify-between max-w-screen-xl p-4 mx-auto space-x-3 lg:items-end rtl:space-x-reverse lg:flex-row">
	<a href="#" className="flex items-center">
			<img
				src={Logo}
				className="h-10"
				alt="Flowbite Logo"
			/>
        </a>
	<p className="flex mt-2">&copy; {year} <span className="ml-1 fornt-bold">Maprotel</span>. All rights reserved.</p>	 
	</div>
  </nav>
  
  
	</>
  )
}

export default Footer
