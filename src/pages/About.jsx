import React from "react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="{Hospital Name} is one with best specialist, latest equipment, and with best service around the country."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="About {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="{Hospital Name} is one with best specialist, latest equipment, and with best service around the country."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default About;
