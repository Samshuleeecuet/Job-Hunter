import React from 'react';

const Hometitle = () => {
    return (
        <>
           <div className='font-mono text-left bg-slate-100 md:flex lg:flex lg:h-auto pb-5 relative lg:pl-28'>
            <div className='flex-auto mx-auto my-auto w-6/12'>
                <p className='text-4xl lg:text-5xl font-bold w-72 lg:w-96 pb-5 pt-10' >One Step Closer To Your <span className='primary'>Dream Job</span> </p>
                <p className='text-gray-400 lg:w-8/12 pb-5 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary'>Get Started</button>
            </div>
            <div>
                <img className='w-3/6 lg:w-4/6 mt-9 lg:mt-8 -mb-5 lg:-mb-5 ml-10' src= 'https://i.ibb.co/jztFv3s/P3-OLGJ1-copy-1.png' />
            </div>
        </div>
        
        </>
    );
};

export default Hometitle;