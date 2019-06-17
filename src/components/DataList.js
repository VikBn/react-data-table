import React, {Component} from 'react';
import DataHeader from './DataHeader';
import DataItem from './DataItem';

export default class DataList extends Component {
    render() {
        const {users, filterName} = this.props;
        // console.log(this.props);
        return (
            <>
                <DataHeader value={filterName} />
                {users.map((user, index) => {
                    return <DataItem key={index} user={user} />
                })}
            </>
        )
    }
}