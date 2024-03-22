import Logo from "./../../../assets/logo/logo-white.png";

import {
    Navbar,
   
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle
} from "flowbite-react";
import ButtonDarkMode from "../ButtonDarkMode/ButtonDarkMode";

export function Menu() {
    return (
        <>
            <div className="bg-[#004094] dark:bg-slate-900 ">
                <div className="max-w-screen-xl mx-auto bg-[#004094]">
                <Navbar
                    fluid
                    className=" bg-[#004094]  dark:text-white dark:bg-slate-900 px-4"
                >
                    <NavbarBrand href="/">
                        <img
                            src={Logo}
                            className="h-10"
                            alt="Logo"
                        />
                    </NavbarBrand>
                    <div className="flex  order-2 gap-2 py-1 font-montserrat">
                        <ButtonDarkMode />
                        <NavbarToggle  />
                    </div>

                    <NavbarCollapse>
                        <NavbarLink
                            href="#home"
                            className="text-white text-base"
                        >
                            Inicio
                        </NavbarLink>
                        <NavbarLink
                            className="text-white  text-base"
                            href="#about"
                        >
                            Nosotros
                        </NavbarLink>
                        <NavbarLink
                            className="text-white text-base"
                            href="#cliente"
                        >
                            Clientes
                        </NavbarLink>
                        <NavbarLink
                            className="text-white text-base"
                            href="#profolio"
                        >
                            Servicios
                        </NavbarLink>
                        <NavbarLink
                            className="text-white text-base"
                            href="#contactos"
                        >
                            Contactos
                        </NavbarLink>
                    </NavbarCollapse>                 
                   
                </Navbar>
                </div>
            </div>
        </>
    );
}
