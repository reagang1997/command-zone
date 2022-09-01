import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

function RegisterPage() {
  const [activeContainer, setActiveContainer] = React.useState("");
  const [signupNameFocus, setSignupNameFocus] = React.useState("");
  const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
  const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
  const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
  const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <div className="page-header bg-default">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/mtg_bg.jpg") + ")",
            }}
          ></div>
          <Container className={activeContainer}>
            <div className="form-container sign-up-container">
              <Form>
                <h2>Create Account</h2>
                
                
                <FormGroup className={"mb-3 " + signupNameFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      onFocus={() => setSignupNameFocus("focused")}
                      onBlur={() => setSignupNameFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={"mb-3 " + signupEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={() => setSignupEmailFocus("focused")}
                      onBlur={() => setSignupEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <Button color="danger">Sign Up</Button>
              </Form>
            </div>
            <div className="form-container sign-in-container">
              <Form action="#" role="form">
                <h2>Sign in</h2>

                <FormGroup className={"mb-3 " + signinEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={() => setSigninEmailFocus("focused")}
                      onBlur={() => setSigninEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signinPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={() => setSigninPasswordFocus("focused")}
                      onBlur={() => setSigninPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Forgot your password?
                </a>
                <Button className="mt-3" color="danger">
                  Sign In
                </Button>
              </Form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div
                  className="overlay-panel overlay-left"
                  style={{ backgroundColor: "black" }}
                >
                  <h1 className="text-white">Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <Button
                    className="btn-danger"
                    color="danger"
                    id="signIn"
                    size="sm"
                    onClick={() => setActiveContainer("")}
                  >
                    Sign In
                  </Button>
                </div>
                <div
                  className="overlay-panel overlay-right"
                  style={{ backgroundColor: "black" }}
                >
                  <h1 className="text-white">Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <Button
                    className="btn-danger"
                    color="danger"
                    id="signUp"
                    size="sm"
                    onClick={() => setActiveContainer("right-panel-active")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default RegisterPage;
