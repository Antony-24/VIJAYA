import React from "react";

export const GoogleMapEmbed = () => {
  return (
    <section className="w-full flex justify-center">
      <iframe
        title="Vijaya Convention Center Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d76.5751234!3d9.3831234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b065f123456789%3A0x123456789abcdef!2sVijaya%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};
