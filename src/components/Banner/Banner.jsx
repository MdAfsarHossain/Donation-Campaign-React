import PropTypes from 'prop-types';
import React from "react";

const Banner = ({handleSearch}) => {

  const searchValue = () => {
    const searchInput = document.getElementById('inputId');
    handleSearch(searchInput.value);
    searchInput.value = '';
  }

  return (
    <div className="h-80 border-0 flex flex-col justify-center items-center gap-10 bg-[url('https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-opacity-506 bg-no-repeat bg-cover bg-center mb-10">
      <h1 className="font-bold text-3xl text-center md:text-5xl text-white">I Grow By Helpig People In Need</h1>
      <div className="join">
        <input 
        id='inputId'
        name='inputSearch'
        className="input input-bordered join-item" placeholder="Search Here..." />
        <button 
        onClick={() => searchValue()}
        className="btn join-item rounded bg-red-500 text-white hover:bg-red-400 ">Search</button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func,
}

export default Banner;
