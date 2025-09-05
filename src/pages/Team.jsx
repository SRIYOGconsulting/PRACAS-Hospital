import React from "react";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>
          Team {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Meet the team behind every successful story"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Team {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Meet the team behind every successful story"
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Team;
