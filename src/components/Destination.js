import "./Destination.css";
import Mountain1 from "../assets/d1.jpg";
import Mountain2 from "../assets/d2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import Mountain5 from "../assets/d5.jpg";
import Mountain6 from "../assets/d6.jpg";
import Mountain7 from "../assets/d7.jpg";
import Mountain8 from "../assets/d8.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Why Suryaputra Security Services?</h1>
      <p>
      "Choose Suryaputra Security Services for unparalleled expertise, comprehensive solutions, cutting-edge technology, highly trained personnel, a customer-centric approach, proactive risk management, and a trusted partnership you can depend on for unwavering security."
      </p>
      <DestinationData
        className="first-des"
        heading="Comprehensive Service Offerings"
        text=" We offer a wide range of security services to cater to diverse needs. From manned guarding and mobile patrols to electronic surveillance, access control systems, and alarm monitoring, we have the expertise and resources to deliver comprehensive security solutions."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Customer-Centric Approach"
        text=" We prioritize our clients' satisfaction and work closely with them to understand their unique requirements. Our customer-centric approach allows us to tailor our services to meet specific needs, ensuring a customized security solution that fits seamlessly with your operations."
        img1={Mountain3}
        img2={Mountain4}
      />
      <DestinationData
        className="first-des"
        heading="Trained and Professional Personnel"
        text=" Our security personnel are carefully selected and undergo rigorous training programs. They are equipped with the skills, knowledge, and professionalism to handle any security situation with efficiency and tact. Your safety is our top priority."
        img1={Mountain5}
        img2={Mountain6}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Cutting-Edge Technology"
        text="At Suryaputra Security Services, we stay at the forefront of security technology advancements. Our utilization of state-of-the-art surveillance systems, access control solutions, and alarm monitoring technology ensures enhanced security, real-time monitoring, and swift response to potential threats."
        img1={Mountain7}
        img2={Mountain8}
      />
    </div>
  );
};
export default Destination;
