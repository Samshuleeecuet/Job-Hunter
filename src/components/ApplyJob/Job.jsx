import React, { useContext, useEffect, useState } from 'react';
import { getStoredCart } from '../../Utils/local';
import { DataContext } from '../../App';
import EachJob from './EachJob';

const Job = () => {
    const [applycart , setApplycart] = useState([])
    const [filtercart, setFiltercart] = useState([])
    const jobData = useContext(DataContext) 
    const jobCartData = getStoredCart();

    useEffect(()=>{
        for(const id in jobCartData){
            const foundJob = jobData.find(Job => Job.id == id)
            if(foundJob){
                setApplycart(applycart => [...applycart , foundJob]);
                setFiltercart(applycart => [...applycart , foundJob])
            }
        }
    },[])
    
    const handleOnsite = () =>{
        let filtered = applycart.filter(job => {
            return job.remote_or_onsite === 'Onsite';
        });
        setFiltercart(filtered);
    }

    const handleRemote = () =>{
        let filtered = applycart.filter(job => {
            return job.remote_or_onsite === 'Remote';
        });
        setFiltercart(filtered);
    }

    

    return (
        <div className='mt-32 relative'>
           <div className='absolute right-64 -top-20'>
            <div className='navbar '>
                    <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0} className='bg-gray-300 rounded-lg'>
                        <p>
                        Filter By
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </p>
                        <ul className="p-2 bg-base-100">
                        <li onClick={handleOnsite}><p>Onsite</p></li>
                        <li onClick={handleRemote}><p>Remote</p></li>
                        </ul>
                    </li>
                    </ul>
                </div>
           </div>
           <div>
           {
                filtercart.map((eachcart,index) => <EachJob key={index} eachcart={eachcart}></EachJob>)
            }
           </div>
        </div>
    );
};

export default Job;