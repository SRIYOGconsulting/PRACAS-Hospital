import React from "react";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Services {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Explore our hospital’s medical services, specialties, and patient care options. Information is for general purposes only."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Services {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Explore our hospital’s medical services, specialties, and patient care options. Information is for general purposes only."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Services;
