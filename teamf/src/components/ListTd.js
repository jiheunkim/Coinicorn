import React from 'react';

const ListTd = ({item}) => {
    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.id}</td>
            <td className='px-4 py-3'>{item.name}<br></br>{item.email} | {item.phone}</td>
            <td className='px-4 py-3'>{item.website}</td>
        </tr>
        </>
    )
};

export default ListTd;
