import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

import location  from '../../images/location.svg';

const mapData = {
  center: [58.462610, 76.058932],
  zoom: 5,
};

const coordinates = [
  [61.254035, 73.396230],
  [54.989288, 73.367908],
  [55.030428, 82.919954]

];

const Department = () => {
  return (
      <section className="department">
            <h2 className="department__title">Отделения Лига Банка</h2>
            <div className="department__maps">
                <YMaps>
                    <Map
                        defaultState={mapData}
                        width="100%"
                        height="462px"
                    
                    >
                        {coordinates.map(coordinate => 
                            <Placemark 
                                geometry={coordinate} 
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: location,
                                    iconImageSize: [35, 40],
                                    iconImageOffset: [-18, -50]
                                }} 
                            />
                        )},
                    </Map>
                </YMaps>
            </div>

      </section>

  );
};

export default Department;