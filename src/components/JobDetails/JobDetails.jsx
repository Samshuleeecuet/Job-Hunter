import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../App';
import Jobtitle from './Jobtitle';
import JobDes from './JobDes';

const JobDetails = () => {
    const detailsData = useParams()
    const jobDetails = useContext(DataContext)
    const {Id} = detailsData;
    const jobdetail = jobDetails.find(
        job=> job.id == Id
        )
        
    
    return (
        <div>
            <Jobtitle></Jobtitle>
            <JobDes jobdetail={jobdetail}></JobDes>
        </div>
    );
};

export default JobDetails;