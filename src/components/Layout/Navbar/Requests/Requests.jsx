import React from "react";
// import { Link } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import { Modal } from "react-bootstrap";

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

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="s"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-0"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Engineer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <form>
              <div className="row g-3 px-3 add-form">
                <div className="col-12 py-2">
                  <input
                    type="text"
                    className="form-control shadow"
                    placeholder="User name"
                    aria-label="User name"
                  />
                </div>
                <div className="col-12 py-2">
                  <input
                    type="email"
                    className="form-control shadow"
                    placeholder="E-mail"
                    aria-label="E-mail"
                  />
                </div>
                <div className="col-12 py-2">
                  <input
                    type="text"
                    className="form-control shadow"
                    placeholder="Password"
                    aria-label="Last name"
                  />
                </div>
                <div className="col-12 py-2">
                  <input
                    type="number"
                    className="form-control shadow"
                    placeholder="Phone"
                    aria-label="Phone"
                  />
                </div>
                <div class="col-6 py-2"> 
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                    />
                    <label class="form-check-label" for="male">
                      Male
                    </label>
                  </div>
                </div>
                <div class="col-6 py-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                    />
                    <label class="form-check-label" for="female">
                      Female
                    </label>
                  </div>
                </div>

                <div className="col-12 py-2">
                  <input
                    type="text"
                    className="form-control shadow"
                    placeholder="City"
                    aria-label="City"
                  />
                </div>
                <div className="col-12 py-2">
                  <label
                    htmlFor="formFile"
                    className="form-label text-muted px-2"
                  >
                    ID:
                  </label>
                  <input
                    className="form-control w-100 shadow"
                    type="file"
                    id="formFile"
                  />
                </div>
                <div className="text-center">
                  <div className="d-grid gap-2 d-md-block p-3">
                    <button
                      className="btn px-4 btn-save mx-3 shadow"
                      type="button"
                      style={{
                        backgroundColor: "#242760",
                        color: "#fff",
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="s"
      aria-labelledby="contained-modal-title-vcenter"
      className="custom-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <form>
              <div className="row g-3 px-3 add-form">
                <div className="col-6 py-2">
                  <input
                    type="text"
                    className="form-control shadow"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-6 py-2">
                  <input
                    type="text"
                    className="form-control shadow"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="col-12 py-2">
                  <input
                    type="email"
                    className="form-control shadow"
                    placeholder="E-mail"
                    aria-label="E-mail"
                  />
                </div>
                <div className="col-12 py-2">
                  <input
                    type="number"
                    className="form-control shadow"
                    placeholder="Phone"
                    aria-label="Phone"
                  />
                </div>
                <div className="col-12 py-2">
                  <input
                    type="text"
                    className="form-control shadow"
                    placeholder="City"
                    aria-label="City"
                  />
                </div>
                <div className="col-12 py-2">
                  <label
                    htmlFor="formFile"
                    className="form-label text-muted px-2"
                  >
                    ID:
                  </label>
                  <input
                    className="form-control w-100 shadow"
                    type="file"
                    id="formFile"
                  />
                </div>
                <div className="text-center">
                  <div className="d-grid gap-2 d-md-block p-3">
                    <button
                      className="btn px-4 btn-save mx-3 shadow"
                      type="button"
                      style={{
                        backgroundColor: "#242760",
                        color: "#fff",
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function Requests() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div>
      <div className="request-part ">
        <div className="container  p-5">
          <div className="main-sec">
            {/* <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
            </div> */}
            <div className="row mt-3 g-5">
              <div className="col-lg-3 col-md-6">
                <div className="card border-left-warning shadow   py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs h5 font-weight-bold text-uppercase ">
                          New Requests
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-comments fa-2x text-gray-300 io"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
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
              <div className="col-lg-3 col-md-6">
                <div className="card border-left-success shadow py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs h5 font-weight-bold text-uppercase mb-1">
                          Add Engineer
                        </div>
                      </div>
                      <div className="col-auto">
                        <button
                          className="io bg-white"
                          onClick={() => setModalShow2(true)}
                        >
                          <i className="fa-solid fa-circle-plus fa-2x "></i>
                        </button>
                        <MyVerticallyCenteredModal2
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* {showForm && (
                <div className="add-engineer-sec mt-5">
                  <div className="container">
                    <div className="add-engineer bg-white shadow m-auto py-5">
                      <div className="d-flex justify-content-between px-4">
                        <h3 className=" ">Add Engineer</h3>
                        <button onClick={handleIconClick}>
                          <i className="fa-solid fa-xmark "></i>
                        </button>
                      </div>

                      <div className="row g-3 px-3 add-form">
                        <div className="col-6 py-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            aria-label="First name"
                          />
                        </div>
                        <div className="col-6 py-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            aria-label="Last name"
                          />
                        </div>
                        <div className="col-12 py-2">
                          <input
                            type="E-mail"
                            className="form-control"
                            placeholder="E-mail"
                            aria-label="E-mail"
                          />
                        </div>
                        <div className="col-12 py-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Last name"
                          />
                        </div>
                        <div className="col-12 py-2">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Phone"
                            aria-label="Phone"
                          />
                        </div>
                        <div className="col-12 py-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            aria-label="Last name"
                          />
                        </div>
                        <div className="col-12 py-2">
                          <label
                            for="formFile"
                            className="form-label text-muted px-2"
                          >
                            ID:
                          </label>
                          <input
                            className="form-control w-100"
                            type="file"
                            id="formFile"
                          />
                        </div>

                        <div className="text-center">
                          <div className="d-grid gap-2 d-md-block p-3">
                            <button
                              className="btn px-4 btn-req1 mx-3"
                              type="button"
                            >
                              Save
                            </button>
                            <button
                              className="btn px-4 btn-req2 mx-3"
                              type="button"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
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
                        <button
                          className="io bg-white"
                          onClick={() => setModalShow(true)}
                        >
                          <i className="fa-solid fa-circle-plus fa-2x "></i>
                        </button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4" style={{ height: "50vh" }}>
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
                <div className="card shadow mb-1" style={{ height: "50vh" }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
