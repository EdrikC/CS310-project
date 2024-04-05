import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-black text-white'>
        <nav className='flex justify-between items-center max-container'>
            <h1 className='font-bold text-xl text-indigo-600'>QuickEatz</h1>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-grey'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav