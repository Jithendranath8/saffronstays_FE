import React from 'react';
import styles from '../styles/roomBeds.css';

const RoomsBeds = () => {
  const rooms = [
    {
      image: '/images/room1.jpg',
      description1: 'Tucked away cosily in the lap of nature, this is the perfect destination getaway',
      description2: 'The tourist-favourite Bhimtal Lake is only a stone’s throw away.',
    },
    {
      image: '/images/room2.jpg',
      description1: 'Tucked away cosily in the lap of nature, this is the perfect destination getaway',
      description2: 'The tourist-favourite Bhimtal Lake is only a stone’s throw away.',
    },
    {
      image: '/images/room3.jpg',
      description1: 'Tucked away cosily in the lap of nature, this is the perfect destination getaway',
      description2: 'The tourist-favourite Bhimtal Lake is only a stone’s throw away.',
    },
  ];

  return (
    <div className="container">
      <h2 className="heading">Rooms & Beds</h2>
      <div className="cardsContainer">
        {rooms.map((room, index) => (
          <div key={index} className="card">
            <img src="https://s3-alpha-sig.figma.com/img/8561/9276/3a82dc8b251645bc4c2f6cfec4541a6f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aE7~ySS8y5m-Vd2grjdX9Dvm3VaXooSYdNS3QmYtKfRbSlSwSnMIkmm8Hgd3KhDWWVw6~HhLMXWmHZOUjifQKMb9nITElpm-4rTVZyC9wBlwfGocwlWGlAFJPXmcszKc~hbXm6E7PXsXf184PIJzlRniDnlw1VINYd2o5UkgU3EBztRoE8bljRldL~r0urPW9ZBIwHt-RplG32lwvLA9ovkegtaTCDRhz~~-58CQ12Qo0Lmj9gPdT7NWLo1iFe9ZOwih1DrK89HLVkC9Mgrs3kdDHmBcrS3K2YRCvKThfFLsUjbv~yemIcFcrWZ5imyT8gvbf0IN6Xl2R7D~ov0DMw__" alt="Room" className="image"/>
            <div className='textContainer'>
              <ul className="text">
                <li>{room.description1}</li>
                <li>{room.description2}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsBeds;
