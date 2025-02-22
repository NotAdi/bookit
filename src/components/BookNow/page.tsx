'use client'
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow = ({ hotel, currentUser }: any) => {

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  
  const handleCheckInDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDate(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const bookingData = {
        userId: currentUser?.id,
        hotelId: hotel?.id,
        startDate: checkInDate,
        endDate: checkOutDate,
        totalPrice: hotel?.price
    }
    try {
        const response = await fetch('/api/reservation', {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
              'Content-Type': 'application/json',
            },
        })

        const data = await response.json()
        if(data.success === 'success') toast.success('Successfully reserved your hotel')
    } catch (error) {
        console.log(error)
    }

  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-left">Book Now</h3>
      <div className="text-lg">
        Check-In Date:
        {/* <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" /> */}
        <div className="relative max-w-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
          <input type="date" onChange={handleCheckInDateChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Select date" />
        </div>
      </div>
      &nbsp;
      <div className="text-lg">
        Check-out Date:
        {/* <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" /> */}
        <div className="relative max-w-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
          <input type="date" onChange={handleCheckOutDateChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Select date" />
        </div>
      </div>
      &nbsp;
      <p className="text-lg">Total Price: {hotel?.price}</p>
      <button onClick={handleSubmit} className="my-3 p-2.5 px-6 py-3 bg-zinc-800 text-white font-semibold uppercase hover:bg-zinc-700">BookIT</button>
      <ToastContainer />
    </div>
  );
};

export default BookNow;
