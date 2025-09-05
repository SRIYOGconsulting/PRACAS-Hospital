import React from "react";

const Location = () => {
  return (
    <>
      <Helmet>
        <title>
          Location {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Find our hospital’s location, directions, and accessibility details. Information provided is for general guidance only."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Location {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Find our hospital’s location, directions, and accessibility details. Information provided is for general guidance only."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Location;
