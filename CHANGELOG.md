# Changelog

### 1. Deletion of `src/App.jsx`

- **Purpose**: Previously, `src/App.jsx` was responsible for rendering the entire application. It relied on boolean states to conditionally render various routes.
- **Changes**: This file has been deleted, and the project has transitioned to using `react-router-dom` for URL-based routing, providing a cleaner and more scalable approach to navigation.

### 2. Creation of `src/router.jsx`

- **Purpose**: The newly created `src/router.jsx` file introduces `react-router-dom` routes to handle the mounting of different components based on the URL.
- **Details**: This file defines the routing structure of the application, including key routes for login, signup, and landing pages.

### 3. Modified `src/main.jsx`

- **CSS Management**: The CSS file previously imported in `src/App.jsx` (`src/App.css`) is now imported in `src/main.jsx`.
- **Mounting the Router**: The application is now mounted using the router created in `src/router.jsx`, allowing `react-router-dom` to handle the navigation across the app.

### 4. Addition of `react-router-dom`

- **Purpose**: Added `react-router-dom` as a dependency for robust routing based on URLs instead of boolean state management.
- **Benefit**: Provides a more efficient and scalable way to manage routes.

### 5. Use of `GetStarted.jsx` for Login and Signup Pages

- **Details**: The `src/Components/LandingPage/main/GetStarted.jsx` component is now being used as a layout for the login and signup pages. This promotes code reuse and consistency across pages.

### 6. Creation of `src/pages` Folder

- **Structure Update**: Created the `src/pages` folder to organize page components in a structured manner.
- **Export File**: A new `src/pages/index.ts` file has been added for easy exporting of all page components from a single location.

### 7. Creation of `src/pages/home.tsx`

- **Details**: A new `src/pages/home.tsx` component has been created to serve as the landing page of the application, managing the user’s entry point.

### 8. Creation of `field.jsx`

- **Details**: A `src/Components/LandingPage/main/field.jsx` component has been added to handle form input fields specifically for the signup page, ensuring modularity in form handling.

### 9. Performance Optimization in Login and Signup Pages

- **Details**: Unnecessary state management in both the login and signup page components has been removed to improve performance and simplify the logic.

### 10. Form Handling in Login and Signup Pages

- **Details**: The login and signup pages have been modified to correctly process form data and submit it to the relevant endpoints, improving the overall flow of the authentication process.

### 11. Addition of "Comment Anchors" Extension Recommendation

- **Purpose**: To help developers easily locate important comments such as TODOs and NOTES, "Comment Anchors" has been recommended as an extension. This will streamline code review and future development by identifying key areas of focus.

### 12. Removal of "Base" Configuration in `vite.config.js`

- **Purpose**: The `base` configuration for Vite has been removed, allowing the site to render correctly under various paths, fixing issues related to base path misconfigurations.

### 13. Export of Map Logic to `src/maps.js`

- **Details**: The map rendering logic that was previously inside a `useEffect` hook has been extracted into a separate file (`src/maps.js`) for better organization and reusability.

### 14. Modification of `index.html`

- **Details**: The `index.html` file has been updated to include a CDN script for map rendering. This resolves issues with multiple rendering instances when the map logic was implemented inside a `useEffect` hook.
