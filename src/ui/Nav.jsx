import { MdHome, MdMail } from 'react-icons/md';
import { scrollToSection } from '../Hooks/ScrollToSection';
import { FaExclamationCircle } from 'react-icons/fa';


const Nav = () => {

 return (
  <div className=" hidden items-center md:grid grid-cols-2 p-4 bg-neutral-900 text-slate-100">
   <h1>Logistics</h1>

   <ul className=" lg:text-lg [&>*]:cursor-pointer flex justify-between">
    <li className='hover:animate-bounce hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2 flex items-center justify-center gap-1' onClick={() => scrollToSection('home')}><MdHome />Home</li>

    <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('contact')}><MdMail />Contact</li>

    <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('investors')}><FaExclamationCircle />About us</li>
   </ul>
  </div>
 );
};

export default Nav;