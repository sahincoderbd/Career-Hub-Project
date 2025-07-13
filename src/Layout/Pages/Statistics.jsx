import React from 'react';
import Breadcumb from '../Components/Breadcumb';
import CommingSoon from '../Components/CommingSoon';

const Statistics = () => {
    return (
        <div className='pt-16'>
            <Breadcumb pageName='Statistics'></Breadcumb>
            <CommingSoon></CommingSoon>
        </div>
    );
};

export default Statistics;