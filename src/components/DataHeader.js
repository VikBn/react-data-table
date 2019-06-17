import React from 'react';

export default function DataHeader({value}) {
    let filterName = value;
    return (
        <>
            <div className='row border mt-4 p-3'>
                <div className='col-md-1'>id</div>
                <div className='col-md-2' >firstName</div>
                <div className='col-md-3' onClick={()=> filterName()}>lastName</div>
                <div className='col-md-3'>email</div>
                <div className='col-md-3'>phone</div>
            </div>
        </>
    )
}