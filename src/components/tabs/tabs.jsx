import React from 'react';

import TabsHoc from '../../hoc/tabs-hoc';

import Deposits from '../deposits/deposits';
import Credit from '../credit/credit';
import Insurance from '../insurance/insurance';
import OnlineService from '../online-service/online-service';

const Tabs = ({...props}) => {
    
    const toggleTabs = (index) => {
        props.onActiveTabs(index)
    }

    return (
        <div className="tabs">
            <div className="tabs__container">
                <div className="tabs__triggers">
                    <a className={props.activeTabs === 1 ? "tabs__triggers-item tabs__triggers-item--active tabs__triggers-item--deposits" : "tabs__triggers-item tabs__triggers-item--deposits"} onClick={() => toggleTabs(1)} href="#deposits">Вклады</a>
                    <a className={props.activeTabs === 2 ? "tabs__triggers-item tabs__triggers-item--active tabs__triggers-item--credit" : "tabs__triggers-item tabs__triggers-item--credit"} onClick={() => toggleTabs(2)} href="#credit">Кредиты</a>
                    <a className={props.activeTabs === 3 ? "tabs__triggers-item tabs__triggers-item--active tabs__triggers-item--insurance" : "tabs__triggers-item tabs__triggers-item--insurance"} onClick={() => toggleTabs(3)} href="#insurance">Страхование</a>
                    <a className={props.activeTabs === 4 ? "tabs__triggers-item tabs__triggers-item--active tabs__triggers-item--online" : "tabs__triggers-item tabs__triggers-item--online"} onClick={() => toggleTabs(4)} href="#online">Онлайн-сервисы</a>

                </div>
                <div className="tabs__content">
                    <div className={props.activeTabs === 1 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="deposits">
                        <Deposits />
                    </div>
                    <div className={props.activeTabs === 2 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="credit">
                        <Credit />
                    </div>
                    <div className={props.activeTabs === 3 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="insurance">
                        <Insurance />
                    </div>
                    <div className={props.activeTabs === 4 ? "tabs__content-item tabs__content-item--active" : "tabs__content-item"} id="online">
                        <OnlineService/>
                    </div>

                </div>
            </div>
        </div>

    );
};


export default TabsHoc(Tabs);