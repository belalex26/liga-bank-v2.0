import React, {useState} from 'react';

const TabsHoc = (Component) => {
    
    const TabsState = () => {
        const [activeTabs, setActiveTabs] = useState(1);

        return (
            <Component activeTabs={activeTabs} onActiveTabs={setActiveTabs}/>
        );
    
    }
    return TabsState;
}

export default TabsHoc