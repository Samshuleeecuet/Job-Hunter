import React, { useEffect, useState } from 'react';
import EachCatagory from './EachCatagory';

const JobCatagory = () => {
    const [catagories, setCatagory] = useState([]);
    useEffect(()=>{
        fetch('/jobcatagory.json')
        .then(res => res.json())
        .then(data=> setCatagory(data))
    },[])
    return (
        <>
         <div className='mt-10 text-center px-5'>
            <div>
                <p className='text-3xl font-bold'>Job Category List</p>
                <p className='text-gray-400 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 w-72 lg:w-8/12 gap-4 p-5 mx-auto '>
                {
                    catagories.map((catagory,index) => <EachCatagory key={index} catagory={catagory}></EachCatagory>)
                }
            </div>
        </div>    
        </>
    );
};

export default JobCatagory;