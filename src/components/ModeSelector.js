import React from 'react';

export default props => {

    const bigUrl = '1000';
    const smallUrl = '32';

    return (
        <div className='container my-3'>
            <div className='mb-2'>Выберите желаемое количество элементов, выводимое в таблице</div>
            <button className="btn btn-success" onClick={() => props.onModeSelect(smallUrl)}>32 элемента</button>
            <button className="btn btn-primary mx-2" onClick={() => props.onModeSelect(bigUrl)}>1000 элементов</button>
        </div>
    )
}