import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationData } from '../../utility/localstorage';
import Donation from '../Donation/Donation';

const Donations = () => {

    const allDonationsData = useLoaderData();
    const [givenDonations, setGivenDonations] = useState([]);

    useEffect(() => {
        const storedData = getStoredDonationData();
        if(storedData.length) {
            const giveDonations = allDonationsData.filter( donation => storedData.includes(donation.id));
            setGivenDonations(giveDonations);
        }
    }, []);

    return (
        <div className='md:mt-10 px-10'>
            {/* <h1>Donations: {allDonationsData.length}</h1> */}
            {/* <h1>Given Donations: {givenDonations.length}</h1> */}

            {
                givenDonations.length === 0 ? <h1 className='font-bold text-red-500 text-7xl text-center'>No Donations Found</h1> : ''
            }

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 ">
                {
                    givenDonations.map(donation => 
                        <Donation
                        key={donation.id}
                        donation={donation}
                        ></Donation>
                    )
                }
            </div>
        </div>
    );
};

export default Donations;