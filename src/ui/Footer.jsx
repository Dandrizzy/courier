import { FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const Footer = () => {
 return (
  <div className=" bg-blue-700  p-4 grid gap-6 sm:flex sm:justify-between">

   <div className=" gap-2 grid">
    <div className=" flex gap-2">
     <strong>
      &copy; {new Date().getFullYear()}
     </strong>
     <span>
      <strong>VelocityExpress</strong>
     </span>
    </div>
    <div className="">
     <strong>Services</strong>
     <ul>
      <li>Air Fright</li>
      <li>Export & Import</li>
      <li>Transportation</li>
      <li>Consulting Services</li>
      <li>Local Moving</li>
      <li>Road Freight</li>
     </ul>
    </div>
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
     <li><FaPhone /></li>
     <li><MdMail /></li>
     <li><FaTwitter /></li>
     <li><FaLinkedin /></li>
    </ul>
   </div>
  </div>
 );
};

export default Footer;