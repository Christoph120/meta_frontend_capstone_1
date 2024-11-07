import BookingForm from "./components/BookingForm.js";
import { useState } from "react";
import { useEffect } from "react";

const Bookings = () => {

//API is not working, not my problem ¯\_(ツ)_/¯
// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
//     .then((response) => response.json())
//     .then((jsonData) => setData(jsonData))
//     .catch((error) => console.error("Error fetching data:", error));
// }, []);

  return (
      <>
          <BookingForm />
      </>
  );
};

export default Bookings;