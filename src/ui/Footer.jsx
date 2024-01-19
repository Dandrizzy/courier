import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
 return (
  <div className=" bg-neutral-900  p-4 grid gap-6 sm:flex sm:justify-between">

   <div className=" gap-2 flex">
    <strong>
     &copy; {new Date().getFullYear()}
    </strong>
    <span>
     <strong>Logistics</strong>
    </span>
   </div>

   <div className="">
    <strong>Company</strong>
    <ul className=' pt-2 grid gap-2'>
     <li>About us</li>
     <li>Blog</li>
     <li>T&C</li>
     <li>Privacy Policy</li>
    </ul>
   </div>

   <div className="">
    <strong>Connect with us</strong>
    <ul className=' pt-2 flex  gap-6'>
     <li><FaFacebook /></li>
     <li><FaInstagram /></li>
     <li><FaTwitter /></li>
     <li><FaLinkedin /></li>
    </ul>
   </div>
  </div>
 );
};

export default Footer;