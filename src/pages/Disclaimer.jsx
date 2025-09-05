import React from "react";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>
          Disclaimer {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Our website provides general health information to support awareness, not to substitute professional medical care. Always seek advice from licensed healthcare professionals."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Disclaimer {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Our website provides general health information to support awareness, not to substitute professional medical care. Always seek advice from licensed healthcare professionals."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Disclaimer;
