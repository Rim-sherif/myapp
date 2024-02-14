import React from "react";
import { Link } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import "./Requests.module.scss";

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
      <div className="request-part bg-light ">
        <div className="container bg-white p-5">
          <div className="main-sec">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
            </div>
            <div className="row mt-3 g-5">
              <div className="col-lg-3 col-md-6">
                <div className="card border-left-warning shadow   py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs h5 font-weight-bold text-uppercase ">
                          Pending Requests
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300 io"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <div className="card border-left-success shadow  py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs h5 font-weight-bold  text-uppercase mb-1">
                          Generate Report
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-download fa-2x  io"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <div className="card border-left-success shadow py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs h5 font-weight-bold  text-uppercase mb-1">
                          Add Engineer
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link to="AddEngineer">
                          <i className="fa-solid fa-circle-plus fa-2x text-gray-300 io"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <div className="card  shadow border-left-success shadow  py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs h5 font-weight-bold  text-uppercase mb-1">
                          Add store
                        </div>
                      </div>
                      <div className="col-auto">
                        <Link to="AddStore">
                          <i className="fa-solid fa-circle-plus fa-2x text-gray-300 io"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="card shadow  h-100 border-start-lg border-start-primary">
                  <div class="card-body">
                    <div class="small text-muted">Current monthly bill</div>
                    <div class="h3">$20.00</div>
                    <a class="text-arrow-icon small" href="#!">
                      Switch to yearly billing
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-right"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card shadow h-100 border-start-lg border-start-secondary">
                  <div class="card-body">
                    <div class="small text-muted">Next payment due</div>
                    <div class="h3">July 15</div>
                    <a class="text-arrow-icon small text-secondary" href="#!">
                      View payment history
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-right"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card shadow  h-100 border-start-lg border-start-success">
                  <div class="card-body">
                    <div class="small text-muted">Current plan</div>
                    <div class="h3 d-flex align-items-center">Freelancer</div>
                    <a class="text-arrow-icon small text-success" href="#!">
                      Upgrade plan
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-arrow-right"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4" style={{ height: "70vh" }}>
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
                <div className="card shadow mb-1" style={{ height: "70vh" }}>
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
              <div className="col-xl-12 col-lg-7">
                <div className="table-responsive card shadow mb-1" style={{ height: "60vh" }}>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User Profile</th>
                        <th>User Name</th>
                        <th>SignUP</th>
                        <th>Posts</th>
                        <th>Order Detail</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <tr className="table-row">
                        <td>1</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                            className="rounded-circle "
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Romani capl</td>
                        <td>15/3/2023</td>
                        <td>10</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            className="rounded-circle shadow-4"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>David Androw</td>
                        <td>30/2/2024</td>
                        <td>4</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr className="success">
                        <td>5</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            className="rounded-circle"
                            style={{ width: "40px" }}
                            alt="Avatar"
                          />
                        </td>
                        <td>Alex John</td>
                        <td>2/2/2022</td>
                        <td>15</td>
                        <td>
                          <button type="button" className="btn  info-btn">
                            Info
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}