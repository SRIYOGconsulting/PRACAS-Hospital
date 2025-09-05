import React from "react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>
          Terms of Service {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Read terms and conditon of {Hospital Name}"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Terms of Service {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Read terms and conditon of {Hospital Name}"
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default TermsOfService;
