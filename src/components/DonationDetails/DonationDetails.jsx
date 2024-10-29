import PropTypes from "prop-types";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationData } from "../../utility/localstorage";

const DonationDetails = () => {
  
  const allDonationsData = useLoaderData();
  const { donationId } = useParams();

  const donation = allDonationsData.find(
    (donation) => donation.id === parseInt(donationId)
  );
  const { id, title, picture, description, price } = donation;

  const handleDonateBtn = () => {
    const result = saveDonationData(id);
    if (!result) {
      toast.error("You already donation successfully!");
      return;
    }

    toast.success("Donation successful!");
  };

  // if (!donation) {
  //     return <p>No donation found with ID: {donationId.donationId}</p>;
  // }

  return (
    <div className="px-5 lg:px-16 mb-10 md:mt-16">
      <div className="h-[500px] relative rounded-xl">
        <img className="h-full w-full rounded-xl" src={picture} alt="" />
        <div className="bg-black opacity-50 absolute bottom-0 py-16 text-white w-full rounded-b-xl"></div>

        <Link to="#" className="absolute bottom-10 left-10">
          <button 
          onClick={handleDonateBtn}
          className="btn w-40 text-white font-bold border-2 border-red-600 text-lg rounded bg-red-600 hover:bg-transparent hover:border-red-600">
            Donate ${price}
          </button>
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

DonationDetails.propTypes = {
  donation: PropTypes.object,
};

export default DonationDetails;
