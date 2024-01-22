import { MdHome, } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import Logout from '../Features/authentication/Logout';


const Nav = () => {

 const navigate = useNavigate();

 return (
  <div className=" items-center flex justify-between p-4 bg-blue-700 text-slate-100">
   <h1>Dashboard</h1>

   <ul className=" lg:text-lg [&>*]:cursor-pointer flex justify-between">
    <li
     className=' hover:bg-neutral-200/20 transition-all duration-300 rounded-full p-2 flex items-center justify-center gap-1' onClick={() => {
      navigate('/dashboard');
     }}>
     <MdHome />
     <span>Home</span>

    </li>

    <li className='flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full px-2'><Logout /></li>

   </ul>
  </div>
 );
};

export default Nav;