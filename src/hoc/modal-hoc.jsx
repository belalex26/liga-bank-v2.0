import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const ModalHoc = (Component) => {
    
    const ModalState = (props) => {


           useEffect(() => {
            const body = document.querySelector('body');
            body.style.overflow = props.modalActive ? 'hidden' : 'auto';
        }, [props.modalActive])

    
            /*
        useEffect(() => {
            localStorage.setItem('reviews', JSON.stringify(items))
         }, [items]);
        */

        return (
            <Component
               
                modalActive={props.modalActive} onModalActive={props.onModalActive}
            />
        );
    
    }
    return ModalState;
}

ModalHoc.prototype = {
    modalActive: PropTypes.bool.isRequired,
    onModalActive: PropTypes.func.isRequired,
};

export default ModalHoc;