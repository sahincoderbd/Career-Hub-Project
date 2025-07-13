import React from 'react';
import Breadcumb from '../Components/Breadcumb';
import CommingSoon from '../Components/CommingSoon';

const Blog = () => {
    return (
        <div className='pt-16'>
            <Breadcumb pageName='Blog'></Breadcumb>
            <CommingSoon></CommingSoon>
        </div>
    );
};

export default Blog;