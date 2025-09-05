import React from "react";

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>
          Payment {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Find information about hospital payment options, billing, and insurance. Details are for general guidance only and may vary."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Payment {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Find information about hospital payment options, billing, and insurance. Details are for general guidance only and may vary."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Payment;
