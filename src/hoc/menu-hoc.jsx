import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MenuHoc = (Component) => {
    
    const MenuState = () => {
        const [modalActive, setModalActive] = useState(false);
        const [menuActive, setMenuActive] = useState(false);

        return (
            <Component
                modalActive={modalActive} onModalActive={setModalActive}
                menuActive={menuActive} onMenuActive={setMenuActive}
            />
        );
    
    }
    return MenuState;
}

MenuHoc.prototype = {
    modalActive: PropTypes.bool.isRequired,
    onModalActive: PropTypes.func.isRequired,
    menuActive: PropTypes.bool.isRequired,
    onMenuActive: PropTypes.func.isRequired,
  };

export default MenuHoc