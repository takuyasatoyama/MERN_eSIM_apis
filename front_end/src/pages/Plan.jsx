import PlanItem from "../components/PlanItem";
import Button from "react-bootstrap/esm/Button";

const Plan = () => {
  const storageArr = [
    {
      title: "DATA",
      subTitle: "VALID FOR 7 DAYS",
      value: "1GB",
      subValue: "$6.00",
    },
    {
      title: "DATA",
      subTitle: "VALID FOR 7 DAYS",
      value: "3GB",
      subValue: "$12.00",
    },
    {
      title: "DATA",
      subTitle: "VALID FOR 7 DAYS",
      value: "5GB",
      subValue: "$20.00",
    },
    {
      title: "DATA",
      subTitle: "VALID FOR 7 DAYS",
      value: "10GB",
      subValue: "$36.00",
    },
  ];
  const voiceArr = [
    {
      title: "MINUTES",
      subTitle: "",
      value: "0",
      subValue: "$0.00",
    },
    {
      title: "MINUTES",
      subTitle: "",
      value: "100",
      subValue: "$10.00",
    },
    {
      title: "MINUTES",
      subTitle: "",
      value: "200",
      subValue: "$17.00",
    },
  ];

  return (
    <div className="w-full px-3">
      <div className="flex items-center">
        <img src="/images/Vector.png" className="rounded-circle mr-3" alt="" />
        <div className="flex flex-col items-start justify-between">
          <p className="m-0">eSIM</p>
          <h3 className="m-0">UNITED ARAB EMIRATES</h3>
          <p className="m-0">VALID FOR 30 DAYS</p>
        </div>
      </div>
      <div>
        {storageArr.map((item, index) => (
          <PlanItem {...item} key={index} />
        ))}
      </div>
      <div className="voice">
        <h4 className="text-center">ADD VOICE MINUTE</h4>
        {voiceArr.map((item, index) => (
          <PlanItem {...item} key={index} />
        ))}
      </div>

      <div className="px-4 py-3 w-full" style={{backgroundColor: "#00274C"}}>
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col w-[60%] items-start justify-between text-white ">
            <h4>10GB</h4>
            <h6>100 MINUTES</h6>
          </div>
          <div className="flex flex-col w-[40%] items-start border-l border-white pl-2 justify-between text-white">
            <p>TOTAL</p>
            <h4>$53.00 USD</h4>
          </div>
        </div>
        <Button variant="outline-light mt-3" className="w-full">
          Buy Now
        </Button>
      </div>
    </div>
  );
};
export default Plan;
