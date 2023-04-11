import "./TourList.scss";
import Tour from "../Tour/Tour";
import tourData from "./tour-data";

const TourList = () => {
  return (
    <section className="tourlist">
      {tourData.map((tour) => (
        <Tour key={tour.id} img={tour.img} city={tour.city} name={tour.name} info={tour.info} />
      ))}
    </section>
  );
};

export default TourList;
