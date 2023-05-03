import React from 'react';

const EachCatagory = ({catagory}) => {
    const {name,image,available}= catagory;
    return (
        <div className='bg-slate-100 p-8 text-left rounded-lg'>
            <img className='rounded-lg border-2 p-4 bg-indigo-100 shadow-lg' src={image} alt="" />
            <p className='font-bold mt-8 text-lg'>{name}</p>
            <p className='text-gray-500'>{available}</p>
        </div>
    );
};

export default EachCatagory;