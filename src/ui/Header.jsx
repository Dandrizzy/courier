import { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { MdClose, MdHome, MdMail, MdMenu } from 'react-icons/md';

const Header = () => {
 const [open, setOpen] = useState(false);
 return (
  <div className=' md:hidden block'>
   <div className=" items-center flex justify-between p-4 bg-neutral-900 text-slate-100">

    <h1>
     VelocityLogistics
    </h1>

    <div className=" text-lg" onClick={() => setOpen(isOpen => !isOpen)}>{open ? <MdClose /> : <MdMenu />}</div>
   </div>

   {open && <ul className=" px-4 bg-red-600  text-slate-100 grid divide-y [&>*]:cursor-pointer ">

    <li className='flex items-center gap-1 hover:bg-red-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2'><MdHome />Home</li>

    <li className=' flex items-center gap-1 hover:bg-red-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2 '><MdMail />Contact</li>

    <li className=' flex items-center gap-1 hover:bg-red-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2'><FaExclamationCircle />About us</li>
   </ul>}
  </div>
 );
};

export default Header;