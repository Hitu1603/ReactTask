# Getting Started with Your React Project

This project was initialized using [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In your project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.\
The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you need full control over the configuration, you can `eject` the default setup. This command copies all configuration files and dependencies like webpack, Babel, and ESLint into your project, giving you complete control over them. All commands except `eject` will continue to work, but they will now reference your copied scripts. Proceed with caution!

### 'Functionality'

1. **User Registration**:
   - Users register with name, email, and password.
   - Validates email and password.
   - Hashes and stores password in local storage.
   - Reloads page on successful registration.

2. **User Login**:
   - Users log in with email and password.
   - Validates credentials against stored data.
   - Reloads page on successful login.

3. **Profile Update**:
   - Users can update name, email, and password.
   - Validates new email and password.
   - Hashes and updates password in local storage.
   - Reloads page on successful update.

4. **Form Toggling**:
   - Switches between registration, login, and profile update forms.

5. **Error Handling**:
   - Displays error messages for invalid inputs.

6. **Persistent Login State**:
   - Checks local storage for login status.
   - Displays `Home` component if user is logged in.

### More Information

For more details on Create React App, refer to the [official documentation](https://facebook.github.io/create-react-app/docs/getting-started).\
To learn more about React, check out the [React documentation](https://reactjs.org/).
