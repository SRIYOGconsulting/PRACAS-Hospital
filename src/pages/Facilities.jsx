import React from "react";

const Facilities = () => {
  return (
    <>
      <Helmet>
        <title>
          Facilities {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Explore our hospital facilities designed for patient comfort, safety, and advanced care. Information is for general guidance only."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Facilities {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Explore our hospital facilities designed for patient comfort, safety, and advanced care. Information is for general guidance only."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Facilities;
