import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import "./SignInSignUp.css";
import bcrypt from "bcryptjs";

function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const newName = useRef();
  const newEmail = useRef();
  const newPassword = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const localSignUp = localStorage.getItem("signUp");
    const localEmail = localStorage.getItem("email");

    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);

  const handleClick = async () => {
    if (name.current.value && email.current.value && password.current.value) {
      if (!validateEmail(email.current.value)) {
        setErrorMessage("Please enter a valid email address");
        return;
      }

      if (!validatePassword(password.current.value)) {
        setErrorMessage("Password should be at least 6 characters");
        return;
      }

      const hashedPassword = await hashPassword(password.current.value);
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", hashedPassword);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    } else {
      setErrorMessage("All fields are required");
    }
  };

  const handleSignIn = async () => {
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");

    if (
      email.current.value === localEmail &&
      await bcrypt.compare(password.current.value, localPassword)
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      setErrorMessage("Please enter valid credentials");
    }
  };

  const handleUpdate = async () => {
    if (newName.current.value && newEmail.current.value && newPassword.current.value) {
      if (!validateEmail(newEmail.current.value)) {
        setErrorMessage("Please enter a valid email address");
        return;
      }

      if (!validatePassword(newPassword.current.value)) {
        setErrorMessage("Password should be at least 6 characters");
        return;
      }

      const hashedPassword = await hashPassword(newPassword.current.value);
      localStorage.setItem("name", newName.current.value);
      localStorage.setItem("email", newEmail.current.value);
      localStorage.setItem("password", hashedPassword);
      alert("Profile updated successfully!!");
      window.location.reload();
    } else {
      setErrorMessage("All fields are required");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage("");
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
    setErrorMessage("");
  };

  return (
    <div>
      {showHome ? (
        <Home />
      ) : isEdit ? (
        <div className="container">
          <h2>Edit Profile</h2>
          <div className="input_space">
            <input placeholder="New Name" type="text" ref={newName} />
          </div>
          <div className="input_space">
            <input placeholder="New Email" type="text" ref={newEmail} />
          </div>
          <div className="input_space">
            <input placeholder="New Password" type="password" ref={newPassword} />
          </div>
          {errorMessage && <p className="error_message">{errorMessage}</p>}
          <button onClick={handleUpdate}>Update</button>
          <button onClick={toggleEdit}>Cancel</button>
        </div>
      ) : (
        <div className="container">
          {isSignUp ? (
            <div>
              <h2>Registration Form</h2>
              <div className="input_space">
                <input placeholder="Name" type="text" ref={name} />
              </div>
              <div className="input_space">
                <input placeholder="Email" type="text" ref={email} />
              </div>
              <div className="input_space">
                <input placeholder="Password" type="password" ref={password} />
              </div>
              {errorMessage && <p className="error_message">{errorMessage}</p>}
              <button onClick={handleClick}>Register</button>
              <p>
                Already have an account?{" "}
                <span onClick={toggleForm} className="toggle_link">
                  Log In
                </span>
              </p>
            </div>
          ) : (
            <div>
              <h2>Log In</h2>
              <div className="input_space">
                <input placeholder="Email" type="text" ref={email} />
              </div>
              <div className="input_space">
                <input placeholder="Password" type="password" ref={password} />
              </div>
              {errorMessage && <p className="error_message">{errorMessage}</p>}
              <button onClick={handleSignIn}>Log In</button>
              <p>
                Don't have an account?{" "}
                <span onClick={toggleForm} className="toggle_link">
                  Sign Up
                </span>
              </p>
              <p>
                Want to edit your profile?{" "}
                <span onClick={toggleEdit} className="toggle_link">
                  Edit Profile
                </span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SignInSignupWithLocalStorage;