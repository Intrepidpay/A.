import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LeafletMap.css';

const defaultIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// World bounds used to lock panning/zooming to a single world copy
const WORLD_BOUNDS = L.latLngBounds(
  L.latLng(-90, -180),
  L.latLng(90, 180)
);

const MapContent = ({ locations, progress }) => {
  const map = useMap();
  const polylineRef = useRef();

  useEffect(() => {
    if (locations.length > 0) {
      // Find the current location marked in history
      const currentIndex = locations.findIndex(loc => loc.isCurrentLocation);
      const resolvedIndex = currentIndex !== -1 ? currentIndex : locations.length - 1;
      const currentLocation = locations[resolvedIndex];

      if (currentLocation?.coordinates) {
        const container = map.getContainer();
        let lastWidth = container.clientWidth;
        let lastHeight = container.clientHeight;
        let stableFrames = 0;
        const maxChecks = 30; // safety cap (~0.5s at 60fps)
        let checks = 0;

        const waitForStableSize = () => {
          checks++;
          const width = container.clientWidth;
          const height = container.clientHeight;

          if (width === lastWidth && height === lastHeight) {
            stableFrames++;
          } else {
            stableFrames = 0;
            lastWidth = width;
            lastHeight = height;
          }

          // Require 3 consecutive stable frames, or bail out after maxChecks
          if (stableFrames >= 3 || checks >= maxChecks) {
            map.invalidateSize();
            map.flyTo(currentLocation.coordinates, 10, {
              duration: 1,
              padding: [50, 50]
            });
          } else {
            requestAnimationFrame(waitForStableSize);
          }
        };

        requestAnimationFrame(waitForStableSize);
      }

      // Update polyline up through the current location
      if (polylineRef.current) {
        const trail = locations
          .slice(0, resolvedIndex + 1)
          .map(loc => loc.coordinates);
        polylineRef.current.setLatLngs(trail);
      }
    }
  }, [map, locations, progress]);

  const currentIndex = locations.findIndex(loc => loc.isCurrentLocation);
  const resolvedIndex = currentIndex !== -1 ? currentIndex : locations.length - 1;

  return locations.length > 0 ? (
    <>
      <Polyline 
        ref={polylineRef}
        positions={locations
          .slice(0, resolvedIndex + 1)
          .map(loc => loc.coordinates)}
        color="#3B82F6"
        weight={4}
        opacity={0.7}
      />
    </>
  ) : null;
};

const LeafletMap = ({ locations = [], progress = 0 }) => {
  return (
    <div className="premium-map-container">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        minZoom={3}
        scrollWheelZoom={true}
        zoomControl={false}
        className="premium-map"
        maxZoom={11}
        maxBounds={WORLD_BOUNDS}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=ec2d145d-9b60-4824-a3e6-bf5b1bf5185d"
          attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          noWrap={true}
          bounds={WORLD_BOUNDS}
        />
        
        {locations.map((location, index) => (
          <Marker 
            key={index} 
            position={location.coordinates}
            icon={defaultIcon}
          >
            <Popup className="premium-popup">
              <div className="popup-content">
                <h4>{location.location.split(',')[0]}</h4>
                <div className="popup-status">{location.status}</div>
                <div className="popup-date">
                  {new Date(location.timestamp).toLocaleString()}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapContent locations={locations} progress={progress} />
      </MapContainer>

      <div className="map-progress-container">
        <div className="map-progress-track">
          <div 
            className="map-progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="map-progress-text">
          Shipment Progress: <strong>{progress}%</strong>
        </div>
      </div>
    </div>
  );
};

export default LeafletMap;
