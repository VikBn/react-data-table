import React from 'react';

export default function DataItem({user}) {
    // console.log(user);
    const {firstName, lastName, email, phone} = user;
    return (
        <>
            <div className='row border mt-1 p-3'>
                <div className='col-md-1'>id</div>
                <div className='col-md-2'>{firstName}</div>
                <div className='col-md-3'>{lastName}</div>
                <div className='col-md-3'>{email}</div>
                <div className='col-md-3'>{phone}</div>
            </div>

        </>
    )
}