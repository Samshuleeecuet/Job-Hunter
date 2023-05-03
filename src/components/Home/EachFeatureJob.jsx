import React from 'react';
import { MapPinIcon ,CurrencyDollarIcon} from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom';

const EachFeatureJob = ({job}) => {
    //console.log(job);

    const {id,company_logo, job_title, company_name, fulltime_or_parttime, remote_or_onsite, location, salary} = job;
    const navigate = useNavigate();
    return (
        <div className='w-7/12 lg:w-full mx-auto  mt-5 lg:mt-0 border-2 p-4 lg:p-8 text-left rounded-lg'>
            <div className='h-16'>
                <img src={company_logo} className='' alt="" />
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
                <div>
                    <button className='btn btn-primary mt-5' onClick={()=>navigate(`/job/${id}`)}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default EachFeatureJob;