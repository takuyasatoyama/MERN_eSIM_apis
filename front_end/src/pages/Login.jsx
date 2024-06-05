import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

const Login = () => {
  return (
    <div className="w-full">
      <div className="w-full px-10">
        <div className="form-header text-center mt-14 mb-5">
          <h4>Create an account</h4>
          <h6>Enter your email to sign up for this app</h6>
        </div>
        <Form.Control size="lg" type="text" placeholder="example@gmail.com" />
        <Button className="bg-black w-full mt-3" size="lg">
          Sign up with email
        </Button>
        <div className="flex items-center my-2">
          <div className="h-[1px] flex-1 bg-gray-300"></div>
          <span className="m-3 text-gray-400">or continue with</span>
          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>
        <Button
          variant="outline-light"
          className="w-full text-black"
          style={{ backgroundColor: "#dddcdc" }}
          size="lg"
        >
          <div className="flex items-center justify-center">
            <img src="/images/google.png" alt="" />
            <p className="mb-0">Google</p>
          </div>
        </Button>
        <p className="mt-3 text-gray-600 text-center">
          By clicking continue, you agree to our <b>Terms of service</b> <br />
          and <b>Privacy Policy</b>
        </p>
      </div>

      <div className="px-5 py-3" style={{backgroundColor: "#00274C"}}>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-between text-white ">
            <h4>10GB</h4>
            <h6>100 MINUTES</h6>
          </div>
          <div className="flex flex-col items-start justify-between text-white">
            <p>TOTAL</p>
            <h4>$53.00 USD</h4>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-between text-white ">
            <span className="mr-5">eSIM</span>
            <img
              src="/images/Vector.png"
              className="rounded-circle mr-3"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-between text-white">
            <h6>UNITED ARAB EMIRATES</h6>
            <p>VALID FOR 30 DAYS</p>
          </div>
        </div>
        <Button variant="outline-light" className="w-full">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Login;
