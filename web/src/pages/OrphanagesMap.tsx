import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet, { popup } from 'leaflet';

import mapMakerLogo from '../images/logoMaker.svg';
import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerLogo,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerLogo} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-23.5175187,-46.5095656]}
        zoom={17}
        style={{width: '100%', height: '100%', zIndex: 5}}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker 
          icon={mapIcon}
          position={[-23.5175187,-46.5095656]}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            Lar das meninas
          </Popup>
        </Marker>

      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;