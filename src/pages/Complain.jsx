import React from "react";

const Complain = () => {
  return (
    <>
      <Helmet>
        <title>
          Complain {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="If you ever felt unheard we are here for you"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Complain {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="If you ever felt unheard we are here for you"
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Complain;
