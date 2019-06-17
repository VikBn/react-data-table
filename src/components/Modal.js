import React from 'react';
import styled from 'styled-components';

export default props => {
    const {modalOpen, closeInfo} = props;
    const {lastName, address, description} = props.modalProduct;

    return (
        modalOpen ? (
            <ModalContainer>
                <div className='container'>
                    <div className='row'>
                        <div id='modal' className="col-8 mx-auto col-md-6 col-lg-6 p-5 text-center">
                            <div className='modal_content'>
                                <span>Выбран пользователь:</span><b> {lastName}</b>
                                <div className='mt-2'>
                                    <div>Информафия:</div>
                                    <textarea cols="30" rows="7" value={description} readOnly/>
                                </div>
                                <div className='mt-2'>Адрес проживания: {address.streetAddress}</div>
                                <div className='mt-2'>Город: {address.city}</div>
                                <div className='mt-2'>Провинция/Штат: {address.state}</div>
                                <div className='mt-2'>Индекс: {address.zip}</div>
                                <div className='modal_close' onClick={closeInfo}>
                                    <i className="far fa-times-circle"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        ) : null
    )
}

const ModalContainer = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,.3);
display: flex;
align-items: center;
justify-content: center;

.modal_content {
    background: #ffffff;
}

.modal_close {
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0 8px;
    cursor: pointer;
    
    &:hover {
        color: gray;
    }
}

#modal {
    background: #ffffff;
    position: relative;
}
`;