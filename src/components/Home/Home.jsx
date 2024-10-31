import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationsContainer from "../DonationsContainer/DonationsContainer";

const Home = () => {
  const allDonationsData = useLoaderData();

  const [filteredDonations, setFilteredDonations] = useState([]);

  useEffect(() => {
    setFilteredDonations(allDonationsData);
  }, []);

  const handleSearch = (value) => {
    const filtered = allDonationsData.filter((donation) =>
      donation.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDonations(filtered);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch}></Banner>
      <DonationsContainer
        filteredDonations={filteredDonations}
      ></DonationsContainer>
    </div>
  );
};

export default Home;
