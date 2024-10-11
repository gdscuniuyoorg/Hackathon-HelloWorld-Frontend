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

/* or you use the axios method you'll need dependencies for that*/
async function getToken() {
    const data = {
<<<<<<< HEAD
        username: "admin",
        password: "admin"
=======
        username: "helloworld",
        password: "helloworld"
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
    };

    try {
        const response = await axios.post('YOUR_TOKEN_URL', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data.token; // Return the token from the response
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}
// Utils object to contain the registerData as a plain object
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
};

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
            'Authorization': `Token ${token}` // Use 'Authorization' header for Axios
        };

        // Make the POST request to the register endpoint with the token
        const response = await axios.post('YOUR_REGISTER_URL', Utils.registerData, {
            headers: headers,
            // Optional: Ensure it's sent as JSON if needed
            'Content-Type': 'application/json'
        });

        
        return response.data; // Return response data for further use
    } catch (error) {
        console.error('Error during registration:', error.message);
    }
}

/*getting student data by reg_no*/
async function getData() {
    // Replace '/' with '_' in the registration number
    const regNo = Utils.registerData.reg_no.replace(/\//g, '_');
    
    // Set up the authorization header
    const headers = {
        'Authorization': `Token ${yourTokenHere}` // Replace with the actual token gotten from the get token API 
    };

    // Construct the URL for the student detail endpoint
    const url = `YOUR_BASE_URL/student/${regNo}/`; // Adjust based on your API structure

    try {
        // Make the POST request to the student detail endpoint with the token
        const response = await axios.get(url, {}, { headers });
        console.log('Response:', response.data); // Log the response data (optional)
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
        const response = await axios.post(url, data, { headers });

        // Log and handle the response
        console.log('Attendance Response:', response.data);

        // Ensure 'time' is in the response data
        if (response.data && response.data.time) {
            console.log('Attendance time:', response.data.time);
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

        // Make the GET request with parameters and headers
        const response = await axios.get(url, {
            headers: headers,
            params: params // Pass the params object directly
        });

        // Log and handle the response use your intuition
        console.log('Attendance List Response:', response.data);

        // Ensure 'reg_no' is in the response data
        if (response.data && response.data.reg_no) {
            console.log('Registration Number:', response.data.reg_no);
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
        const response = await axios.post(url, data, { headers });
        console.log('Venue Add Response:', response.data);

        // Check if the short_name is present in the response data
        if (response.data && response.data.short_name) {
            console.log('Venue short name:', response.data.short_name);
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
        const response = await axios.get(url, { headers });
        console.log('Venue List Response:', response.data);

        // Check if the short_name is present in the response data
        if (response.data && response.data.short_name) {
            console.log('First Venue short name:', response.data.short_name);
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

<<<<<<< HEAD
// Event listener for DOM content loaded
=======
// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
    getLocationFromBrowser(); // First try using the browser's geolocation
});
>>>>>>> 608e5adedacd647d47b134a4243f5484fef60192
