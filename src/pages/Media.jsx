import React from "react";

const Media = () => {
  return (
    <>
      <Helmet>
        <title>
          Media {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Stay updated with the latest hospital news, press releases, and media coverage. Content is for informational purposes only."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Media {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest hospital news, press releases, and media coverage. Content is for informational purposes only."
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default Media;
