import "./Destination.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import Mountain5 from "../assets/5.jpg";
import Mountain6 from "../assets/6.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>
        Tours give you the opportunity to see that lot withing the timeframe
      </p>
      <DestinationData 
      className="first-des"
      heading="Make your holidays fantastic"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
      laboriosam voluptas tenetur provident amet ipsa officiis temporibus
      reiciendis, consequatur voluptatum? Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Laborum earum fugiat et quae commodi
      similique sequi quam placeat ipsum qui."
      img1={Mountain1}
      img2={Mountain2}
      />
      <DestinationData 
      className="first-des-reverse"
      heading="This is the best place for you"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
      laboriosam voluptas tenetur provident amet ipsa officiis temporibus
      reiciendis, consequatur voluptatum? Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Laborum earum fugiat et quae commodi
      similique sequi quam placeat ipsum qui."
      img1={Mountain3}
      img2={Mountain4}
      />
      <DestinationData 
      className="first-des"
      heading="Spend your day in Combodia"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
      laboriosam voluptas tenetur provident amet ipsa officiis temporibus
      reiciendis, consequatur voluptatum? Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Laborum earum fugiat et quae commodi
      similique sequi quam placeat ipsum qui."
      img1={Mountain5}
      img2={Mountain6}
      />
    </div>
  );
};
export default Destination;
