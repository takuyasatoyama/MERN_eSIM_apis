
import Main from "../layouts/Main";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default () => {
    return (

        <Main>
            <div className="form-header text-center">
                <h4>Create an account</h4>
                <p>Enter your email to sign up for this app</p>
            </div>
            <Form.Control size="lg" type="text" placeholder="example@gmail.com" />
            <Button className="bg-black w-full mt-5" size="lg">
                Sign up with email
            </Button>
            <Button variant="light" className="w-full mt-5" size="lg">
                <div className="flex items-center justify-center">
                    <img src="/images/google.png" alt="" />
                    <p className="mb-0">Google</p>

                </div>
            </Button>
            <p>By clicking continue, you agree to our <b>Terms of service</b> and <b>Privacy Policy</b></p>
        </Main>
    )
}