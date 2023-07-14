import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/c1.jpg";
import Trip2 from "../assets/c2.jpg";
import Trip3 from "../assets/c3.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can descover unique destination using google map</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Make your trip in London"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti provident facilis ratione eius eos quis at similique sequi repellat?"
        />
        <TripData
          image={Trip2}
          heading="Make your trip in Italy"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti provident facilis ratione eius eos quis at similique sequi repellat?"
        />
        <TripData
          image={Trip3}
          heading="Make your trip in Dubai"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti provident facilis ratione eius eos quis at similique sequi repellat?"
        />
      </div>
    </div>
  );
}

export default Trip;
