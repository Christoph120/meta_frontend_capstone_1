import {useState} from "react"; 
  
function BookingForm() { 
    const [Date, setDate] = useState(""); 
    const [Time, setTime] = useState("17:00"); 
    const [NumberOfGuests, setNumberOfGuests] = useState("1"); 
    const [Occasion, setOccasion] = useState("");


const getIsFormValid = () => { 
    return ( 
        Date && 
        Time && 
        NumberOfGuests
    ); 
}; 

const clearForm = () => { 
    setDate(""); 
    setTime(""); 
    setNumberOfGuests(""); 
}; 

const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Table booked."); 
    clearForm(); 
}; 
 
return ( 
    <div className="Form"> 
        <form onSubmit={handleSubmit}> 
        <fieldset> 
        <h2>Book a table</h2> 
        <div className="Field"> 
            <label> 
                Date
            </label>
            <br></br> 
            <input 
                value={Date} 
                onChange={(e) => { 
                setDate(e.target.value); 
                }} 
                placeholder="01/01/2024" 
            /> 
        </div>
        <br></br>
        <div className="Field"> 
            <label>Time</label>
            <br></br> 
            <select value={Time} onChange={(e) => setTime(e.target.value)}> 
            <option value="17:00">17:00</option> 
            <option value="18:00">18:00</option> 
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option> 
            <option value="21:00">21:00</option> 
            <option value="22:00">22:00</option>  
            </select> 
        </div>
        <br></br> 
        <div className="Field"> 
            <label> 
                Number of Guests
            </label>
            <br></br> 
            <select value={NumberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)}> 
            <option value="1">1</option> 
            <option value="2">2</option> 
            <option value="3">3</option>
            <option value="4">4</option> 
            <option value="5">5</option> 
            <option value="6">6</option>  
            </select> 
        </div>
        <br></br> 
        <div className="Field"> 
            <label> 
                Occasion
            </label>
            <br></br> 
            <select value={Occasion} onChange={(e) => setOccasion(e.target.value)}> 
            <option value="">-</option> 
            <option value="Birthday">Birthday</option> 
            <option value="Anniversary">Anniversary</option> 
            </select> 
        </div>
        <br></br> 
        <button type="submit" disabled={!getIsFormValid()}> 
            Submit 
        </button> 
        </fieldset> 
        </form> 
    </div> 
); 
} 

export default BookingForm; 