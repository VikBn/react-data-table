import React, {useState} from 'react';

export default props => {

    const [value, setValue] = useState('');

    return (
        <div className="input-group my-4">
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => props.onSearch(value)}
                >
                    Search
                </button>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                onChange={event => setValue(event.target.value)}
                value={value}
            />
        </div>
    )
}