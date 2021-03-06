import React from 'react';
import styled from 'styled-components';

export default props => {
    return (
        <TableWrapper>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => props.onSort('id')}>
                        ID {props.sortField === 'id' ? <span className={props.sort + ' sort__mark'}/> : null}
                    </th>
                    <th onClick={() => props.onSort('firstName')}>
                        First Name {props.sortField === 'firstName' ? <span className={props.sort + ' sort__mark'}/> : null}
                    </th>
                    <th onClick={() => props.onSort('lastName')}>
                        Last Name {props.sortField === 'lastName' ? <span className={props.sort + ' sort__mark'}/> : null}
                    </th>
                    <th onClick={() => props.onSort('email')}>
                        Email {props.sortField === 'email' ? <span className={props.sort + ' sort__mark'}/> : null}
                    </th>
                    <th onClick={() => props.onSort('phone')}>
                        Phone {props.sortField === 'phone' ? <span className={props.sort + ' sort__mark'}/> : null}
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.data
                    ? props.data.map((item) => (
                        <tr
                            key={item.id + item.phone}
                            title='Click to View'
                            onClick={() => {
                                props.openInfo(item.lastName)
                            }}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))
                : <tr className='text-danger'><td>There is no items</td></tr>
                }
                </tbody>
            </table>
        </TableWrapper>
    )
}

const TableWrapper = styled.div`
    tr {
        cursor: pointer;
        
        &.text-danger {
        cursor: default;
        
        
    }
    
    .sort__mark {
        &.desc:before {
        content: '\\2B06';
        }
        
        &.asc:before {
        content: '\\2B07';
        }
    }
`;