import React from "react";

const Doctors = () => {
  return (
    <>
      <Helmet>
        <title>
          Doctors {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Meet our experts who help in buld the successful stories"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Doctors {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Meet our experts who help in buld the successful stories"
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Doctors;
