// components/GoogleMapsLocation.js
import React from 'react';

const GoogleMapsLocation = () => {
  return (
    <div>
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8745434286457!2d77.44225918794551!3d28.63352192130062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5cb9683d7f%3A0x541c1ae70e1d2c7e!2sINDIBUS!5e0!3m2!1sen!2sin!4v1705490889386!5m2!1sen!2sin"
        width="400"
        height="500"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapsLocation;
