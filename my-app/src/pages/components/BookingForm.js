import {useState} from "react";
import {useNavigate} from "react-router-dom";
  
function BookingForm() { 
    const [DateDay, setDateDay] = useState("");
    const [DateMonth, setDateMonth] = useState(""); 
    const [Time, setTime] = useState(""); 
    const [NumberOfGuests, setNumberOfGuests] = useState("1"); 
    const [Occasion, setOccasion] = useState("");

    const navigate = useNavigate();


const getIsFormValid = () => { 
    return ( 
        DateDay &&
        DateMonth && 
        Time && 
        NumberOfGuests
    ); 
}; 

const clearForm = () => { 
    setDateDay("");
    setDateMonth(""); 
    setTime(""); 
    setNumberOfGuests(""); 
}; 

const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Table booked successfully."); 
    clearForm();
    navigate("/success");
}; 

return ( 
    <div className="Form"> 
        <form onSubmit={handleSubmit}> 
        <fieldset> 
        <h2>Book a table</h2> 
        <div className="Field"> 
            <label> 
                Day
            </label>
            <br></br> 
            <select value={DateDay} onChange={(e) => setDateDay(e.target.value)}>
            <option value="">-</option> 
            <option value="1">01</option> 
            <option value="2">02</option>
            <option value="3">03</option> 
            <option value="4">04</option> 
            <option value="5">05</option>
            <option value="6">06</option> 
            <option value="7">07</option> 
            <option value="8">08</option>
            <option value="9">09</option> 
            <option value="10">10</option>
            <option value="11">11</option>   
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            </select>
        </div>
        <br></br>
        <div className="Field"> 
            <label> 
                Month
            </label>
            <br></br> 
            <select value={DateMonth} onChange={(e) => setDateMonth(e.target.value)}>
            <option value="">-</option> 
            <option value="1">01</option> 
            <option value="2">02</option>
            <option value="3">03</option> 
            <option value="4">04</option> 
            <option value="5">05</option>
            <option value="6">06</option> 
            <option value="7">07</option> 
            <option value="8">08</option>
            <option value="9">09</option> 
            <option value="10">10</option>
            <option value="11">11</option>   
            <option value="12">12</option>
            </select>
        </div>
        <br></br>
        <div className="Field"> 
            <label>Time</label>
            <br></br> 
            <select value={Time} onChange={(e) => setTime(e.target.value)}>
            <option value="">-</option> 
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