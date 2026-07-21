import React, { useState } from "react";

function Trip() {
  const [tripType, setTripType] = useState("one-way");

  const today = new Date().toISOString().split("T")[0];
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(today);
  console.log("retrun", returnDate);

  const valid =
    tripType === "one-way"
      ? departureDate !== ""
      : departureDate !== "" &&
        returnDate !== "" && new Date(returnDate) >= new Date(departureDate);

  const submit = () => {
    if (!valid) return;

    if (tripType === "one-way") {
      alert(`You have booked a departure flight on ${departureDate}`);
    } else {
      alert(
        `You have booked a departure flight on ${departureDate} and a return flight on ${returnDate}`,
      );
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Flight Booking management System</h1>

        <div className="container">
          <div className="trip-detail">
            <label className="label-trip">Trip Type</label>
            <select
              className="select"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <option value="one-way" className="select-option">
                One-way
              </option>
              <option value="return">Return</option>
            </select>
          </div>

          <div className="group">
            <label> Departure Date</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              min={today}
            />
          </div>

          <div className="group">
            <label>Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={today}
              disabled={tripType === "one-way"}
            />
          </div>

          <button onClick={submit} disabled={!valid}>
            Book Flight
          </button>
        </div>
      </div>
    </>
  );
}

export default Trip;
