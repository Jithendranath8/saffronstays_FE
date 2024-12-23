import "../styles/aboutSection.css";
import HorizontalScroll from "./HorizontalScroll";
import Parking from "../../public/images/parking.svg"
import House from '../../public/images/house.svg'
import Person from '../../public/images/person.svg'
import Bed from '../../public/images/bed.svg'
import Pet from '../../public/images/pet.svg'
import Ac from '../../public/images/ac.svg'
import Veg from '../../public/images/veg.svg'
import Nonvge from '../../public/images/nonVeg.svg'

const AboutSection = () => {
  return (
    <section className="about">
      <div className="rating-reviews">
        <p className="rating">
          <span className="star">⭐</span> 4.5 / 5
        </p>
        <p className="reviews">| 105 reviews</p>
      </div>
      <div className="tags">
        <span className="tag"><img className="img-tag" src={House.src}/>Entire Villa</span>
        <span className="tag"><img className="img-tag" src={Person.src}/>6-12 Guests</span>
        <span className="tag"><img className="img-tag" src={Bed.src}/>8 Bedrooms</span>
        <span className="tag"><img className="img-tag" src={Pet.src}/>Pet-Friendly</span>
      </div>
      <div className="about-text">
        <h2>About</h2>
        <ul>
          <li>
            Tucked away cosily in the lap of nature, this is the perfect
            destination getaway for a vacation trip near Delhi and Chandigarh.
          </li>
          <li>
            The tourist-favourite Bhimtal Lake is only a stone's throw away.{" "}
            <a href="#">Read more</a>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button className="button1">House Rules</button>
        <button className="button">Cancellation Policy</button>
        <button className="button">Things you need to know</button>
        <button className="button">Things to do</button>
      </div>
      <div className="amenities">
        <h2>Amenities</h2>
        <ul className="amenities-list">
          <div>
            <li>
              <img className="icon" src={Bed.src}/> 4 Bedrooms
            </li>
            <li>
              <img className="icon" src={Parking.src}></img> Free parking
            </li>
            <li>
            <img className="icon" src={Bed.src}/> 4 Bedrooms
            </li>
          </div>
          <div>
            <li>
              <img className="icon" src={Person.src}></img> 12 Guests
            </li>
            <li>
              <img className="icon" src={Ac.src}></img> Air conditioning
            </li>
            <li>
            <img className="icon" src={Person.src}></img> 12 Guests
            </li>
          </div>
        </ul>
        <button className="amenities-button"> View all Amenities</button>
      </div>
      <div className="meals">
        <h2>Meals</h2>
        <p>
          A cook is available to prepare local specialities and a delicious
          spread of home-cooked meals all day, at an additional charge.
        </p>
        <div className="meal-options">
          <button className="meal-button veg"><img  className = "veg-tag" src={Veg.src}/>Veg</button>
          <button className="meal-button non-veg"><img className="non-veg-tag" src={Nonvge.src}/>Non Veg</button>
        </div>
        <div className="meal-links">
          <button className="meal-link">View Menu</button>
          <button className="meal-link">Meal Rate Card</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
