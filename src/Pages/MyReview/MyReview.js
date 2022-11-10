import React from 'react';
import useTitle from './../../hooks/useTitle';

const MyReview = () => {
    useTitle('My Reviews')
    return (
        <div>
            <h2>This is my Review Page</h2>
        </div>
    );
};

export default MyReview;