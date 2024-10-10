import styles from "./LandingPageMaps.module.css";
export default function LandingPageMaps() {
import React, { useEffect } from "react";
import styles from "./LandingPageMaps.module.css";
import L from "leaflet"

export default function LandingPageMaps() {
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Declare LATITUDE and LONGITUDE as global variables
    let LATITUDE;
    let LONGITUDE;

    // Function to initialize Google Maps and display the location
    function initializeMap(latitude, longitude) {
      let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 13
      });

      let marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: 'You are here!'
      });

      let radius = 100; // Radius in meters
      let circle = new google.maps.Circle({
        map: map,
        radius: radius,
        fillColor: '#30f',
        fillOpacity: 0.2,
        strokeColor: 'blue',
        strokeWeight: 1
      });
      circle.setCenter({ lat: latitude, lng: longitude });
    }

    // Function to initialize OpenStreetMap
    function initializeOSM(latitude, longitude) {
      const map = L.map('map').setView([latitude, longitude], 13); // Adjust zoom level as needed

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      L.marker([latitude, longitude]).addTo(map)
        .bindPopup('You are here!')
        .openPopup();

      L.circle([latitude, longitude], {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.2,
        radius: 100 // Radius in meters
      }).addTo(map);
    }

    // Function to get location from Google API
    function getLocationFromGoogle() {
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // Use the API key here
      const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;
      const data = { "considerIp": true };

      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch location from Google API');
          }
          return response.json();
        })
        .then(data => {
          LATITUDE = data.location.lat;
          LONGITUDE = data.location.lng;
          initializeMap(LATITUDE, LONGITUDE); // Attempt to initialize Google Maps
        })
        .catch(error => {
          console.error(error);
          // Fallback to OpenStreetMap if Google Maps fails
          initializeOSM(LATITUDE, LONGITUDE);
        });
    }

    // Function to get location using browser's geolocation API
    function getLocationFromBrowser() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          LATITUDE = position.coords.latitude;
          LONGITUDE = position.coords.longitude;
          initializeMap(LATITUDE, LONGITUDE); // Attempt to initialize Google Maps
        }, error => {
          alert(`Error occurred while getting location: ${error.message}`);
          // Fallback to Google Geolocation API
          getLocationFromGoogle();
        });
      } else {
        // If geolocation is not supported, fallback to Google Geolocation API
        getLocationFromGoogle();
      }
    }

    // Try to get location from the browser first
    getLocationFromBrowser();

    // Cleanup: remove the script tag when the component unmounts
    return () => {
      const scriptElement = document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}"]`);
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <h3>Location Cross-matching</h3>
      <div id="map" className={styles.map}></div> {/* Map container */}
      <div id="status"></div> {/* For error messages */}
    </section>
  );
}