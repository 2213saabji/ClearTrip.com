import {useEffect, useState} from 'react';
import { BrowserRouter as Router,Routes,Route,useParams} from "react-router-dom";
import Flights from "./Flights";
import Navbar from "./Navbar";
import Hotels from "./Hotels";
import Flightsresult from "./FlightsResult";
import HotelsResult from "./HotelsResult";
import FlightInfo from "./FlightInfo";
import ContextAllDataProvider from './ContextAllData';
import PaymentBooking from './PaymentBooking';
import HotelsCardInfo from './HotelsCardInfo';
import Hotelpayment from '../SmallComp/Hotelpayment';
import Errorpage from './Errorpage';
import BookedDetails from './BookedDetails';

// ----------------------------------All Routes----------------------------------------
function App() {
  
  return (
  <div className="App">
    <ContextAllDataProvider>
    <Router> 

      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Flights/>}/>
        <Route path="/flights"  element={<Flights/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/bookeddetails" element={<BookedDetails/>}/>
        </Route>
        <Route path="/flights/:results" element={<Flightsresult/>}/>
        <Route path="/hotels/:results" element={<HotelsResult/>}/>
        <Route path="/flights/results/:Info" element={<FlightInfo/>}/>
        <Route path="/flights/results/flightInfo/:paymentBooking" element={<PaymentBooking/>}/>
        <Route path="/hotels/results/:hotelInfo" element={<HotelsCardInfo/>}/>
        <Route path="/hotels/results/hotelInfo/:info" element={<Hotelpayment/>}/>
        <Route path="/hotels/results/hotelInfo/Info/:paymentBooking" element={<PaymentBooking/>}/>
        <Route path='/under-maintainance' element={<Errorpage/>}/>
      </Routes>
    </Router>
    </ContextAllDataProvider>
  </div>
  )
}

export default App;


