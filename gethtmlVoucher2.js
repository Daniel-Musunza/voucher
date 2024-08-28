

const gethtmlVoucher2 = (voucherData) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Holiday Summary</title>
    <style>
    body {
    font-family:'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #E6E6E6;
    z-index: 4;
   font-size: 12px;
}

.main-container {
    /* width: 595px; */
    width: 800px;
    background-color: #ffff;
    margin: 0 auto;
}

.container {
    margin-top: 0;

}

h2,h3{
    font-family: 'VAG Rounded', sans-serif;
}
.hero {


    color: white;
    display: flex;
    position: relative;
    color: black;
    flex-direction: column;
    justify-content: space-between;
}

.hero-part1 {
    height: 70px;
    display: flex;
    position: relative;
    background-color: #DD1A3C;
    color: #fff;
}

.destination-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 72%;
    padding: 20px;
    position: relative;
    transform-origin: top left;
    z-index: 2;
}


.destination-info p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
}

.destination-info h1 {
    margin: 0;
    font-size: 27px;
    font-family: Impact;
    font-weight: 200;
}
.blank-part {
    width: 50%;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    align-items: center;
}



.hero-part2 {
    z-index: 2;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    background-color: #E6EEF4;

}


.references {
    display: flex;

}

.one-reference {
    padding-right: 10px;

}

.one-reference p {
    font-size: 12px;
}

.references p {
    margin: 0;
}

.reference {
    font-weight: bold;
    font-size: 16px!important;
}


.holiday-summary {
    padding: 0 20px 20px 20px;
}

.cost-summary {
    border: 1px solid #E1E1E1;
    margin: 20px 0;
}

.cost-summary h4 {
    padding-left: 0;
    margin-bottom: 15PX;
}

.cost-item,
.total {
  
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
}

.total {
    /* background-color: #E1E8EC; */
    font-weight: bold;
    font-size: 20px;
    /* padding: 15px; */
}

.total p {
    margin: 0;
}

.holiday-details h2 {
    padding-left: 0;
    margin-bottom: 20px;
    font-size: 20px;
}

.holiday-details P {
    font-size: 12px;
}

.flights,
.hotel,
.travel-transfer,
.holiday-guests,
.bags,
.important-info,
.passport,
.contact,
.insurance,
.terms,
.protection,
.your-bags-info
 {
    padding: 20px;
    background-color: white;
    border: 1px solid #E1E1E1;
    margin-bottom: 20px;
}

.flight-info {
    display: flex;
    justify-content: space-between;
}

.vertical-line {
    left: 50%;
    height: 90px;
    width: 2px;
    background-color: #E1E1E1;
}

.flight {
    width: 45%;
    display: flex;
    flex-direction: column;
}

.flight .f-part1 {
    display: flex;
}


.flight .f-part1 i {
    margin-right: 10px;
    color: #DD1A3C;
    font-size: 14px;
}

.flight-date {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;

}

.flight-date .ticket-number {
    margin-top: 10px;
    color: #555;
}

.flight .f-part2 {
    display: flex;
}

.flight-time b,
.flight-time p {
    margin: 5px 0;
    font-size: 12px;

}

.flight-divider {
    text-align: center;
    font-size: 24px;
    color: #999;
    flex: 1;
    margin-right: 10px;

}

.hotel .destination span{
    font-weight: bold;
}

.hotel  .hotel-details p {
    margin: 0;
}
.hotel  .hotel-details{
    display: flex;
    padding: 0;
    margin: 0;
    flex-direction: row;
}

.hotel  .hotel-details .location{
    width: 50%;
    margin-right: 20px;
    display: flex;
    padding-top: 10px;
}

.hotel  .hotel-details .location p{
display: flex;
align-items: center;
}
.hotel  .hotel-details .room-details {
width: 50%;
padding-top: 10px;
}

.hotel  .hotel-details .room-details .guests,
.hotel  .hotel-details .room-details .room div {
    display: flex;
    padding-bottom: 10px;
}
i{
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: #DD1A3C;
}

.travel-transfer-info h3{
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 5px 0;
}
.travel-transfer-info{
    display: flex;
    flex-direction: column;
}
.travel-transfer-info ul{
    padding-left: 15px;
    margin: 10px;
}
.travel-transfer-info ul li {
    font-size: 12px;
    
}

.carbin-bags,
.hold-bags{
    display: flex;
}

.carbin-bags span{

    font-weight: bold;
}

.atol-reference{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
}
    </style>
    <script src="https://kit.fontawesome.com/332a0bbd7c.js" crossorigin="anonymous"></script>

</head>

<body>
    <div class="main-container">
        <div class="container">
            <div class="hero">
                <div class="hero-part1">
                    <div class="destination-info">
                        <h1>YOU ARE GOING ON HOLIDAY</h1>
                    </div>

                    <div class="blank-part">
                        <img src="https://www.itravelholidays.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogowhite.026f8eb9.png&w=256&q=75"
                            alt="" height="30px">
                    </div>
                </div>

                <div class="hero-part2">
                    <div class="references">
                        <div class="one-reference">
                            <p class="reference" id="holidayReference"> Holiday reference: </p>
                        </div>
                        <div class="one-reference">
                            <p class="reference" id="holidayReference"> ${voucherData.holiday.holidayReference}</p>
                        </div>
                    </div>

                </div>

            </div>
            <div class="holiday-summary">
                <h3>Cost of your holiday</h3>
                <div class="cost-summary">

                    <div id="costItems">
                    ${voucherData.holiday.cost.costCategories.map(item => `
                        <div class="cost-item">
                            <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                            <p>£${parseFloat(item.cost).toFixed(2)}</p>
                        </div>
                    `).join('')}
                    
                    </div>
                    <hr />
                    <div class="total">
                        <p>Total</p>
                       <p id="totalCost">£${voucherData.holiday.cost.total}</p>
                    </div>
                </div>
                <div class="holiday-details">
                    <h3>Your details</h3>
                    <div class="holiday-guests">
                        <p>${voucherData.holiday.guests.map(x=>`${x}  `)}</p>
                    </div>

                    <h3>Your holiday</h3>
                    <div class="hotel">
                        <div class="destination"> <span>${voucherData.holiday.hotel.hotelName},</span> ${voucherData.city}, ${voucherData.destination}, ${voucherData.country}</div>
                        <div class="hotel-details">
                            <div class="location">

                                <p> 
                                <i class="fa-solid fa-location-dot"></i> 
                                ${voucherData.resort}, ${voucherData.city}
                                ${voucherData.holiday.hotel.nights} nights, from ${voucherData.holiday.hotel.checkInDate}</p>
                            </div>
                            <div class="room-details">
                                <div class="guests">
                                    <i class="fa-solid fa-user"></i>
                                    <p>${voucherData.holiday.guests.length} guest(s) staying in ${voucherData.holiday.hotel.rooms.length} room(s)</p>
                                </div>
                                <div class="room">
                                    <div>
                                        <i class="fa-solid fa-bed"></i>
                                        ${voucherData.holiday.hotel.rooms.map(x=>(` <p>${x}</p>`))}
                                       
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-utensils"></i>
                                        <p>${voucherData.holiday.hotel.board}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h3>Your flights</h3>
                    <div class="flights">
                        <div class="flight-info">
                            <div class="flight">
                                <div class="f-part1">
                                    <i class="fa-solid fa-plane-departure"></i>
                                    <div class="flight-date">
                                        <div class="date" id="outboundDepartureDate">
                                            ${voucherData.holiday.flights.outbound.departureDate}
                                        </div>
                                        <div class="ticket-number" id="outboundReference">
                                              ${voucherData.holiday.flights.outbound.reference}
                                        </div>
                                    </div>
                                </div>
                                <div class="f-part2">
                                    <div class="flight-time">
                                        <b id="outboundDepartureTime">  ${voucherData.holiday.flights.outbound.departureTime}</b>
                                        <p id="outboundFrom">  ${voucherData.holiday.flights.outbound.from}</p>
                                    </div>
                                    <div class="flight-divider">..........</div>
                                    <div class="flight-time">
                                        <b id="outboundArrivalTime">  ${voucherData.holiday.flights.outbound.arrivalTime}</b>
                                        <p id="outboundTo">  ${voucherData.holiday.flights.outbound.to}</p>
                                    </div>
                                </div>

                            </div>
                            <div class="vertical-line"></div>
                            <div class="flight">
                                <div class="f-part1">
                                    <i class="fa-solid fa-plane-departure"></i>
                                    <div class="flight-date">
                                        <div class="date" id="returnDepartureDate">
                                              ${voucherData.holiday.flights.return.departureDate}
                                        </div>
                                        <div class="ticket-number" id="returnReference">
                                        ${voucherData.holiday.flights.return.reference}
                                        </div>
                                    </div>
                                </div>
                                <div class="f-part2">
                                    <div class="flight-time">
                                        <b id="returnDepartureTime"> ${voucherData.holiday.flights.return.departureTime}</b>
                                        <p id="returnFrom">${voucherData.holiday.flights.return.from}</p>
                                    </div>
                                    <div class="flight-divider">..........</div>
                                    <div class="flight-time">
                                        <b id="returnArrivalTime">${voucherData.holiday.flights.return.arrivalTime}</b>
                                        <p id="returnTo">${voucherData.holiday.flights.return.to}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Your bags</h3>
                    <div class="bags">
                        <div class="carbin-bags">
                            <i class="fa-solid fa-suitcase-rolling"></i>
                            <div>

                                <b> Cabin bags</b>
                                <p><span> Small cabin bags - </span>  ${voucherData.holiday.flights.luggages} x 45cm x 36cm x 20cm
                                    (including any handles and wheels - must fit under
                                    the seat in front of you)</p>
                            </div>

                        </div>
                        <div class="hold-bags">
                            <i class="fa-solid fa-briefcase"></i>
                            <div>

                                <b>Hold bags</b>
                                <p><b>   ${voucherData.holiday.guests.length} x up to 23 kg </b></p>
                            </div>

                        </div>
                    </div>

                    </div>
                    </div>
 <!-- custom header -->
 <div class="hero" style="margin-top: 120px">
 <div class="hero-part1">
 <div class="destination-info">
 <h1>YOU ARE GOING ON HOLIDAY</h1>
 </div>
 <div class="blank-part">
 <img src="https://www.itravelholidays.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogowhite.026f8eb9.png&w=256&q=75"
 alt="" height="30px">
</div>
                </div>
                </div>
                 <div class="holiday-summary">
                 <div class="holiday-details">
                    <!-- Transfer Section -->
                    ${ voucherData.holiday.transfer && (`
                         <h3>Your transfer</h3>
                    <div class="travel-transfer">
                        <div class="travel-details-flex">
                            <div class="travel-transfer-info">
                                <h3> <i class="fa-solid fa-bus-simple"></i> Shared - Shuttle standard bus, <span
                                        id="transfer-p" style="padding: 0 5px;">${voucherData.holiday.guests.length}</span> seat(s)</h3>
                                <ul>
                                    <li>A shared transfer will take you and others to and from your hotel along a
                                        planned route.
                                        As they run to a schedule, you may have to wait up to an hour before your
                                        transfer
                                        departs, but once on board there will be no more than 8 stops.
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                        `)}
                   

                </div>
                <h3>Important information</h3>
                <div class="important-info">
                ${voucherData.holiday.importantInfo}
                </div>
                <h3> Passport</h3>
                <div class="passport">
                   
                    <p> It is your responsibility to ensure that your passport is valid for your holiday and that you
                        meet the criteria for your
                        destination. Your passport needs to be in good condition and signed, and often valid for a
                        minimum period beyond your trip,
                        usually at least three or six months. It may also be required to be less than ten years old.
                        Make sure you check the FCDO
                        page for your destination for more details on passports, along with whether a visa is required
                        for your trip. Our team are not
                        able to give advice on specific visa or passport requirements.</p>
                </div>
                <h3> Contact us</h3>
                <div class="contact">
                  
                    <p>If you have booked with a travel agent please speak to them to discuss or amend your holiday. If
                        you have any issues while
                        you're away, we want to be here for you 24/7. So, instead of having holiday reps in Sousse, our
                        UK based On Holiday Support
                        team will be on hand for support. All their contact details will be sent to you in an email
                        three days before you go. </p>
                </div>
                <h3>Travel insurance</h3>
                <div class="insurance">
                    
                    <p> If you haven't purchased cover already, it's essential that you have travel insurance for you
                        and everyone on your booking for
                        your trip to Tunisia Area.</p>
                </div>
                <h3> Terms and conditions</h3>
                <div class="terms">
                  
                    <p>The terms and conditions applicable to your booking can be found on the easyJet holidays website.
                        We have not accepted
                        or agreed any deletion, amendment or addition.</p>
                </div>

                </div>
 <!-- custom header -->
 <div class="hero" style="margin-top: 120px">
 <div class="hero-part1">
 <div class="destination-info">
 <h1>YOU ARE GOING ON HOLIDAY</h1>
 </div>

 <div class="blank-part">
 <img src="https://www.itravelholidays.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogowhite.026f8eb9.png&w=256&q=75"
 alt="" height="30px">
 </div>
                </div>
                </div>
                 <div class="holiday-summary">
                <h3>Your financial protection</h3>
                <div class="protection">
                    
                    <p> This is an important document. You should retain this as you will need it if your travel
                        arrangements are protected under a
                        scheme of financial protection and you need to make a claim. You have booked an ATOL protected
                        flight inclusive package
                        from us and your ATOL certificate is included at the end of this document. This lists what is
                        financially protected, where you
                        can get information on what this means for you and who to contact if things go wrong</p>
                    <p>Residents of the Isle of Man and the Channel Islands are not covered by the CAA ATOL scheme.
                        Therefore, we have taken
                        measures to provide insolvency protection with International Passenger Protection Limited (IPP)
                        to safeguard the financial
                        interests of these residents. See
                        https://www.easyjet.com/en/holidays/info/insolvency-protection.</p>

                    <div class="atol-reference">
                        <img src="https://www.travelbyinspire.co.uk/images/abta_logo_black" alt="" height="50px">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sEWTJFzoYkFLSWXgNKtBjDI79dya-RX2XA&s" alt="" height="50px">
                        <p>easyJet holidays Limited. Registered in England, number 11927917. Registered office: Hangar
                            89, London Luton Airport,
                            Luton, Bedfordshire, LU2 9PF</p>
                    </div>
                </div>
                <h3>Your bags</h3>
                <div class="your-bags-info">
             
                    <p> Everyone can bring on board one small cabin bag per person for free, which must fit under the
                        seat in front of you. It can be
                        no bigger than 45 x 36 x 20 cm including wheels and handles.</p>
                    <p> A standard hold bag, included per person on all easyJet holidays (expect for infants), is up to
                        23kg. If you’re travelling with
                        family or friends on the same flight and booking, you can pool your total weight allowance. No
                        single item can weigh more
                        than 32kg. Maximum total size (length + width + height) = under 275cm.</p>

                    <p>If you’d like to bring any additional luggage, such as a large overhead cabin bag (max 56 x 45 x
                        25 cm including wheels and
                        handles), any extra hold bags or add any weight to your luggage, you’re able to book this,
                        subject to availability, as soon as
                        you have your flight reference number starting with a K or when you check in for your flights
                        from 30 days before departure.</p>

                    <p>For more information on luggage, make sure to visit our help centre.</p>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

    `
}


export default (gethtmlVoucher2);