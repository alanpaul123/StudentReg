import { useState } from "react";
import { TextField, Stack, Button } from "@mui/material";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import "./App.css";

import Buttons from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    handleReset();
    return setShow(false);
  };
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(0);
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(0);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [isNameInvalid, setNameInvalid] = useState(false);
  const [isNumberInvalid, setNumberInvalid] = useState(false);
  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isAddressInvalid, setAddressInvalid] = useState(false);

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const handleNameValidation = (tag) => {
    const { name, value } = tag;
    // console.log(value.match(/^[a-zA-Z]+$/));
    if (value.match(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/)) {
      setName(value);
      setNameInvalid(false);
    } else {
      setName(value);
      setNameInvalid(true);
    }
  };

  const handleNumberValidation = function (tag) {
    const { name, value } = tag;
    // console.log(value.length == 10 ? "Its 10" : "not there yet");
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if (!!value.match(/^\d*\.?\d+$/) && value.length == 10) {
      setNumber(value);
      setNumberInvalid(false);
    } else {
      setNumber(value);
      setNumberInvalid(true);
    }
  };

  const handleEmailValidation = function (tag) {
    const { name, value } = tag;
    // console.log(value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/));

    if (value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
      setEmail(value);
      setEmailInvalid(false);
    } else {
      setEmail(value);
      setEmailInvalid(true);
    }
  };

  const handleAddressValidation = function (tag) {
    const { name, value } = tag;
    // console.log(value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/));

    if (value.match(/^[a-zA-Z0-9\s,.'-]{1,}$/)) {
      setAddress(value);
      setAddressInvalid(false);
    } else {
      setAddress(value);
      setAddressInvalid(true);
    }
  };

  let m;

  if (course == 10) {
    m = "Biology";
  }
  if (course == 20) {
    m = "Computer Science";
  }
  if (course == 30) {
    m = "Commerce";
  }
  if (course == 40) {
    m = "Humanities";
  }

  const details = {
    Name: name,
    Course: m,
    Gender: gender,
    Email: email,
    DOB: dob,
    Address: address,
    Phone: number,
  };

  const handleReset = () => {
    setGender("");
    setAddress("");
    setEmail("");
    setNumber(0);
    setName("");
    setDob("");
    setCourse("");
    setAddressInvalid(false);
    setEmailInvalid(false);
    setNameInvalid(false);
    setNumberInvalid(false);
  };

  const alertEvery = function () {
    if (course == "") {
      alert("Select a Course");
      return;
    } else if (gender == "") {
      alert("Pick Your Gender");
      return;
    } else if (name == "") {
      alert("Enter Your name");
      return;
    } else if (email == "") {
      alert("Enter Your email");
      return;
    } else if (address == "") {
      alert("Enter your address");
      return;
    } else if (gender == "") {
      alert("Pick Your Gender");
      return;
    } else if (number == "") {
      alert("Enter your number");
      return;
    } else if (dob == "") {
      alert("pick your date of birth");
      return;
    } else {
      handleShow();
      console.log(details);
    }
  };

  return (
    <>
      <div className="container">
        <form action="">
          <div className="head">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpibsVLd8RFCOa32KsXryYyV2n8Zpj66x6XwvvSy8icQ&s"
              alt=""
            />
            <h1 className="text-center">Student Registration</h1>
          </div>
          <div className="one d-flex gap-5 mb-5">
            <div className="name">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={(e) => handleNameValidation(e.target)}
                value={name || ""}
              />

              {isNameInvalid && (
                <div className="fw-bolder text-danger">
                  Enter valid Full Name
                </div>
              )}
            </div>

            <div className="add">
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                onChange={(e) => handleAddressValidation(e.target)}
                value={address || ""}
              />
              {isAddressInvalid && (
                <div className="fw-bolder text-danger">
                  Please Enter valid Address
                </div>
              )}
            </div>
          </div>

          <div className="one d-flex gap-5 mb-5">
            <div className="mobile">
              <TextField
                id="outlined-basic"
                label="mobile"
                variant="outlined"
                onChange={(e) => handleNumberValidation(e.target)}
                value={number || ""}
              />

              {isNumberInvalid && (
                <div className="fw-bolder text-danger">Enter valid Number</div>
              )}
            </div>

            <div className="email">
              <TextField
                id="outlined-basic"
                label="email"
                variant="outlined"
                onChange={(e) => handleEmailValidation(e.target)}
                value={email || ""}
              />

              {isEmailInvalid && (
                <div className="text-danger fw-bolder">Enter Valid Email</div>
              )}
            </div>
          </div>

          <div className="one d-flex gap-5">
            <div className="course">
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={course}
                    label="Course"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Biology</MenuItem>
                    <MenuItem value={20}>Computer Science </MenuItem>
                    <MenuItem value={30}>Commerce</MenuItem>
                    <MenuItem value={40}>Humanities</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="gender">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={gender || ""}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  onChange={(e) => setGender(e.target.value)}
                />
              </RadioGroup>
            </div>
          </div>

          <div className="one two">
            <label htmlFor="Date" className="da">
              Date of birth
            </label>
            <input
              type="Date"
              id="Date"
              onChange={(e) => setDob(e.target.value)}
              value={dob || ""}
            />
          </div>
          <div className="btns mt-5 d-flex ">
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={alertEvery}
                disabled={
                  isAddressInvalid ||
                  isEmailInvalid ||
                  isNumberInvalid ||
                  isNameInvalid
                }
              >
                Register
              </Button>
              {/* <Button variant="contained" onClick={handleShow}>
                Register
              </Button> */}
              <Button
                variant="outlined"
                className="bg-success text-light"
                onClick={handleReset}
              >
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registration Successfull</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span className="p1">Name :</span>
            &nbsp; {name}
          </p>

          <p>
            <span className="p1">Mobile :</span>
            &nbsp; {number}
          </p>

          <p>
            <span className="p1">Gender :</span>
            &nbsp; {gender}
          </p>

          <p>
            <span className="p1">Email :</span>
            &nbsp; {email}
          </p>

          <p>
            <span className="p1">Address :</span>
            &nbsp; {address}
          </p>

          <p>
            <span className="p1">Course :</span>
            &nbsp; {m}
          </p>

          <p>
            <span className="p1">Date of Birth :</span>
            &nbsp; {dob}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="bg-success text-light"
            onClick={handleClose}
          >
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;

// Name: ${name},
// Course: ${m},
// Gender: ${gender},
// Email: ${email},
// DOB: ${dob},
// Address: ${address},
// Phone: ${number} `);
//   handleReset();
