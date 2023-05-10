import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Login = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeId = (e) => {
    const id = e.target.value;
    setId(id);
  };
  const login = () => {
    props.login({ name: name, id: id });
    props.history.push("/");
  };
  return (
    <div>
      <Form>
        <Form.Group style={{ width: "50%" }}>
          <Form.Label style={{ textAlign: "left" }}>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={onChangeName}
            required
          />
          <Form.Label style={{ textAlign: "start" }}>ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter id"
            value={id}
            onChange={onChangeId}
          />
        </Form.Group>
        <br />
        <Button
          type="submit"
          style={{ justifyContent: "flex-start" }}
          variant="primary"
          onClick={login}>
          Submit
        </Button>
      </Form>
      <br />
    </div>
  );
};
export default Login;
