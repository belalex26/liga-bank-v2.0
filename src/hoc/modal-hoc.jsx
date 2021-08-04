import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const users = [];

const ModalHoc = (Component) => {

  const ModalState = (props) => {
    const [UserItems, setUserItems] = useState(JSON.parse(localStorage.getItem(`users`)) || `[]`);
    const [user, setUser] = useState({
      userName: ``,
      password: ``
    });

    const [visiblePassword, setVisiblePassword] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
      setUserItems(users);
    }, []);

    useEffect(() => {
      const body = document.querySelector(`body`);
      body.style.overflow = props.modalActive ? `hidden` : `auto`;
    }, [props.modalActive]);

    useEffect(() => {
      localStorage.setItem(`users`, JSON.stringify(UserItems));
    }, [UserItems]);

    return (
      <Component
        UserItems={UserItems} onUserItems={setUserItems}
        user={user} onUser={setUser}
        visiblePassword={visiblePassword} onVisiblePassword={setVisiblePassword}
        errors={errors} onErrors={setErrors}
        modalActive={props.modalActive} onModalActive={props.onModalActive}
      />
    );

  };

  ModalState.propTypes = {
    modalActive: PropTypes.bool.isRequired,
    onModalActive: PropTypes.func.isRequired,
  };

  return ModalState;
};

export default ModalHoc;
