
import Logo from "./../../../assets/logo/logo-white.png";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import {
   
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
   
} from "flowbite-react";

export function Menu() {
    return (
        <>
            <div>
                <Navbar fluid  className="bg-[#004094] dark:text-white dark:bg-slate-900 py-2 lg:py-4">
                    <NavbarBrand href="/">
                        <img
                            src={Logo}
                            className="h-10 pl-8 lg:pl-[72px]"
                            alt="Logo"
                        />
                    </NavbarBrand>

                    <NavbarCollapse>
                        <NavbarLink href="#home" className="text-white text-base" >
                            Inicio
                        </NavbarLink>
                        <NavbarLink className="text-white  text-base" href="#about">Nosotros</NavbarLink>
                        <NavbarLink className="text-white text-base" href="#cliente">Clientes</NavbarLink>
                        <NavbarLink className="text-white text-base" href="#profolio">Servicios</NavbarLink>                            
                        <NavbarLink className="text-white text-base" href="#contactos">Contactos</NavbarLink>
                    </NavbarCollapse>

                    <div className="lg:pr-16">
                        {/* <!-- Dark mode switcher --> */}
                            <Flowbite >
                                <DarkThemeToggle />
                            </Flowbite>
                        {/* <!-- Dark mode switcher end --> */}
                       
                    </div>

                </Navbar>
            </div>
        </>
    );
}
