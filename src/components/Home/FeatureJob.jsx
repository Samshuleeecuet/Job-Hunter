import React, { useState } from 'react';
import EachFeatureJob from './EachFeatureJob';

const FeatureJob = ({loadData}) => {
    //console.log(loadData)
    const [jobs, setJobs] = useState(loadData);
    const [showbtn,setShowbtn] = useState(true);
    const [tempjobs, setTempjobs] = useState(loadData.slice(0,4));

    const handleShowAll = () =>{
        setTempjobs(jobs);
        setShowbtn(false);
    }
    return (
        <div className='text-center mt-5'>
            <div className='mb-6'>
            <p className='font-bold text-3xl'>Featured Jobs</p>
            <p className='text-gray-400 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='mx-auto lg:grid lg:grid-cols-2 lg:w-7/12 lg:gap-4'>
                {
                    tempjobs.map((job,index) => <EachFeatureJob job={job} key ={index}></EachFeatureJob>)
                }
            </div>
            {
                showbtn && <button onClick={handleShowAll} className='btn btn-primary mt-5'> See All Jobs</button>
            }
        </div>
    );
};

export default FeatureJob;