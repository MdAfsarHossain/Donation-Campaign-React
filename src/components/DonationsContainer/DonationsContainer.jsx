import PropTypes from "prop-types";
import DonationCard from "../DonationCard/DonationCard";

const DonationsContainer = ({ filteredDonations }) => {
  return (
    <div className="px-10 md:px-10 mb-20">

      {filteredDonations.length === 0 ? (
        <h1 className="font-bold text-red-500 text-7xl text-center">
          Search not found....
        </h1>
      ) : (
        ""
      )}

      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredDonations.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

DonationsContainer.propTypes = {
  filteredDonations: PropTypes.array,
};

export default DonationsContainer;
