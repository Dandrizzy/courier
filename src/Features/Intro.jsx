import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { Form } from 'react-router-dom';
import HomeTicket from './HomeTicket';

const Intro = () => {

 const [alphaCode, setAlphaCode] = useState('');

 const { register, handleSubmit, formState: { errors } } = useForm();

 const id = '1ed58002-ddbf-4f19-abf3-277ee22ddae9';

 const onSubmit = data => {
  setAlphaCode(data.trackingId);

 };

 console.log();

 return (
  <div className="  grid p-4 bg-red-500 min-h-screen">
   <Form onSubmit={handleSubmit(onSubmit)} className=" flex justify-center items-center">

    <input {...register('trackingId', {
     minLength: 3, required: true
    })} defaultValue={id} type="text" placeholder="Input tracking ID / Alpha code" className=" text-neutral-900 p-4 bg-slate-100 w-full active:outline-none outline-none ring-inset" />
    <button type='submit' disabled={errors.trackingId} className=' disabled:cursor-not-allowed cursor-pointer p-5 bg-neutral-100 text-neutral-900'>
     <FaSearch />
    </button>
   </Form>

   <div >
    {alphaCode !== '' && <HomeTicket ticketId={alphaCode} />}
   </div>

   <div className=' text-center'>
    Track shipment / Find and ship a product using Alpha code
   </div>
  </div>
 );
};

export default Intro;