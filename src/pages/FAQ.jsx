const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>
          FAQ {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="Find answers from frequently asked question about {Hospital Name}"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="FAQ {Hospital - Name} | Hospital in {city} {country}"
        />
        <meta
          property="og:description"
          content="Find answers from frequently asked question about {Hospital Name}"
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
      ;
    </>
  );
};

export default FAQ;
