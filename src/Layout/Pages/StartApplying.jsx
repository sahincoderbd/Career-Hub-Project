import React from 'react';
import Breadcumb from '../Components/Breadcumb';
import CommingSoon from '../Components/CommingSoon';

const StartApplying = () => {
    return (
        <div className='pt-16'>
          <Breadcumb pageName='Start Applying'></Breadcumb>
            <CommingSoon></CommingSoon>
        </div>
    );
};

export default StartApplying;