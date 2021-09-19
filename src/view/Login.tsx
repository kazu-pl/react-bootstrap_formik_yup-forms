import { useField } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export interface InitialValues {
  email: string;
  password: string;
}

const Login = () => {
  const [emailField, emailMeta] = useField("email");
  const [passwordField, passwordMeta] = useField("password");

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={emailField.value}
          onChange={emailField.onChange}
          onBlur={emailField.onBlur}
          isInvalid={emailMeta.touched && !!emailMeta.error}
        />
        {emailMeta.error && (
          <Form.Text color="error" style={{ color: "red" }}>
            {emailMeta.error}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={passwordField.value}
          onChange={passwordField.onChange}
          onBlur={passwordField.onBlur}
          isInvalid={passwordMeta.touched && !!passwordMeta.error}
        />
        {passwordMeta.error && (
          <Form.Text style={{ color: "red" }}>{passwordMeta.error}</Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
};

export default Login;
