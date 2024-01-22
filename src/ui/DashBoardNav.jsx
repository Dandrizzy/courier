import { MdHome, } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';


const Nav = () => {

 const navigate = useNavigate();

 return (
  <div className=" items-center flex justify-between p-4 bg-blue-700 text-slate-100">
   <h1>Dashboard</h1>

   <ul className=" lg:text-lg [&>*]:cursor-pointer flex justify-between">
    <li
     className='hover:animate-bounce hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2 flex items-center justify-center gap-1' onClick={() => {
      navigate('/dashboard');
     }}><MdHome />Home</li>

    {/* <li className='hover:animate-bounce flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2' onClick={() => scrollToSection('contact')}><MdReceipt />Ticket</li> */}

   </ul>
  </div>
 );
};

export default Nav;