import React from 'react';
import { BeakerIcon, CurrencyDollarIcon,CalendarDaysIcon,PhoneIcon,EnvelopeIcon,MapPinIcon } from '@heroicons/react/24/outline'
import { addToDb } from '../../Utils/local';

const JobDes = ({jobdetail}) => {
    const {id,company_logo, job_title, company_name, fulltime_or_parttime, remote_or_onsite, location, salary, contact_information,job_description,job_responsibility, educational_requirements,experiences} = jobdetail
    return (
        <>
        <div className='mt-20 mb-10 flex justify-center'>
            <div className='w-5/12 mr-10 text-gray-500'>
                <p><span className='font-bold text-black'>Job Description: </span>{job_description}</p>
                <p className='mt-5'><span className='font-bold text-black'>Job Responsibility: </span>{job_responsibility}</p>
                <p className='mt-5'><span className='font-bold text-black'>Educational Requirements:<br></br> </span>{educational_requirements}</p>
                <p className='mt-5'><span className='font-bold text-black'>Experiences:<br></br> </span>{experiences}</p>
            </div>
            <div>
            <div className='w-78 rounded-lg bg-purple-200 text-gray-500 bg-opacity-50 p-5 lg:m-0'>
                    <p className='pb-4 border-b-2 border-b-white text-black font-bold'>Job details</p>
            
                    <p className='flex mt-4'><CurrencyDollarIcon className="h-6 w-6 mr-2 text-purple-500" /><span className='text-black font-bold'>Salary: </span>{salary} (Per Month)</p>
                    <p className='flex mt-2'><CalendarDaysIcon className="h-6 w-6 mr-2 text-purple-500" /><span className='text-black font-bold'>Job Title: </span>{job_title}</p>

                    <p className='pb-4 border-b-2 border-b-white mt-5 text-black font-bold'>Contact Information</p>
                    
                    <p className='flex mt-4'><PhoneIcon className="h-6 w-6 mr-2 text-purple-500" /><span className='text-black font-bold'>Phone: </span>{contact_information.phone}</p>
                    <p className='flex mt-2'><EnvelopeIcon className="h-6 w-6 mr-2 text-purple-500" /><span className='text-black font-bold'>Email: </span>{contact_information.email}</p>
                    <p className='flex mt-2'><MapPinIcon className="h-6 w-6 mr-2 text-purple-500" /><span className='text-black font-bold'>Address: </span>{location}</p>
            </div>
            <button className='btn btn-primary w-full mt-5 mb-5' onClick={()=>addToDb(id)}>Apply Now</button>
            </div>
        </div>
        
        </>
    );
};

export default JobDes;