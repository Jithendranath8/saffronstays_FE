"use client"
import React from "react";
import "../styles/horizontalScroll.css";

const HorizontalScroll = () => {
  const cards = [
    { id: 1, user: "Vinay", date: "Sep 03, 2023" },
    { id: 2, user: "Vinay", date: "Sep 03, 2023" },
    { id: 3, user: "Vinay", date: "Sep 03, 2023" },
    // { id: 4, user: "Vinay", date: "Sep 03, 2023" },
  ];

  return (
    <div className="horizontal-scroll">
      <h2 className="scroll-title"> Real Moments</h2>
      <div className="card-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img
              src="https://s3-alpha-sig.figma.com/img/8561/9276/3a82dc8b251645bc4c2f6cfec4541a6f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aE7~ySS8y5m-Vd2grjdX9Dvm3VaXooSYdNS3QmYtKfRbSlSwSnMIkmm8Hgd3KhDWWVw6~HhLMXWmHZOUjifQKMb9nITElpm-4rTVZyC9wBlwfGocwlWGlAFJPXmcszKc~hbXm6E7PXsXf184PIJzlRniDnlw1VINYd2o5UkgU3EBztRoE8bljRldL~r0urPW9ZBIwHt-RplG32lwvLA9ovkegtaTCDRhz~~-58CQ12Qo0Lmj9gPdT7NWLo1iFe9ZOwih1DrK89HLVkC9Mgrs3kdDHmBcrS3K2YRCvKThfFLsUjbv~yemIcFcrWZ5imyT8gvbf0IN6Xl2R7D~ov0DMw__" // Replace with the actual image URL
              alt="Scenic View"
              className="card-image"
            />
            <div className="card-content">
              <span className="card-user">{card.user}</span>•
              <span className="card-date"> {card.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
