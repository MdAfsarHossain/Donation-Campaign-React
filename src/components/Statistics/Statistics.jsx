import { default as React } from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { getStoredDonationData } from "../../utility/localstorage";

const Statistics = () => {

  const allDonationsData = useLoaderData();
  const storedDonationsData = getStoredDonationData();

  let totalDonation = allDonationsData.length;
  const totalGivenDonations = storedDonationsData.length;

  const donationsGivenPercentage = parseFloat(((totalGivenDonations / totalDonation) * 100).toFixed(2));
  
  const remainingDonations = totalDonation - totalGivenDonations;
  const donationsLeftPercentage = parseFloat(((remainingDonations / totalDonation) * 100).toFixed(2));
  
  // console.log(totalDonation, totalGivenDonations);

  // console.log(donationsLeftPercentage, donationsGivenPercentage);
  // const 

  // const donationsLeftPercentageRounded = Math.round(donationsLeftPercentage);
  // const donationsGivenPercentageRounded = Math.round(donationsGivenPercentage);
  


  // const data = [
  //   { name: "Group A", value: 400 },
  //   { name: "Group B", value: 300 },
  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 },
  //   { name: "Group E", value: 278 },
  //   { name: "Group F", value: 189 },
  // ];

  const data1 = [
    { name: "Total Donations", value: donationsLeftPercentage },
    { name: "Your Donations", value: donationsGivenPercentage },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h1>Total Donations: {allDonationsData.length}</h1>
      <h1>You Donate: {storedDonationsData.length}</h1> */}

      <PieChart width={1000} height={400}>
        {/* <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
        /> */}

        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data1}
          cx={490}
          cy={200}
          outerRadius={150}
          label={renderCustomizedLabel}
          labelLine={false}
          fill="#8884d8"
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" barSize={50} fill="#8884d8" />
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />

      </PieChart>
    </div>
  );
};

export default Statistics;
