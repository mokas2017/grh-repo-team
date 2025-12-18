import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { register } from "../../JS/features/authSlice";
const Register = () => {
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    roleTitre: "",
    profilePic: null,
  });
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setNewUser({ ...newUser, profilePic: e.target.files[0] });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", newUser.userName)
    formData.append("email", newUser.email)
    formData.append("password", newUser.password)
    formData.append("phone", newUser.phone)
    formData.append("roleTitre", newUser.roleTitre)
    if (newUser.profilePic) formData.append("profilePic", newUser.profilePic)
    dispatch(register(formData))
    setNewUser({
      userName: "",
      email: "",
      password: "",
      phone: "",
      roleTitre: "",
      profilePic: null,
    });

  };
  // console.log(newUser)
  return (
    <div className="formLogin">
      <h2 className="mb-5">Register User</h2>
      <Form onSubmit={handleRegister}>
        {/* -----------------------USER NAME--------------- */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter User Name"
            required
            name="userName"
            value={newUser.userName}
            onChange={handleChange}
          />
        </Form.Group>
        {/* -------------------EMAIL---------- */}
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </Form.Group>
        {/* -------------------PASSWORD------------ */}
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
            name="password"
            required
          />
        </Form.Group>
        {/* ---------------------PHONE------------ */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
          />
        </Form.Group>
        {/* -------------IMAGE---------------------- */}
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Form.Group>
        {/* -----------------ROLE--------------------------- */}
        <Form.Select
          aria-label="role"
          name="roleTitre"
          value={newUser.roleTitre}
          onChange={handleChange}
          required
        >
          <option>Role</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
          <option value="MODERATEUR">ModÃ©rateur</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;