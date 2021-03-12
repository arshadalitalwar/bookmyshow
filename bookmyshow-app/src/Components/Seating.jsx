import React from "react";
import "./Seating.css";
import { rows, rows2 } from "./data";
const Silver = ["A", "B", "C", "D"];
const ticketList = {
  silver: [],
  platinium: [],
  price: 0,
};
const Seating = ({
  seatingActive = true,
  movie_name = "Tom And Jerry",
  location = "INOX: Neelyog, Ghatkopar E",
  timeAndDate = "Tomorrow, 12 Mar, 10:30 AM",
  type1 = "SILVER",
  type2 = "Premium",
  ticketPrice1 = 112,
  ticketPrice2 = 100,
  ticketListfunc,
}) => {
  const [seatActive, setSeatActive] = React.useState(seatingActive);
  const [active, setActive] = React.useState(false);
  const [rowsData, setRowData] = React.useState(rows);
  const [rowsData2, setRowData2] = React.useState(rows2);
  const [price, setPrice] = React.useState(0);

  const handleClick = (value) => {
    setRowData(
      rowsData.map((e) =>
        e.id === value ? { ...e, isSelected: !e.isSelected } : e
      )
    );

    setRowData2(
      rowsData2.map((e) =>
        e.id === value ? { ...e, isSelected: !e.isSelected } : e
      )
    );
  };
  React.useEffect(() => {
    let a = rowsData.filter((e) => e.isSelected).length;
    let b = rowsData2.filter((e) => e.isSelected).length;

    setPrice(a * ticketPrice1 + b * ticketPrice2);
    setActive(price > 0 ? true : false);
  }, [price, rowsData, rowsData2]);

  const handleSeat = () => {
    rowsData.forEach((e) =>
      e.isSelected ? ticketList.silver.push(e.seat) : ""
    );
    rowsData2.forEach((e) =>
      e.isSelected ? ticketList.platinium.push(e.seat) : ""
    );
    ticketList.price = price;
    //ticketListfunc(ticketList);
    console.log(ticketList);
    setSeatActive(false);
  };
  return (
    <div
      style={
        seatActive
          ? {
              display: "block",
            }
          : { display: "none" }
      }
      className="seatingModal"
    >
      <div className="seatingModal__nav">
        <div>
          <div>
            <h4>{movie_name}</h4>
            <h5>{location}</h5>
          </div>
          <div>
            <button onClick={() => setSeatActive(false)}>X</button>
          </div>
        </div>
        <div>
          <h5>{timeAndDate}</h5>
        </div>
      </div>
      <div className="seatingModal__seatContainer">
        <div>
          <h5>
            {type1}-Rs. {ticketPrice1}
          </h5>

          <div className="seatingModal__seatContainer_can">
            <div>
              {Silver.map((e) => (
                <div style={{ margin: 20 }} key={e}>
                  {e}
                </div>
              ))}
            </div>
            <div className="seatingModal__seatContainer_seats">
              {rowsData.map((e) => (
                <div
                  onClick={() => handleClick(e.id)}
                  className={
                    e.disable
                      ? "disable"
                      : e.isReserved
                      ? "reserved"
                      : e.isSelected
                      ? "select"
                      : "seats"
                  }
                  key={e.id}
                >
                  <p>{e.number}</p>
                </div>
              ))}
            </div>
          </div>
          <h5>
            {type2}-Rs. {ticketPrice2}
          </h5>
          <div className="seatingModal__seatContainer_can">
            <div>
              {Silver.map((e) => (
                <div style={{ margin: 20 }} key={e}>
                  {e}
                </div>
              ))}
            </div>
            <div className="seatingModal__seatContainer_seats">
              {rowsData2.map((e) => (
                <div
                  onClick={() => handleClick(e.id)}
                  className={
                    e.disable
                      ? "disable"
                      : e.isReserved
                      ? "reserved"
                      : e.isSelected
                      ? "select"
                      : "seats"
                  }
                  key={e.id}
                >
                  <p>{e.number}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="Screen">
            <img src="https://i.imgur.com/XhsTL5Y.png" alt="screen" />
          </div>
        </div>
      </div>
      <div
        style={active ? { display: "block" } : { display: "none" }}
        className="PriceButton"
      >
        <button
          onClick={() => handleSeat()}
          style={{ height: 40, margin: 10, marginLeft: "40%" }}
        >
          Rs. {price}
        </button>
      </div>
    </div>
  );
};

export default Seating;
