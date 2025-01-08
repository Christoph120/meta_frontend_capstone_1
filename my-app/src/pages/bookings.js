import BookingForm from "./components/BookingForm.js";
import { useState } from "react";
import { useEffect } from "react";

const Bookings = () => {

const [data, setData] = useState([]);

//API is not working cannot check availability
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