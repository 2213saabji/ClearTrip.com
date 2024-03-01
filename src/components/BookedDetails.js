import React, { useEffect, useMemo, useState } from 'react'

export default function BookedDetails() {
    const [bookedshow, setbookedshow] = useState("flights");
    const [bookeddata, setbookeddata] = useState();

    const fetchbookeddata = useMemo(async () => {
        try {
            const response = await (await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/booking/`,
                {
                    method: "GET",
                    headers: {
                        projectID: "mhroh2oic5sz",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            )).json();
            setbookeddata(response.data);
            console.log(response.data)
        } catch (error) {
            alert(error);
        }
    }, [])
    useEffect(() => {
        fetchbookeddata;
    })
    function visiblebooked(val) {
        setbookedshow(val);
    }
    return (
        <div>
            {bookeddata &&
        <div>
            <div className={`flex g10`}><p onClick={() => { visiblebooked("flights") }}>Flights</p><p onClick={() => { visiblebooked("hotels") }}>Hotels</p></div>
            {bookedshow == "flights" &&
                <div className={`flex flexc g10`}>
                    {bookeddata.map((item, index) =>( item.flight &&(
                        <div>
                           <p>flightbooking date :</p><p>{item.created_at}</p>
                        </div>
                    )))}
                </div>
                }

            {bookedshow == "hotels" && <div className={`flex flexc g10`}>
                    {bookeddata.map((item, index) =>( item.hotel &&(
                        <div className={`flex flexc g10`}>
                           <p>hotel booking date :</p><p>{item.created_at}</p>
                        </div>
                    )))}
                </div>}
        </div>
}
        </div>
    )
}
