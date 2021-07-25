import React, {useState} from 'react';

const MenuHoc = (Component) => {
    
    const MenuState = () => {
        const [modalActive, setModalActive] = useState(false);
        const [menuActive, setMenuActive] = useState(false);

        return (
            <Component
                modalActive={modalActive} onModalActive={setModalActive}
                menuActive={menuActive} setMenuActive={setMenuActive}
            />
        );
    
    }
    return MenuState;
}

export default MenuHoc