import React, { useEffect } from 'react';
import contact from '../../public/contact.png'

const Contact = () => {


  



    return (
        <>
      
        <div className=' mt-10 mb-10 bg-gray-200 h-[150px] lg:h-[300px]'>
            <img className='w-full lg:w-[1100px] ml-0 lg:ml-20 md:ml-0 pt-7  shadow-lg' src={contact} alt="" />
        </div>

        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 mb-20'>
            <div className='space-y-3 card shadow-md p-5 border-[#9538E2] border-2'>
           <h3 className='font-bold text-xl'> Main Branch :</h3>
            <p>Plot-1088, Block-I, Sabrina Sobhan Road</p>
            <p>P.O-Khilkhet, P.S-Vatara,</p>
            <p>Bashundhara R/A, Dhaka-1229.</p>
            <p>Telephone: 0088096065</p>
            <p>Email: info@yahoo.com</p>
            </div>

            <div className='space-y-3 card shadow-md p-5 border-[#9538E2] border-2'>
                <h2 className='font-bold text-xl'>Second Branch :</h2>
                <p>Chandra, Kaliakoir, Gazipur</p>
                <p>Email: hq@gmail.com</p>
            </div>

            <div className='space-y-3 card shadow-md p-5 border-[#9538E2] border-2'>
                <h2 className='font-bold text-xl'>Customer Service Management:</h2>
                <p>Plot-1088, Block-I, Sabrina Sobhan Road</p>
                <p>P.O-Khilkhet, P.S-Vatara,</p>
                <p>Bashundhara R/A, Dhaka-1229.</p>
                <p>Telephone: 008809606-55</p>
                <p>Email: support@gmail.com</p>
            </div>

            <div className='space-y-3 card shadow-md p-5 border-[#9538E2] border-2'>
                <h3 className='font-bold text-xl'>Customer Care Centre :</h3>
                <p>Our Helpline Number: 16267 & 09612316267</p>
                <p>Local Toll Free Number: 08000016267</p>
                <p>365 days service</p>
                <p>Operation hour: 7.00 am to 11.00 pm</p>
            </div>
        </div>



        </>
    );
};

export default Contact;