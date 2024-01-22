import { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { MdClose, MdHome, MdMail, MdMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../Hooks/ScrollToSection';

const Header = () => {
 const navigate = useNavigate();
 const [open, setOpen] = useState(false);
 return (
  <div className=' md:hidden block'>
   <div className=" items-center flex justify-between p-4 bg-blue-700 text-slate-100">

    <h1 onClick={() => navigate('/')}>
     VelocityExpress
    </h1>

    <div className=" text-lg" onClick={() => setOpen(isOpen => !isOpen)}>{open ? <MdClose /> : <MdMenu />}</div>
   </div>

   {open && <ul className=" px-4 bg-blue-600  text-slate-100 grid divide-y [&>*]:cursor-pointer ">

    <li className='flex items-center gap-1 hover:bg-blue-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2'><MdHome />Home</li>

    <li className=' flex items-center gap-1 hover:bg-blue-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2 ' onClick={() => scrollToSection('contact')}><MdMail />Contact</li>

    <li className=' flex items-center gap-1 hover:bg-blue-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => navigate('/dashboard')}><FaUser />Admin</li>
   </ul>}
  </div>
 );
};

export default Header;