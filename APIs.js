// @ts-check

async function getToken() {
    const data = {
        username: "admin",
        password: "admin"
    };

    try {
        const response = await fetch('YOUR_TOKEN_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            return responseData.token;
        } else {
            console.error('Error fetching token:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// object to contain the registerData as a plain object
//make sure reg_no does no comtain /
const registerData = {
    username: 'Penivera',
    email: 'penivera655@gmail.com',
    password: 'this_is_a_test',
    role: 'student',
    first_name: 'Nelson',
    last_name: 'William',
    phone_number: '08078617821',
    reg_no: '22_SC_CO_1181'
}

// Function to fetch the token (assuming you have a function like testToken in your backend logic)
async function testToken() {
    // Simulate fetching a token (replace this with your actual token fetching logic)
    return 'your_token_here';
}

// Function to register a new user
async function Register() {
    try {
        // Fetch the token to use in the Authorization header
        const token = await testToken(); // Function to get the token
        const headers = {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        };

        // Make the POST request to the register endpoint with the token
        const response = await fetch('YOUR_REGISTER_URL', {
            method: "POST",
            headers: headers,
            body: JSON.stringify(registerData)
        })


        return response.json(); // Return response data for further use
    } catch (error) {
        console.error('Error during registration:', error.message);
    }
}

/*getting student data by reg_no*/
async function getData() {
    // Replace '/' with '_' in the registration number
    const regNo = registerData.reg_no.replace(/\//g, '_');

    // Set up the authorization header
    const headers = {
        'Authorization': `Token ${yourTokenHere}` // Replace with the actual token gotten from the get token API 
    };

    // Construct the URL for the student detail endpoint
    const url = `YOUR_BASE_URL/student/${regNo}/`; // Adjust based on your API structure

    try {

        // Make the GET request to the student detail endpoint with the token
        const response = await fetch(url, {
            headers
        })
        const data = await response.json();
        console.log('Response:', data); // Log the response data (optional)
    } catch (error) {
        console.error('Error fetching student data:', error.message);
    }
}

// Usage
//Creating attendance data (fegistering for attendance)
// Data to be sent in the POST request
const data = {
    reg_no: "19_AG_CO_1234",
    course: "GRE112",
    venue: "ELF",
    date: "2024-10-05",
    time: "17:45:11"
};

// Function to fetch the token (replace this with your actual token fetching logic)
async function getToken() {
    // Simulate token retrieval; replace with actual token fetching logic
    return 'your_token_here';
}

// Production-level function to create attendance
async function createAttendance() {
    try {
        // Fetch the token
        const token = await getToken();

        // Set up the URL for the attendance creation endpoint
        const url = 'YOUR_BASE_URL/attendance_add/'; // Replace with your actual URL

        // Set up the headers, including the authorization token
        const headers = {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json' // Specify JSON content type
        };

        // Make the POST request to create the attendance
        const response = await fetch(url, {
            headers: headers,
            body: JSON.stringify(data),
        })
        const resp = await response.json();

        // Log and handle the response
        console.log('Attendance Response:', resp);

        // Ensure 'time' is in the response data
        if (resp && resp.time) {
            console.log('Attendance time:', resp.time);
        } else {
            throw new Error("The 'time' field is missing in the response");
        }

    } catch (error) {
        // Handle errors (including network or server issues)
        console.error('Error creating attendance:', error.message);

        // Optional: retry logic or error reporting can be added here
    }
}

// Parameters for the GET request
const params = {
    course: 'GRE112',
    date: '2024-10-05',
    start_time: '15:45:11',
    stop_time: '19:45:34'
};

// Function to fetch the token (replace this with your actual token-fetching logic)
async function getToken() {
    // Simulate token retrieval; replace with actual token-fetching logic
    return 'your_token_here';
}

// Function to make the date timezone-aware using a popular library like 'moment-timezone'
function makeTimezoneAware(dateStr) {
    // Assuming you're using moment-timezone library for handling timezones
    return moment.tz(dateStr, "YYYY-MM-DD", moment.tz.guess()).format(); // Adjust as needed
}

// Production-level function to list attendance
async function attendList() {
    try {
        // Fetch the token
        const token = await getToken();

        // Set up the URL for the attendance list endpoint
        const url = 'YOUR_BASE_URL/attendance_list/'; // Replace with your actual URL

        // Set up the headers, including the authorization token
        const headers = {
            'Authorization': `Token ${token}`,
        };

        // Ensure the 'date' is timezone-aware
        params.date = makeTimezoneAware(params.date);

        // Add params to url
        const fetchUrl = url + Object
            .entries(params)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join("&");

        // Make the GET request with parameters and headers
        const response = await fetch(fetchUrl, {
            headers: headers
        })

        const data = await response.json();

        // Log and handle the response use your intuition
        console.log('Attendance List Response:', data);

        // Ensure 'reg_no' is in the response data
        if (data && data.reg_no) {
            console.log('Registration Number:', data.reg_no);
        } else {
            throw new Error("The 'reg_no' field is missing in the response");
        }

    } catch (error) {
        // Handle errors (including network or server issues)
        console.error('Error fetching attendance list:', error.message);

        // Optional: retry logic or error reporting can be added here
    }
}

// Function to fetch the token (replace this with your actual token-fetching logic)
async function getToken() {
    // Simulate token retrieval; replace with actual token-fetching logic
    return 'your_token_here';
}

// Function to add a venue
async function addVenue() {
    const url = 'YOUR_BASE_URL/venue_add/'; // Replace with your actual URL
    const token = await getToken();

    const data = {
        short_name: 'PTDF',
        full_name: 'Petroleum Technology Development Facility',
        latitude: 7.97588646295044,
        longitude: 5.041485459813603
    };

    const headers = {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json' // Specify JSON content type
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        })
        const resp = await response.json();

        console.log('Venue Add Response:', resp);

        // Check if the short_name is present in the response data
        if (resp && resp.short_name) {
            console.log('Venue short name:', resp.short_name);
        } else {
            throw new Error("The 'short_name' field is missing in the response");
        }
    } catch (error) {
        console.error('Error adding venue:', error.message);
    }
}

// Function to list venues
async function listVenues() {
    const url = 'YOUR_BASE_URL/venue_list/'; // Replace with your actual URL
    const token = await getToken();

    const headers = {
        'Authorization': `Token ${token}`,
    };

    try {
        const response = await fetch(url, {
            headers: headers
        })
        const data = await response.json();
        console.log('Venue List Response:', data);

        // Check if the short_name is present in the response data
        if (data && data.short_name) {
            console.log('First Venue short name:', data.short_name);
        } else {
            throw new Error("The 'short_name' field is missing in the response");
        }
    } catch (error) {
        console.error('Error fetching venue list:', error.message);
    }
}

// Function to generate a PDF
async function generatePDF() {
    const token = await getToken();

    const params = {
        course: 'GRE112',
        date: '2024-10-05',
        start_time: '15:45:11',
        stop_time: '19:00:00'
    };

    const url = `YOUR_BASE_URL/pdfgen/${params.course}/${params.date}/${params.start_time}/${params.stop_time}/`; // Replace with your actual URL

    const headers = {
        'Authorization': `Token ${token}`,
    };

    try {
        
        const response = await axios.get(url, { headers });

        // Check if the status code is 200 and content type is application/pdf
        if (response.status === 200 && response.headers['content-type'] === 'application/pdf') {
            console.log('PDF generated successfully.');
        } else {
            throw new Error('PDF generation failed or content type is incorrect.');
        }
    } catch (error) {
        console.error('Error generating PDF:', error.message);
    }
}

// Declare constants for latitude and longitude globally
let LATITUDE, LONGITUDE;

// Function to initialize the get_distance API
function initializeGetDistance(latitude, longitude) {
    let btn = document.getElementById('click');
    btn.addEventListener('click', () => {
        const paramsNear = {
            name: '1kCap',
            latitude: latitude,
            longitude: longitude
        };

        // URL of your backend API
        const url = `http://localhost:8000/api/get_distance/?name=ELF&latitude=${paramsNear.latitude}&longitude=${paramsNear.longitude}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('status').innerHTML = `Status: ${JSON.stringify(data)}`;
            })
            .catch(error => {
                document.getElementById('status').innerHTML = `Error: ${error.message}`;
            });
    });
}

// Function to fetch location from Google Geolocation API
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

            initializeGetDistance(LATITUDE, LONGITUDE);
        })
        .catch(error => {
            document.getElementById('status').innerHTML = `Error: ${error.message}`;
        });
}

// Function to get location using browser's geolocation API
function getLocationFromBrowser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            LATITUDE = position.coords.latitude;
            LONGITUDE = position.coords.longitude;

            // Log or use the constants
            console.log('Browser Latitude:', LATITUDE);
            console.log('Browser Longitude:', LONGITUDE);

            initializeGetDistance(LATITUDE, LONGITUDE);

        }, function (error) {
            alert(`Error occurred while getting location: ${error.message}`);
            // Fallback to Google Geolocation API
            getLocationFromGoogle();
        });
    } else {
        // If geolocation is not supported, fallback to Google Geolocation API
        getLocationFromGoogle();
    }
}

// Event listener for DOM content loaded