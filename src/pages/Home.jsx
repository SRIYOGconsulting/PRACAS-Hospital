import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Home {Hospital - Name} | Hospital in {city} {country}
        </title>
        <meta
          name="description"
          content="{Hospital Name} is one of the best hospital in {city} {country}"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Hospital Name | Welcome" />
        <meta
          property="og:description"
          content="{Hospital Name} is one of the best hospital in {city} {country}"
        />
        <meta property="og:image" content="../public/logo.svg" />
      </Helmet>
    </>
  );
};

export default Home;
