import '../styles/bookingCard.css';

const BookingCard = () => {
  return (
    <div className="booking-card">
      <div className="price-section">
        <p className="original-price">₹1,49,086</p>
        <h2>₹1,00,086<span>/Night</span></h2>
      </div>
      <div className="discount-banner">
        <p>Special discounts available!!</p>
        <button className="unlock-button">Unlock Price</button>
      </div>
      <form>
        <div className="form-group">
          <label>
            <i className="calendar-icon"></i>
            <input
              type="text"
              placeholder="Check in - Check out"
              className="input-field"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <i className="guest-icon"></i>
            <select className="input-field">
              <option value="2">2 Guests</option>
            </select>
          </label>
        </div>
        <button type="button" className="availability-button">
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default BookingCard;
