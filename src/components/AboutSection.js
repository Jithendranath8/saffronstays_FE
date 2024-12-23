import "../styles/aboutSection.css";
import HorizontalScroll from "./HorizontalScroll";
import ac from "../app/assets/ac.svg"

const AboutSection = () => {
  return (
    <section className="about">
      <div className="rating-reviews">
        <p className="rating">
          <span className="star">⭐</span> 4.5 / 5
        </p>
        <p className="reviews">| 105 reviews</p>

        <button></button>
        <button></button>
      </div>
      <div className="tags">
        <span className="tag">Entire Villa</span>
        <span className="tag">6-12 Guests</span>
        <span className="tag">8 Bedrooms</span>
        <span className="tag">Pet-Friendly</span>
      </div>
      <div className="about-text">
        <h2>About</h2>
        <ul>
          <li>
            Tucked away cosily in the lap of nature, this is the perfect destination getaway for a vacation trip near Delhi and Chandigarh.
          </li>
          <li>
            The tourist-favourite Bhimtal Lake is only a stone's throw away. <a href="#">Read more</a>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button className="button">House Rules</button>
        <button className="button">Cancellation Policy</button>
        <button className="button">Things you need to know</button>
        <button className="button">Things to do</button>
      </div>
      <div className="amenities">
        <h2>Amenities</h2>
        <ul className="amenities-list">
          <div>
            <li>
              <span className="icon">🛏️</span> 4 Bedrooms
            </li>
            <li>
              <span className="icon">🚗</span> Free parking
            </li>
            <li>
              <span className="icon">❄️</span> Air conditioning
            </li>
            <li>
              <span className="icon">👤</span> 12 Guests
            </li>
          </div>
          <div>
          <li>
              <span className="icon">🛏️</span> 4 Bedrooms
            </li>
            <li>
              <span className="icon">🚗</span> Free parking
            </li>
            <li>
              <span className="icon">❄️</span> Air conditioning
            </li>
            <li>
              <span className="icon">👤</span> 12 Guests
            </li>
          </div>
        </ul>
      </div>
      <div className="meals">
        <h2>Meals</h2>
        <p>
          A cook is available to prepare local specialities and a delicious spread of
          home-cooked meals all day, at an additional charge.
        </p>
        <div className="meal-options">
          <button className="meal-button veg">Veg</button>
          <button className="meal-button non-veg">Non Veg</button>
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
