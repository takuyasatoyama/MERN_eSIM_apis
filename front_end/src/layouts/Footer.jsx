import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <footer className="px-5 py-3">
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
    </footer>
  );
};

export default Footer;
