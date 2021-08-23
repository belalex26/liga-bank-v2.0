import React, {useState} from 'react';
import PropTypes from 'prop-types';

const TabsHoc = (Component) => {

  const TabsState = () => {
    const [activeTabs, setActiveTabs] = useState(1);

    return (
      <Component activeTabs={activeTabs} onActiveTabs={setActiveTabs}/>
    );

  };

  TabsState.propTypes = {
    activeTabs: PropTypes.bool,
    onActiveTabs: PropTypes.func,
  };

  return TabsState;
};

export default TabsHoc;
