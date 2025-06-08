import Logo from '../../assets/Logo.png'
import { useState } from 'react'

const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        link: '/'
    },
    {
        id: 2,
        title: 'Nosotros',
        link: '/'
    },
    {
        id: 3,
        title: 'Contacto',
        link: '/'
    },
    {
        id: 4,
        title: 'Soporte',
        link: '/'
    },
]

const navbarRedes = [
    {
        id: 1,
        title: 'Instagram',
        link: 'https://www.instagram.com/',
        icon: 'bi bi-instagram'
    },
    {
        id: 2,
        title: 'TikTok',
        link: 'https://www.tiktok.com/',
        icon: 'bi bi-tiktok'
    },
]

export const Navbar = () => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <nav className='fixed top-0 left-0 w-full bg-purple-900/30 backdrop-blur-md z-50'>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
                <div>
                    <img src={Logo} alt="logo-del-sitio" className='w-[100px]' />
                </div>
                {/* Boton de hamburguesa */}
                <button
                    onClick={toggleMenu}
                    className='md:hidden text-white'
                    aria-label="Menú de navegación"
                    aria-expanded={open}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        {open ? (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />) : (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </button>

                {/* Navegación en desktop*/}
                <div className='hidden md:block'>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    className='text-white sm:text-lg text-sm hover:text-sky-200 
                                    transition-transform hover:scale-110 transform inline-block duration-300'
                                    href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Navegación redes en desktop*/}
                <div className='hidden md:block'>
                    <ul className='flex space-x-4'>
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-block transition-transform duration-300 transform hover:scale-125'
                                    href={link.link}>
                                    <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200
                                        transition-all duration-300`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Menu movil */}
            <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarLinks.map((link) => (
                        <li key={link.id} className='py-2 text-center'>
                            <a
                                className='text-white hover:text-sky-200'
                                href={link.link}
                                onClick={() => setOpen(false)}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className='flex space-x-4 px-4 py-2 border-t border-purple-700'>
                    {navbarRedes.map((link) => (
                        <li key={link.id} className='text-lg text-white hover:text-sky-200'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block'
                                href={link.link}
                                onClick={() => setOpen(false)}>
                                <i className={`${link.icon} `}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}


export default Navbar