import React from 'react';

const CategoriesDetailsPage = ({params}) => {
    if (params.tag.length === 3) return <div>{params.tag[2]}</div>
    if (params.tag.length === 2) return <div>{params.tag[1]}</div>
    // if (params.tag.length === 1) return <div>{params.tag[0]}</div>
    
    return (
        <div className='h-screen'>
            CategoriesDetailsPage 
        </div>
    );
};

export default CategoriesDetailsPage;