import PlanItem from "../components/PlanItem";

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
    <>
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
    </>
  );
};
export default Plan;
