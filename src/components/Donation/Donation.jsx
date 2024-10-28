import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const { id, picture, title, category, colors, price } = donation;
  return (
    <div className="flex flex-col lg:flex-row border-0 rounded-lg">
      <div className="lg:w-96 h-full">
        <img className="w-full h-full rounded-t-xl lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-t-none" src={picture} alt="" />
      </div>

      <div
        style={{ backgroundColor: colors.card_bg }}
        className="flex flex-col gap-2 justify-center px-5 w-full py-5 rounded-bl-xl lg:rounded-tr-xl lg:rounded-bl-none rounded-br-xl"
      >
        <h1 style={{backgroundColor: colors.category_bg, color: colors.text_and_button_bg}}
        className="font-bold py-1 px-5 w-fit auto rounded text-center"
        >{category}</h1>

        <h1 className="text-xl font-bold">{title}</h1>
        <p 
        style={{ color: colors.text_and_button_bg}}
        className="font-bold"
        >${price}</p>

        <div className="">
          <Link 
          to={`/donation-details/${id}`}
          className="">
            <button 
            style={{backgroundColor: colors.text_and_button_bg, borderColor: colors.text_and_button_bg, }}
            className="btn rounded text-white border-2 hover:bg-transparent">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donation: PropTypes.object,
};

export default Donation;
