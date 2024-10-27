
const getStoredDonationData = () => {
    const storedDonationData = localStorage.getItem('storedDonationData');
    if(storedDonationData) {
        return JSON.parse(storedDonationData);
    }
    return [];
}


const saveDonationData = (donationId) => {
    const storedDonationsData = getStoredDonationData();
    const exists = storedDonationsData.find(id => id === donationId);
    if(!exists) {
        storedDonationsData.push(donationId);
        localStorage.setItem('storedDonationData', JSON.stringify(storedDonationsData));
        return true;
    }
    return false;

}

export { getStoredDonationData, saveDonationData };

