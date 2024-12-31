import React from "react";
import { FaTruck, FaTools, FaWrench, FaRoad, FaMotorcycle, FaTruckMonster, FaCarCrash, FaWarehouse } from "react-icons/fa";

function Service() {
  const serviceColumns = [
    [
      { name: "LIGHT DUTY TOWING & RECOVERY", icon: <FaTruck /> },
      { name: "WINCH OUTS", icon: <FaTools /> },
      { name: "ROADSIDE ASSISTANCE", icon: <FaRoad /> },
    ],
    [
      { name: "MEDIUM DUTY TOWING & RECOVERY", icon: <FaTruck /> },
      { name: "EQUIPMENT HAULING", icon: <FaWrench /> },
      { name: "MOTORCYCLE TOWING", icon: <FaMotorcycle /> },
    ],
    [
      { name: "HEAVY DUTY TOWING & TRANSPORT", icon: <FaTruckMonster /> },
      { name: "ROTATOR & RECOVERY", icon: <FaCarCrash /> },
      { name: "SPECIALIZED TRANSPORT", icon: <FaWarehouse /> },
    ],
    [
      { name: "EXTREME OFFROAD RECOVERY", icon: <FaTruckMonster /> },
      { name: "POLICE TOWING & IMPOUND", icon: <FaCarCrash /> },
      { name: "FORKLIFT SERVICE", icon: <FaTools /> },
    ],
  ];

  return (
    <>
      <div
        className="py-4"
        style={{
          background:
            "url(https://thumbs.dreamstime.com/b/minimalist-white-diagonal-lines-light-grey-background-abstract-aig-geometric-design-image-d-rendering-artwork-shape-336917195.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          boxShadow: "inset 0px 0px 1500px 1000px #e3e2e2bf",
        }}
      >
        <div className="container-lg my-5">
          <div className="about-section justify-content-center">
            <div className="line" style={{ color: "rgb(90, 113, 124)", borderBlockColor: "rgb(90, 113, 124)" }}></div>
            <span style={{ color: "rgb(90, 113, 124)" }}>OUR SERVICES</span>
          </div>
          <h1 className="Discover text-dark py-2 text-center">What We Are Serving</h1>
          <div className="d-flex justify-content-center flex-wrap">
            {serviceColumns.map((column, Index) => (
              <div key={Index} className={`servicesec servnum${Index}`}>
                {column.map((item, i) => (
                  <div key={i} className="servmain my-md-1 my-3">
                    <div className="servicebg text-center">
                      <div className="servicebox">
                        <p className="servicetext">
                          <span className="fs-5">{item.icon}</span>
                          <br />
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
