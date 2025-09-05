import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          Privacy Policy {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Read our hospital’s privacy policy to learn how we collect, use, and protect your personal information."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Privacy Policy {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Read our hospital’s privacy policy to learn how we collect, use, and protect your personal information."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default PrivacyPolicy;
