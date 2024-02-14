import React, { useState, useRef } from 'react'
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import "../styles/PaymentBooking.css"

export default function PaymentBooking() {
  const checkboxRef = useRef();
  const inputfill = useRef([]);
  const upiinput=useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let FirstName = JSON.parse(searchParams.get("FirstName"));
  let Email = JSON.parse(searchParams.get("Email"));
  let amount = searchParams.get("amount");
  const [termserror,settermserror]=useState(false)
  const [upierror,setupierror]=useState(false)
  const [debiterror,setdebiterror]=useState(false);



  const [donepayment, setdonepayment] = useState(false);
  const [pop, setpop] = useState({ "UPI": true });
  function popp(key) {
    setpop({});
    setpop((prev) => ({ ...prev, [key]: true }))
  }
  function termscheck(){
      settermserror(false);
  }
  function outlineremoval(key){
    inputfill[key].style.outline="none";
    setdebiterror(false);
  }
  function paymentdone() {
    if (checkboxRef.current.checked) {
      if (pop["UPI"]) {
        if(upiinput.current.value==""){
          upiinput.current.style.outline=`0.5px solid red`
          setupierror(true);
        }
        else{
          setdonepayment(true);
          navigatelast();
        }
      }
      else {
        let bool=true
        Object.keys(inputfill).forEach(item => {
          if(inputfill[item].value==""){
            inputfill[item].style.outline=`0.5px solid red`;
           setdebiterror(true);
           bool=false
          }
        })
        if(bool){
          setdonepayment(true);
          navigatelast();
        }
      }
    }
    else {
      settermserror(true);
    }
  }
  function navigatelast() {
    setTimeout(() => {
      navigate("/");
    }, 7000)
  }

  return (
    <div className='paymentbooking'>
      <nav className=' flexa'>
      <NavLink to='/'>
        <svg width="107" height="24" viewBox="0 0 310 65" fill="none" className=" c-pointer" ><path d="M249.469 16.3906C243.189 16.3906 240.039 19.1706 240.039 25.4606V49.1506H247.469V25.8206C247.469 23.7506 248.399 22.7506 250.539 22.7506H257.039V16.3906H249.469V16.3906Z" fill="#FF4F17"></path><path d="M264.891 1.59961C262.461 1.59961 260.461 3.59961 260.461 6.09961C260.461 8.59961 262.461 10.5296 264.891 10.5296C267.321 10.5296 269.391 8.52961 269.391 6.09961C269.391 3.66961 267.391 1.59961 264.891 1.59961Z" fill="#FF4F17"></path><path d="M268.61 16.2402H261.25V49.0902H268.61V16.2402Z" fill="#FF4F17"></path><path d="M121.289 42.8804C119.149 42.8804 118.219 42.3104 118.219 40.1704V1.65039H110.789V40.1704C110.789 46.6704 114.429 49.2404 120.139 49.2404H124.069V42.8804H121.289V42.8804Z" fill="#FF4F17"></path><path d="M209.119 16.2695C202.839 16.2695 199.689 19.0495 199.689 25.3395V49.1195H207.119V25.6995C207.119 23.6295 208.049 22.6295 210.189 22.6295H216.689V16.2695H209.119Z" fill="#FF4F17"></path><path d="M228.33 16.2998V8.08984H220.9V40.0798C220.9 46.2898 224.11 49.1498 230.33 49.1498H235.9V42.7898H231.4C229.4 42.7898 228.33 42.0798 228.33 40.0798V22.6598H235.9V16.2998H228.33V16.2998Z" fill="#FF4F17"></path><path d="M274.82 16.5006V63.3706H282.25V46.3006C284.91 48.1406 288.13 49.2306 291.6 49.2306C300.67 49.2306 308.02 41.8806 308.02 32.8106C308.02 23.7406 300.67 16.3906 291.6 16.3906C288.12 16.3906 284.9 17.4806 282.25 19.3206V16.5006H274.82V16.5006ZM282.25 32.8106C282.25 27.6406 286.44 23.4606 291.6 23.4606C296.76 23.4606 300.95 27.6506 300.95 32.8106C300.95 37.9706 296.76 42.1606 291.6 42.1606C286.44 42.1606 282.25 37.9706 282.25 32.8106V32.8106Z" fill="#FF4F17"></path><path d="M156.92 32.1006C156.92 22.1006 150.21 16.3906 141.42 16.3906C131.57 16.3906 125.5 23.2506 125.5 32.7406C125.5 42.2306 132.21 49.2406 141.57 49.2406C149.85 49.2406 154.21 45.5306 156.28 39.3906H148.28C147.07 41.7506 144.78 42.8206 141.42 42.8206C136.99 42.8206 133.35 40.0406 133.07 35.0406H156.78C156.92 33.4706 156.92 32.7506 156.92 32.1106V32.1006ZM133.14 29.7406C133.78 25.3806 136.85 22.7406 141.64 22.7406C146.43 22.7406 149.07 25.2406 149.49 29.7406H133.14Z" fill="#FF4F17"></path><path d="M98.8005 37.9506C97.5905 41.3806 95.3005 42.8106 91.8705 42.8106C86.2305 42.8106 83.8005 38.3806 83.8005 32.7406C83.8005 27.1006 86.5805 22.7406 92.0105 22.7406C95.4405 22.7406 97.7205 24.5306 98.7905 27.6006H106.72C104.86 20.1006 99.2905 16.3906 91.8705 16.3906C81.8705 16.3906 76.2305 23.5306 76.2305 32.7406C76.2305 42.7406 82.8705 49.2406 91.8705 49.2406C100.87 49.2406 105.22 44.1706 106.72 37.9606H98.7905L98.8005 37.9506Z" fill="#FF4F17"></path><path d="M56.6095 17.7393C44.1095 26.8793 33.3295 38.8793 23.6895 48.9493C22.9795 49.6593 22.0495 50.1593 21.0495 50.1593C19.8395 50.1593 18.9095 49.4493 18.0495 48.1593C15.5495 44.4493 11.7695 35.4493 10.0495 31.5193C8.68954 28.3093 9.40954 25.6593 12.6195 24.3093C15.8295 23.0193 19.3995 22.8093 20.2595 26.4493C20.2595 26.4493 21.8995 32.8093 22.3995 34.6593C32.3295 25.4493 44.5395 15.6693 54.8895 9.66929C52.3195 4.80929 47.2495 1.5293 41.4695 1.5293H16.9795C8.54954 1.5293 1.76953 8.30929 1.76953 16.6693V41.2293C1.76953 49.5793 8.54954 56.3693 16.9795 56.3693H41.4695C49.8195 56.3693 56.6095 49.5893 56.6095 41.2293V17.7393V17.7393Z" fill="#FF4F17"></path><path d="M186.059 16.5006V19.3206C183.399 17.4806 180.179 16.3906 176.709 16.3906C167.639 16.3906 160.289 23.7406 160.289 32.8106C160.289 41.8806 167.639 49.2306 176.709 49.2306C180.189 49.2306 183.409 48.1406 186.059 46.3006V49.0906H193.489V16.5006H186.059ZM176.709 42.1606C171.539 42.1606 167.359 37.9706 167.359 32.8106C167.359 27.6506 171.549 23.4606 176.709 23.4606C181.869 23.4606 186.059 27.6506 186.059 32.8106C186.059 37.9706 181.869 42.1606 176.709 42.1606Z" fill="#FF4F17"></path></svg>
      </NavLink>
      </nav>
      <div className={`paymentbookingMaindiv flexja ${donepayment ? "colordiv" : ""}`}>
        {!donepayment &&
          <div className='paymentCardouter flex flexc g10'>
            <h2>Pay to complete your booking</h2>
            <div className='paymentbookingcard flexa'>
              <div className='paymentcarddiv1 flex flexc g10'>
                <div className={`selectorcardpayment ${pop["UPI"] ? "colorselectorpayment" : ""}`} onClick={() => popp("UPI")}>UPI</div>
                <div className={`selectorcardpayment ${pop["Debit"] ? "colorselectorpayment" : ""}`} onClick={() => popp("Debit")}>Debit/Credit card</div>
              </div>
              {pop["UPI"] &&
                <div className='paymentcarddiv1result flex flexjsb'>
                  <div className='paymentcarddiv2 flex flexc g10'>
                    <h3>Enter UPI ID</h3>
                    <input type='text' ref={upiinput} placeholder='Enter your UPI ID' onChange={()=>{setupierror(false);upiinput.current.style.outline=`none`}}></input>
                    {upierror && <span>Please enter a valid UPI ID</span>}
                    <p>Payment request will be sent to the phone no. linked to your UPI ID</p>
                  </div>
                  <div className='paymentcarddiv3 flexja flexc g10'><div className='linevertical'></div><p>OR</p><div className='linevertical'></div></div>
                  <div className='paymentcarddiv4 flexa flexc g20'>
                    <h3>SCAN QR CODE</h3>
                    <div className='qrcodepayment'></div>
                  </div>
                </div>
              }
              {pop["Debit"] &&
                <div className='paymentcarddiv5 flex flexc g10'>
                  <h3>Enter card details</h3>
                  <label>Card number</label>
                  <input ref={(e) => { inputfill[0] = e }} type='number' placeholder='Enter card number' onChange={()=>{outlineremoval(0)}}></input>
                  <label>Expiry date</label>
                  <div className='flexa g20'>
                    <input ref={(e) => { inputfill[1] = e }} className='expirydate' type='number' placeholder='Month' onChange={()=>{outlineremoval(1)}}></input>
                    <input ref={(e) => { inputfill[2] = e }} className='expirydate' type='number' placeholder='Year' onChange={()=>{outlineremoval(2)}}></input>
                  </div>
                  <label>Card holder name</label>
                  <input ref={(e) => { inputfill[3] = e }} type='text' placeholder='Name as on card' onChange={()=>{outlineremoval(3)}}></input>
                  <label>CVV</label>
                  <input ref={(e) => { inputfill[4] = e }} className='cvvinput' type='number' placeholder='CVV' onChange={()=>{outlineremoval(4)}}></input>
                  { debiterror && <span>Please enter all details correctly</span>}
                </div>
              }
            </div>
            <div className='paymentpolichecker flexa g10'>
              <input type='checkbox' ref={checkboxRef} onClick={()=>{termscheck()}} />
              <p>
                <p>I understand and agree to the rules and restrictions of this fare, the booking policy, the privacy policy and the terms and conditions of Cleartrip and confirm address details entered are correct</p>
                {termserror && <span>Please accept the terms and consitions to proceed with this booking</span>}
              </p>
              <div>
                <h2>₹{amount}</h2>
                <p>Total, inclusive of all taxes</p>
              </div>
            </div>
            <button className='paybuttonpayment' onClick={() => { paymentdone() }}>Pay now</button>
          </div>
        }
        {donepayment &&
          <div className='backgroundwhite flexja g20 flexc'>
            <p>{FirstName} ({Email})</p>
            <p>Your Payment is Done</p>
          </div>
        }
      </div>
    </div>
  )
}
