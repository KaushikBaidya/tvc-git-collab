import React from "react";

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.2871417686815!2d106.69027641440452!3d20.860473498879085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7aec3e6939ad%3A0xbbb891f868367521!2sMedical%20Center%20Ngo%20Quyen%20District!5e0!3m2!1sen!2sbd!4v1659764882215!5m2!1sen!2sbd"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
}

export default Map;
