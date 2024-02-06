import React from "react";
import { Link } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import './Requests.module.scss'

const cat = [
  {
    id: "elixir",
    label: "elixir",
    value: 244,
    color: "hsl(270, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 206,
    color: "hsl(77, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 145,
    color: "hsl(22, 70%, 50%)",
  },
];

const data = [
  {
    country: "AD",
    "hot dog": 31,
    "hot dogColor": "hsl(278, 70%, 50%)",
    burger: 19,
    burgerColor: "hsl(39, 70%, 50%)",
   
  },
  {
    country: "AE",
    "hot dog": 194,
    "hot dogColor": "hsl(109, 70%, 50%)",
    burger: 128,
    burgerColor: "hsl(272, 70%, 50%)",
  
  },
  {
    country: "AF",
    "hot dog": 156,
    "hot dogColor": "hsl(207, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(119, 70%, 50%)",
 
 
  },
  {
    country: "AG",
    "hot dog": 124,
    "hot dogColor": "hsl(153, 70%, 50%)",
    burger: 88,
    burgerColor: "hsl(43, 70%, 50%)",
  
  },
  {
    country: "AI",
    "hot dog": 136,
    "hot dogColor": "hsl(84, 70%, 50%)",
    burger: 157,
    burgerColor: "hsl(256, 70%, 50%)",
  
  },
  {
    country: "AL",
    "hot dog": 170,
    "hot dogColor": "hsl(272, 70%, 50%)",
    burger: 180,
    burgerColor: "hsl(284, 70%, 50%)",
  
  },
  {
    country: "AM",
    "hot dog": 131,
    "hot dogColor": "hsl(17, 70%, 50%)",
    burger: 145,
    burgerColor: "hsl(96, 70%, 50%)",
  },
];

export default function Requests() {
  return (
    <div>
      {" "}
      <div className="request-part py-5 mt-5 ">
        <divc className="container">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <Link
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </Link>
          </div>
         <div className="row mt-3 g-4">
           <div className="col-lg-4 col-md-6 ">
             <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs h5 font-weight-bold text-success text-uppercase mb-1">
                        Pending Requests
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                   <div className="d-grid gap-2 d-md-block p-3 text-center">
                    <button type="button" className="btn btn-info btn-lg">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <div className="col-lg-4 col-md-6 ">
             <div className="card border-left-success shadow h-100 py-2">
               <div className="card-body">
                 <div className="row no-gutters align-items-center">
                   <div className="col mr-2">
                     <div className="text-xs h5 font-weight-bold text-success text-uppercase mb-1">
                          Add stores
                      </div>
                     <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18,000
                      </div>
                    </div>
                   <div className="col-auto">
                      <i className="fa-solid fa-circle-plus fa-2x text-gray-300"></i>
                    </div>
                   <div className="d-grid gap-2 d-md-block p-3 text-center">
                    <button type="button" className="btn btn-info btn-lg">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <div className="col-lg-4 col-md-6 ">
             <div className="card border-left-success shadow h-100 py-2">
               <div className="card-body">
                 <div className="row no-gutters align-items-center">
                   <div className="col mr-2">
                     <div className="text-xs h5 font-weight-bold text-success text-uppercase mb-1">
                          Add Engineer
                      </div>
                     <div className="h5 mb-0 font-weight-bold text-gray-800">
                        215,000
                      </div>
                    </div>
                   <div className="col-auto">
                      <i className="fa-solid fa-circle-plus fa-2x text-gray-300"></i>
                    </div>
                   <div className="d-grid gap-2 d-md-block p-3 text-center">
                    <button type="button" className="btn btn-info btn-lg">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <div className="col-xl-8 col-lg-7">
             <div className="card shadow mb-4" style={{ height: "75vh" }}>
                <ResponsiveBar
                  data={data}
                  keys={["hot dog", "burger", "sandwich"]}
                  indexBy="country"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={{ scheme: "paired" }}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "#38bcb2",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "#eed312",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: "fries",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "sandwich",
                      },
                      id: "lines",
                    },
                  ]}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", "1.9"]],
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "country",
                    legendPosition: "middle",
                    legendOffset: 32,
                    truncateTickAt: 0,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "food",
                    legendPosition: "middle",
                    legendOffset: -40,
                    truncateTickAt: 0,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                  legends={[
                    {
                      dataFrom: "keys",
                      anchor: "bottom-right",
                      direction: "column",
                      justify: false,
                      translateX: 120,
                      translateY: 14,
                      itemsSpacing: 2,
                      itemWidth: 91,
                      itemHeight: 22,
                      itemDirection: "left-to-right",
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                  role="application"
                  ariaLabel="Nivo bar chart demo"
                  barAriaLabel={(e) =>
                    e.id +
                    ": " +
                    e.formattedValue +
                    " in country: " +
                    e.indexValue
                  }
                />
              </div>
            </div>
           <div className="col-xl-4 col-lg-7">
             <div className="card shadow mb-1" style={{ height: "400px" }}>
                <ResponsivePie
                  data={cat}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: "paired" }}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                  }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: "ruby",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "c",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "go",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "python",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "scala",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "lisp",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "elixir",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "javascript",
                      },
                      id: "lines",
                    },
                  ]}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: "#999",
                      itemDirection: "left-to-right",
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: "circle",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: "#000",
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </divc>
      </div>
    </div>
  );
}
