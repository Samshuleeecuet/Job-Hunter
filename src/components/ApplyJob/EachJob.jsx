import React from 'react';
import { MapPinIcon ,CurrencyDollarIcon} from '@heroicons/react/24/outline'
import { Navigate, useNavigate } from 'react-router-dom';


const EachJob = ({eachcart}) => {
    const Navigate = useNavigate();
    const {id,company_logo, job_title, company_name, fulltime_or_parttime, remote_or_onsite, location, salary, contact_information,job_description,job_responsibility, educational_requirements,experiences} = eachcart
    return (
        <>
            <div className='w-8/12 flex justify-between items-center mx-auto  mt-5 lg:mt-5 border-2 p-4 lg:p-8 text-left rounded-lg'>
            <div className='flex items-center'>
            <div className='h-40 m-5 p-10 bg-gray-300 rounded-lg'>
                <img src={company_logo}  className='mt-5 w-32' alt="" />
            </div>
            <div>
                <p className='text-xl font-bold mb-2'>{job_title}</p>
                <p className='text-gray-500 font-semibold'>{company_name}</p>
                <div className='mt-4 lg:flex font-bold'>
                    <p className='border-2 border-blue-400 rounded-lg px-4 py-1.5 mr-4 mb-4 w-32 primary'>{remote_or_onsite}</p>
                    <p className='border-2 border-blue-400 rounded-lg px-4 py-1.5 w-32 lg:h-10 primary'> {fulltime_or_parttime}</p>
                </div>
                <div className='lg:flex mt-5 text-gray-500 font-semibold'>
                    <span className='flex mr-3'><MapPinIcon className="h-6 w-6 mr-1" />{location}</span>
                    <span className='flex'><CurrencyDollarIcon className="h-6 w-6 mr-1 " />Salary: {salary}</span>
                </div>
                
            </div>
            </div>
            <div>
                    <button className='btn btn-primary mt-5' onClick={()=>Navigate(`/job/${id}`)}>View Details</button>
                </div>
        </div>
        </>
    );
};

export default EachJob;