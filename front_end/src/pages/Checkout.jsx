
import Main from "../layouts/Main";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default () => {
    return (

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email <font color="red">*</font></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Name <font color="red">*</font></Form.Label>
                <Form.Control type="input" placeholder="Your Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Billing Details <font color="red">*</font></Form.Label>
                <Form.Control type="address" placeholder="address" />
                <InputGroup className="mb-3">
                    <Form.Control aria-label="City" placeholder="City" />
                    <Form.Control aria-label="Post Code" placeholder="Post Code" />
                </InputGroup>
            </Form.Group>
            <div className="pay-part">
                <InputGroup className="mb-3 flex flex-nowrap">
                    <Button size="lg" variant="outline-dark items-center" style={{display:"flex"}} className="w-full">
                        <img src="/images/card.png" className="w-[20%]" alt="" />
                        <span>CARD</span>
                        </Button>
                    <Button size="lg" variant="outline-dark items-center" style={{display:"flex"}} className="w-full">
                        <img src="/images/applepay.png" className="w-[20%]" alt="" />
                        <span>APPLE PAY</span>
                        </Button>
                </InputGroup>
                <Form.Group className="mb-3 relative" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Card Number <font color="red">*</font></Form.Label>
                    <Form.Control type="input" placeholder="1234 1342 1232 1234" />
                    <div className="pay-cards absolute right-3 top-10 ">
                        <img src="/images/pay-card.png" alt="" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Expiration <font color="red">*</font></Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control type="date" />
                        <Form.Control aria-label="Post Code" placeholder="CVV" />
                    </InputGroup>
                </Form.Group>
            </div>
        </Form>
    )
}