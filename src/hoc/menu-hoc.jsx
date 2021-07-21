import React, {useState} from 'react';

const MenuHoc = (Component) => {
    
    const MenuState = () => {
        const [modalActive, setModalActive] = useState(true);


        return (
            <Component modalActive={modalActive} onModalActive={setModalActive}/>
        );
    
    }
    return MenuState;
}

export default MenuHoc