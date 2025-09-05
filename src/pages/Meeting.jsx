import React from "react";

const Meeting = () => {
  return (
    <>
      <Helmet>
        <title>
          Meeting {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="View schedules, agendas, and updates for hospital meetings. Information is for general reference and may be subject to change."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Meeting {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="View schedules, agendas, and updates for hospital meetings. Information is for general reference and may be subject to change."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Meeting;
