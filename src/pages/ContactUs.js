import React from "react";
import { HeaderSection } from "../components/contactus/HeaderSection";
import { GoogleMapEmbed } from "../components/contactus/GoogleMapEmbed";
import { CustomContactForm } from "../components/contactus/CustomContactForm";
import { ContactInfo } from "../components/contactus/ContactInfo";

function ContactUs() {
  return (
    <div className="bg-white">
      <HeaderSection />
      <section className="max-w-[90%] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactInfo />
        <CustomContactForm />
      </section>
      <GoogleMapEmbed />
    </div>
  );
}

export default ContactUs;
