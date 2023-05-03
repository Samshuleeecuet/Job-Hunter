import React, { useContext } from 'react';
import Hometitle from './Hometitle';
import JobCatagory from './JobCatagory';
import FeatureJob from './FeatureJob';
import { DataContext } from '../../App';

const Home = () => {
    // const loadData = useLoaderData();
    const loadData = useContext(DataContext)
    
    return (
        <>
        <Hometitle></Hometitle>
        <JobCatagory></JobCatagory>
        <FeatureJob loadData={loadData}></FeatureJob>
        </>
    );
};

export default Home;