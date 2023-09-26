import React from 'react';
import Link from 'next/link';

const Employee = () => {
  return (
    <div>
      <h1 className='m-1 p-1 flex flex-col items-center justify-center border rounded-lg bg-slate-500 '>Hi Welcome Back User </h1>
   <Link href='/login'>VISITLOGIN</Link>
    </div>
  )
}

export default Employee
