import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
  const navigation = useNavigation();

  return (
    <div>
      {/* <h1>Main Layout</h1> */}
      <Navbar></Navbar>
      <Outlet></Outlet>


      {/* <div className="">
        {
            navigation.state === 'loading' ?
            <div className="">
                <span className="loading loading-ring loading-lg"></span>
            </div>
            :
            <Outlet></Outlet>
        }
      </div> */}

    </div>
  );
};

export default MainLayouts;
