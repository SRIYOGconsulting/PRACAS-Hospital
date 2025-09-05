import React from "react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Get in touch with {Hospital Name} to detect early problems."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Contact {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Get in touch with {Hospital Name} to detect early problems."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Contact;
