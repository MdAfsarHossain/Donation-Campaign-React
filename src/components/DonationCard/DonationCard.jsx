import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, picture, title, category, colors } = donation;

  // console.log(typeof colors.card_bg);
  // colors.card_bg
  // colors.category_bg
  // colors.text_and_button_bg

  return (
    <Link to={`/donation-details/${id}`}>
      <div className=" rounded-full">
        <img className="w-full rounded-t-lg h-48" src={picture} alt={title} />
        <div style={{backgroundColor: colors.card_bg}} className={`px-5 py-5 rounded-b-lg`}>
          <h2 style={{backgroundColor: colors.category_bg, color: colors.text_and_button_bg}} className="font-bold py-1 px-5 w-fit auto rounded text-center">{category}</h2>
          <h1 style={{color: colors.text_and_button_bg}} className="text-lg mt-2 font-bold">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationCard;
