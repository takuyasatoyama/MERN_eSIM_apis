import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Checkout = () => {
  return (
    <div className="w-full">
      <div className="w-full px-10 pt-2">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Email <font color="red">*</font>
            </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Name <font color="red">*</font>
            </Form.Label>
            <Form.Control type="input" placeholder="Your Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
            <Form.Label>
              Billing Details <font color="red">*</font>
            </Form.Label>
            <Form.Control type="country" placeholder="Country" />
            <Form.Control
              type="address"
              placeholder="Address"
              className="mt-1"
            />
            <InputGroup className="mb-3 mt-1">
              <Form.Control aria-label="City" placeholder="City" />
              <Form.Control aria-label="Post Code" placeholder="Post Code" />
            </InputGroup>
          </Form.Group>
          <div className="pay-part">
            <InputGroup className="mb-3 flex flex-nowrap">
              <Button
                size="lg"
                variant="outline-dark items-center"
                style={{ display: "flex" }}
                className="w-full"
              >
                <img src="/images/card.png" className="w-[20%]" alt="" />
                <span>CARD</span>
              </Button>
              <Button
                size="lg"
                variant="outline-dark items-center"
                style={{ display: "flex" }}
                className="w-full"
              >
                <img src="/images/applepay.png" className="w-[20%]" alt="" />
                <span>APPLE PAY</span>
              </Button>
            </InputGroup>
            <Form.Group
              className="mb-3 relative"
              controlId="exampleForm.ControlTextarea3"
            >
              <Form.Label>
                Card Number <font color="red">*</font>
              </Form.Label>
              <Form.Control type="input" placeholder="1234 1342 1232 1234" />
              <div className="pay-cards absolute right-3 top-10 ">
                <img src="/images/pay-card.png" alt="" />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea4"
            >
              <Form.Label>
                Expiration <font color="red">*</font>
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control type="date" />
                <Form.Control aria-label="Post Code" placeholder="CVV" />
              </InputGroup>
            </Form.Group>
          </div>
        </Form>
      </div>

      <div className="px-5 py-3" style={{ backgroundColor: "#00274C" }}>
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
export default Checkout;
