import React from "react";

const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>
          Why Us {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Learn why patients choose our hospital for expert care, advanced facilities, and compassionate service. Information is for general guidance only."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Why Us {Hospital-Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Learn why patients choose our hospital for expert care, advanced facilities, and compassionate service. Information is for general guidance only."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default WhyUs;
