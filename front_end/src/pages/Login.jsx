
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default () => {
    return (

        <>
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
                <span className="m-3 text-gray-400">
                    or continue with
                </span>
                <div className="h-[1px] flex-1 bg-gray-300"></div>
            </div>
            <Button variant="outline-light" className="w-full text-black" style={{ backgroundColor: "#dddcdc" }} size="lg">
                <div className="flex items-center justify-center">
                    <img src="/images/google.png" alt="" />
                    <p className="mb-0">Google</p>
                </div>
            </Button>
            <p className="mt-3 text-gray-600">By clicking continue, you agree to our <b>Terms of service</b> and <b>Privacy Policy</b></p>
        </>
    )
}