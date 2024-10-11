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

// Function to get location from Google API
function getLocationFromGoogle() {
    const apiKey = 'AIzaSyBa89be70qEhsFAvSpk-6LhQdv84s4ZPzA'; // Your Google API Key
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;
    const data = {
        "considerIp": true,
        "homeMobileCountryCode": 621
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            LATITUDE = data.location.lat;
            LONGITUDE = data.location.lng;

            // Log or use the constants
            console.log('Google API Latitude:', LATITUDE);
            console.log('Google API Longitude:', LONGITUDE);

            initializeMap(LATITUDE, LONGITUDE);
        })
        .catch(error => {
            document.getElementById('status').innerHTML = error.message;
        });
}

// Function to get location using browser's geolocation API
export default function getLocationFromBrowser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            LATITUDE = position.coords.latitude;
            LONGITUDE = position.coords.longitude;

            // Log or use the constants
            console.log('Browser Latitude:', LATITUDE);
            console.log('Browser Longitude:', LONGITUDE);

            initializeMap(LATITUDE, LONGITUDE);

        }, function (error) {
            console.error('Brower Location Error:', error.message)
            // Fallback to Google Geolocation API
            getLocationFromGoogle();
        });
    } else {
        // If geolocation is not supported, fallback to Google Geolocation API
        getLocationFromGoogle();
    }
}

// Call the browser's geolocation API first
// getLocationFromBrowser();