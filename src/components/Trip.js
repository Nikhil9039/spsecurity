import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/1.jpg";
import Trip2 from "../assets/2.jpg";
import Trip3 from "../assets/3.jpg";
import Trip4 from "../assets/4.jpg";
import Trip5 from "../assets/5.jpg";
import Trip6 from "../assets/6.jpg";
import Trip7 from "../assets/7.jpg";
import Trip8 from "../assets/8.jpg";
import Trip9 from "../assets/9.jpg";
function Trip() {
  return (
    <>
    <div className="trip">
      <h1>Our Range of Security Services</h1>
      <p>Trusted Security Solutions for Your Peace of Mind</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Manned Guarding"
          text="Our highly trained security guards provide a physical presence that deters potential threats and ensures the safety of your premises and personnel."        />
        <TripData
          image={Trip2}
          heading="CCTV Surveillance"
          text="Our advanced CCTV surveillance systems provide round-the-clock monitoring and recording, deterring intruders and providing valuable evidence in the event of an incident."
        />
        <TripData
          image={Trip3}
          heading="Services to Govt. Organizations"
          text="We specialize in providing comprehensive security services tailored to the unique needs of government organizations. Our team of highly trained security professionals ensures the safety and protection of government facilities, personnel, and sensitive information."
/>
      </div>
    </div>
    <div className="trip">
      <div className="tripcard">
        <TripData
          image={Trip4}
          heading="Facility Management"
          text="We specialize in providing professional facility management services that enable organizations to focus on their core activities while we take care of their facility-related needs. Our experienced team understands the unique requirements of each facility and tailors solutions to meet the specific demands of our clients."

/>
        <TripData
          image={Trip5}
          heading="Security Services For Corporate"
          text="Our corporate security services offer tailored solutions to meet the unique security needs of corporate environments. We provide access control, executive protection, surveillance systems, and risk assessments to safeguard corporate assets, ensure the safety of employees, and maintain business continuity."
        />
        <TripData
          image={Trip6}
          heading="Security Services For Bank"
          text="Our specialized security services for banks include comprehensive solutions to protect bank premises, assets, employees, and customers. We offer robust access control systems, alarm monitoring, video surveillance, and trained security personnel to deter criminal activities and maintain a secure banking environment."
        />
      </div>
    </div>
    <div className="trip">
      <div className="tripcard">
        <TripData
          image={Trip7}
          heading="Healthcare Facility Security"
          text="We deliver customized security solutions for healthcare facilities, addressing the unique safety and privacy concerns of patients, staff, and visitor"
        />
        <TripData
          image={Trip8}
          heading="Security Services For Factory"
          text="With expertise in industrial security, our factory security services focus on protecting manufacturing facilities, warehouses, and production lines. We implement security protocols, access control systems, and surveillance solutions to prevent theft, ensure employee safety, and maintain a secure working environment."
        />
        <TripData
          image={Trip9}
          heading="Manpower Services For Staff"
          text="In addition to security services, we provide specialized manpower services for staffing needs across various industries. Whether you require administrative, customer service, or operational support, we can provide qualified and trained personnel to meet your specific manpower requirements."
        />
      </div>
    </div>
    </>
  );
}

export default Trip;
