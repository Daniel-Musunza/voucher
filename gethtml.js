const gethtml = (voucherData) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${voucherData.holiday.holidayDetails.passengers[0].name} Holiday Voucher</title>
    <script src="https://kit.fontawesome.com/332a0bbd7c.js" crossorigin="anonymous"></script>
     <style>
        body {
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #E6E6E6;
            z-index: 4;

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

        h2,
        h3 {
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
            height: 100px;
            display: flex;
            position: relative;
        }

        .destination-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 32%;
            padding: 20px;
            position: relative;
            background-color: #fff;
            transform-origin: top left;
            z-index: 2;
        }

        .blank-part {
            width: 50%;
            position: relative;
            z-index: 2;
        }



        .background-below-line {
            position: absolute;
            left: 390px;
            top: 0;
            width: 180px;
            height: 180px;
            background-color: #fff;
            /* Background color for the part below the line */
            transform: rotate(120deg);
            transform-origin: top left;
            z-index: 1;

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

        .hero-part2 {
            z-index: 2;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            background-color: #F1F5F6;

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
            margin-top: 10px !important;
            font-size: 16px !important;
        }

        .branding {
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 10px;
            right: 20px;
        }

        .branding .logo1 {
            padding-left: 10px;
            height: auto;
            width: 60px;
        }

        .branding .logo2 {
            padding-left: 10px;
            height: auto;
            width: 30px;
        }

        h2 {
            z-index: 3;
            padding-left: 20px;
            margin-top: 20px;
            font-size: 20px;
        }

        .gallery {
            display: flex;
            justify-content: space-between;
            background: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
        }


        .gallery .gallery-first-image {
            height: 150px;
            overflow: hidden;
            /* Ensures no part of the image overflows the container */
            position: relative;
            width: 40%;
        }

        .gallery .other-images {
            width: 60%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .gallery .other-images .gallery-image {
            height: 50%;
            overflow: hidden;
            /* Ensures no part of the image overflows the container */
            position: relative;

            width: 50%;
        }

        .gallery .gallery-first-image img,
        .gallery .other-images .gallery-image img {
            width: 100%;
            height: 100%;
            padding: 5px;
            object-fit: cover;
            /* Ensures the image covers the container while maintaining aspect ratio */
            position: absolute;
            top: 0;
            left: 0;
        }

        .gallery .gallery-first-image img {
            padding: 5px 0;
        }



        .summary {
            display: flex;
            justify-content: space-between;
            background: white;
            padding: 0 20px;

        }

        hr {
            margin: 0;
            padding: 0;
            width: 100% !important;
        }

        .hotel-info {
            width: 40%;
            padding: 15px;
            /* border-radius: 5px; */
            border: 1px solid #5555;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .details h3 {
            margin: 0;
            font-size: 14px;
        }

        .details p {
            margin: 5px 0;
            color: #d9534f;
            font-size: 12px;

        }

        .reviews {
            margin: 10px 0;
            font-size: 12px;
            color: #555;
        }

        .booking-info {
            font-size: 12px;
            color: #333;
        }

        .booking-info p {
            margin: 10px 0;
            display: flex;
            flex-wrap: nowrap;
        }

        .amenities {
            padding: 15px;
            padding-left: 20px;
            /* border-radius: 5px; */
            width: 60%;
            border: 1px solid #5555;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        .amenities h3 {
            margin: 0 0 20px 0;
            font-size: 14px;
        }

        .amenity-categories {
            display: flex;
            justify-content: space-between;
        }

        .amenity-categories div {
            flex: 1;
        }

        .amenity-categories h4 {
            margin: 0 0 10px 0;
            font-size: 12px;
        }

        .amenity-categories h4 i,
        p i {
            margin-right: 10px;
        }

        .amenity-categories ul {
            /* list-style-type: none; */
            padding: 0;
            margin: 0;
        }

        .amenity-categories ul li {
            margin: 5px 0;
            font-size: 12px;
        }


        .holiday-summary {
            padding: 0 20px;
        }

        .cost-summary {
            border-bottom: 1px solid #E1E1E1;
            margin: 20px 0;
        }

        .cost-summary h2 {
            padding-left: 0;
            margin-bottom: 0;
            font-size: 20px;
        }

        .cost-item,
        .total {
            display: flex;
            justify-content: space-between;
            padding: 5px 15px;
        }

        .total {
            background-color: #E1E8EC;
            font-weight: bold;
            font-size: 20px;
            padding: 15px;
        }

        .total p {
            margin: 0;
        }

        .holiday-details h2 {
            padding-left: 0;
            margin-bottom: 20px;
            font-size: 20px;
        }

        .flights,
        .seats {
            padding: 0 20px;
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
            height: 120px;
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
            color: #d9534f;
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

        .seat-info {
            display: flex;
            flex-direction: column;
            padding: 0;
            width: 100%;
            font-size: 12px;
        }

        .seat-info-part1,
        .seat-info-part2 {
            display: flex;
            justify-content: flex-end;
        }

        .outbound,
        .return {
            width: 30%;
            display: flex;
            align-items: center;

        }

        .outbound i,
        .return i {
            margin-right: 10px;
        }

        .seat-info-part2 .name {
            display: flex;
            align-items: center;
            margin-right: 125px;

        }

        .seat-info-part2 .name i {
            margin-right: 10px;
        }

        .seat-number {
            background-color: #d9534f;
            color: white;
            padding: 3px 8px;
            border-radius: 3px;
            margin-right: 5px;
        }



        .travel-details {
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .travel-section {
            margin-bottom: 20px;
            padding: 0 20px;
            border: 1px solid #E1E1E1;
            border-radius: 5px;
        }

        .travel-section h2 {
            padding: 0;
            font-size: 18px;
            margin-bottom: 10px;
        }

        .travel-section .carbin-info {
            font-size: 12px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .travel-section .carbin-info i {
            margin-right: 10px;
        }

        .travel-details-flex {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .travel-details-flex p {
            margin: 5px 0;
            font-size: 12px;
            margin-top: 20px;
        }

        .travel-bags,
        .travel-luggage,
        .travel-transfer-info,
        .travel-room,
        .travel-board,
        .travel-passenger {
            width: 100%;
            padding-bottom: 10px;
        }

        /* .travel-luggage{
padding-bottom: 10px;
} */
        .travel-icon1 {
            position: absolute;
            margin-right: 10px;
            font-size: 10px;
            color: rgb(47, 253, 47);
        }

        .travel-icon2 {
            position: absolute;
            margin-right: 10px;
            font-size: 10px;
            color: red;
        }


        .laggage {
            display: flex;
            align-items: center;
        }

        .laggage-image {

            height: 70px;
            display: flex;
            align-items: center;
            margin-right: 20px;
        }

        .laggage i {
            margin-right: 10px;
        }

        .travel-room,
        .travel-board {
            display: flex;
            margin-bottom: 10px;
        }

        .travel-room p,
        .travel-board p {
            margin-top: 10px;
        }

        .travel-board ul {
            list-style-type: disc;
            margin: 5px 0 0 20px;
            padding-left: 0;
        }

        .travel-board ul li {
            margin: 5px 0;
            font-size: 12px;
        }

        .room-board {
            display: flex;
            flex-direction: column;

        }

        .travel-icon i {
            font-size: 20px;
            color: #d9534f;
            margin: 20px;
            margin-left: 0;
        }

        .travel-transfer-info h3 {
            display: flex;
            align-items: center;
            font-size: 14px;
            margin: 5px 0;
        }

        .travel-transfer-info {
            display: flex;
            flex-direction: column;
        }

        .travel-transfer-info ul {
            padding-left: 15px;
            margin: 10px;
        }

        .travel-transfer-info ul li {
            font-size: 12px;

        }

        .travel-passenger {
            padding-bottom: 20px;
        }

        /* .travel-passenger p{
margin-top: 0;
} */

        .travel-lead-passenger {
            font-size: 10px;
            color: #d9534f;
        }
    </style>
</head>

<body>
    <div class="main-container">
        <div class="container">
            <div class="hero">
                <div class="hero-part1" style="background: url('${voucherData.holiday.coverImage}') no-repeat center center/cover;">
                    <div class="destination-info">
                        <p>YOU ARE GOING TO</p>
                        <h1 id="destinationAndCountry">${voucherData.holiday.destination}, ${voucherData.holiday.country}</h1>
                    </div>

                    <div class="blank-part">

                    </div>
                    <div class="background-below-line"></div>
                </div>

                <div class="hero-part2">
                    <div class="references">
                        <div class="one-reference">
                            <p>Holiday reference</p>
                            <p class="reference" id="holidayReference">${voucherData.holiday.holidayReferece}</p>
                        </div>
                        <div class="one-reference">
                            <p>Flight reference</p>
                            <p class="reference" id="flightReference">${voucherData.holiday.flightReference}</p>
                        </div>
                    </div>
                    <div class="branding" id="branding">
                    <img class="logo1" src="${voucherData.holiday.airlineLogo}" alt="Airline Logo">
                        <img class="logo2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sEWTJFzoYkFLSWXgNKtBjDI79dya-RX2XA&s"
                            alt="ABTA Logo">
                    </div>
                </div>

            </div>

            <h2>YOUR HOLIDAY SUMMARY</h2>
            <div>
                <div class="gallery" id="gallery">
                    <div class="gallery-first-image" id="gallery-first-image">
                         <img class="logo1" src="${voucherData.holiday.hotelDetails.images[0]}" alt="Hotel Image">
                    </div>
                    <div class="other-images" id="other-images">
                         ${voucherData.holiday.hotelDetails.images.slice(1, 5).map((image, index) => `
            <div class="gallery-image">
                <img src="${image}" alt="Hotel Image ${index + 1}">
            </div>
        `).join('')}
                    </div>
                </div>

                <div class="summary">
                    <div class="hotel-info">

                        <div class="details">
                            <h3 id="hotelName">${voucherData.holiday.hotelDetails.hotelName}</h3>
                            <p><a href="#" id="cityDestinationCountry">${voucherData.holiday.hotelDetails.city} city, ${voucherData.holiday.destination}, ${voucherData.holiday.country}</a></p>
                            <div class="reviews">
                                <span id="stars">${"★".repeat(voucherData.holiday.hotelDetails.stars)}${"☆".repeat(5 - voucherData.holiday.hotelDetails.stars)} stars</span>
                                <span id="reviews">${voucherData.holiday.hotelDetails.reviews} reviews</span>
                            </div>
                            <hr />
                            <div class="booking-info">
                                <p ><i class="fa fa-user"></i> <span id="persons"> ${voucherData.holiday.holidayDetails.passengers.filter(x => x.adult).length} adult(s)
        ${voucherData.holiday.holidayDetails.passengers.filter(x => !x.adult).length > 0 ? `, ${voucherData.holiday.holidayDetails.passengers.filter(x => !x.adult).length} child(ren)` : ''}
        </span></p>
                                <hr />
                                <p><i class="fa fa-calendar"></i> <span id="holidayDates">From ${voucherData.holiday.holidayDetails.flights.outbound.departureDate} - ${voucherData.holiday.holidayDetails.flights.return.departureDate}, ${voucherData.holiday.holidayDetails.nights} nights</span> </p>
                                <hr />
                                <p><i class="fa fa-cutlery"></i> <span id="boardType">${voucherData.holiday.holidayDetails.hotel.board.boardName}</span></p>

                            </div>
                        </div>
                    </div>
                    <div class="amenities">
                        <h3>All Facilities & Amenities at the Hotel</h3>
                        <div class="amenity-categories" >
                            <div>
                                <h4><i class="fa-solid fa-city"></i>General</h4>
                                <ul id="g-amenities">
                                   ${voucherData.holiday.hotelDetails.amenities.general.map(am => `<li>${am}</li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <h4><i class="fa-solid fa-tv"></i>Entertainment</h4>
                                <ul id="e-amenities">
                                  ${voucherData.holiday.hotelDetails.amenities.entertainment.map(am => `<li>${am}</li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <h4><i class="fa-solid fa-utensils"></i>Food & Drink</h4>
                                <ul id="fd-amenities">
                                     ${voucherData.holiday.hotelDetails.amenities.foodAndDrinks.map(am => `<li>${am}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="holiday-summary">
                <div class="cost-summary">
                    <h2>COST OF YOUR HOLIDAY</h2>
                    <div id="costItems">
                         ${Object.keys(voucherData.holiday.cost.costPerCategory).map(category => `
            <div class="cost-item">
                <p>${category.charAt(0).toUpperCase() + category.slice(1)}</p>
                <p>£${voucherData.holiday.cost.costPerCategory[category].toFixed(2)}</p>
            </div>
        `).join('')}
                    </div>
                    
                    <div class="total" >
                        <p>Total</p>
                        <p id="totalCost">£${voucherData.holiday.cost.total}</p>
                    </div>
                </div>

                <div class="holiday-details">
                    <h2>HOLIDAY DETAILS</h2>

                      <div class="flights">
        <h3>FLIGHTS</h3>
        <div class="flight-info">
            <div class="flight">
                <div class="f-part1">
                    <i class="fa-solid fa-plane-departure"></i>
                    <div class="flight-date">
                        <div class="date" id="outboundDepartureDate">
                            ${voucherData.holiday.holidayDetails.flights.outbound.departureDate}
                        </div>
                        <div class="ticket-number" id="outboundReference">
                            ${voucherData.holiday.holidayDetails.flights.outbound.reference}
                        </div>
                    </div>
                </div>
                <div class="f-part2">
                    <div class="flight-time">
                        <b id="outboundDepartureTime">${voucherData.holiday.holidayDetails.flights.outbound.departureTime}</b>
                        <p id="outboundFrom">${voucherData.holiday.holidayDetails.flights.outbound.from}</p>
                    </div>
                    <div class="flight-divider">..........</div>
                    <div class="flight-time">
                        <b id="outboundArrivalTime">${voucherData.holiday.holidayDetails.flights.outbound.arrivalTime}</b>
                        <p id="outboundTo">${voucherData.holiday.holidayDetails.flights.outbound.to}</p>
                    </div>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="flight">
                <div class="f-part1">
                    <i class="fa-solid fa-plane-departure"></i>
                    <div class="flight-date">
                        <div class="date" id="returnDepartureDate">
                            ${voucherData.holiday.holidayDetails.flights.return.departureDate}
                        </div>
                        <div class="ticket-number" id="returnReference">
                            ${voucherData.holiday.holidayDetails.flights.return.reference}
                        </div>
                    </div>
                </div>
                <div class="f-part2">
                    <div class="flight-time">
                        <b id="returnDepartureTime">${voucherData.holiday.holidayDetails.flights.return.departureTime}</b>
                        <p id="returnFrom">${voucherData.holiday.holidayDetails.flights.return.from}</p>
                    </div>
                    <div class="flight-divider">..........</div>
                    <div class="flight-time">
                        <b id="returnArrivalTime">${voucherData.holiday.holidayDetails.flights.return.arrivalTime}</b>
                        <p id="returnTo">${voucherData.holiday.holidayDetails.flights.return.to}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

                    <div class="seats">
                        <h3>YOUR SEATS</h3>
                        <div class="seat-info">
                            <div class="seat-info-part1">
                                <div class="outbound">
                                    <i class="fa-solid fa-plane-departure"></i>

                                    <p>Outbound</p>
                                </div>
                                <div class="return">
                                    <i class="fa-solid fa-plane-departure"></i>
                                    <p>Return</p>
                                </div>
                            </div>
                            <hr />
                            <div class="seat-info-part2" id="passegersSeats">
                                 ${voucherData.holiday.holidayDetails.seats.map(seat => `
            <div class="name"><i class="fa fa-user"></i> ${seat.name}</div>
            <div class="outbound"><p><span class="seat-number">${seat.outbound.seatNumber}</span> ${seat.outbound.seatType}</p></div>
            <div class="return"><p><span class="seat-number">${seat.return.seatNumber}</span> ${seat.return.seatType}</p></div>
        `).join('')}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="travel-details">

                <!-- Cabin Bags Section -->
                <div class="travel-section travel-cabin-bags">
                    <h2>YOUR CABIN BAGS</h2>
                    <div class="carbin-info">
                        <i class="fa-solid fa-plane-departure"></i>

                        <p>Outbound && Return</p>

                    </div>
                    <hr />
                    <div class="travel-details-flex" id="cabinBagsInstructions">
                         ${voucherData.holiday.holidayDetails.seats.map(seat => `
            <div class="travel-passenger"><p><i class="fa fa-user"></i> ${seat.name}</p></div>
            <div class="travel-bags">
                <p><i class="fa-solid fa-suitcase-rolling"><span class="travel-icon1">✔️</span></i> Small under seat bag (included)</p>
                <p><i class="fa-solid fa-suitcase-rolling"><span class="travel-icon2">❌</span></i> No large overhead cabin bag</p>
            </div>
        `).join('')}
                    </div>
                </div>

                <!-- Hold Luggage Section -->
                <div class="travel-section travel-hold-luggage">
                    <h2>YOUR HOLD LAGGAGE</h2>
                    <div class="laggage">
                        <i class="fa-solid fa-plane-departure"></i>

                        <p > <span id="laggages1">${voucherData.holiday.holidayDetails.laggages}</span> item</p>

                    </div>
                    <hr />
                    <div class="travel-details-flex">
                        <div class="laggage-image">
                            <img width="20px"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNiqlwD89JS7XmckW_-RQMSvVJ6r6RqiDeg&s"
                                alt="">

                        </div>
                        <div class="travel-luggage">
                            <p><span id="laggages2">${voucherData.holiday.holidayDetails.laggages}</span> x 23kg hold bag</p>
                            <p>Maximum 23kg per bag, stored in the plane hold. Outbound and return.</p>
                        </div>
                    </div>
                </div>

                <!-- Transfer Section -->
                <div class="travel-section travel-transfer">
                    <h2>TRANSFER</h2>
                    <div class="travel-details-flex">
                        <span class="travel-icon"><i class="fa-solid fa-bus-simple"></i></span>
                        <div class="travel-transfer-info">
                            <h3> Shared - Shuttle standard bus, <span id="transfer-p" style="padding: 0 5px;">${voucherData.holiday.holidayDetails.passengers.length}</span>  seat</h3>
                            <ul><li>A shared transfer will take you and others to and from your hotel along a planned route.
                                As they run to a schedule, you may have to wait up to an hour before your transfer
                                departs, but once on board there will be no more than 8 stops.
                            </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <!-- Room and Board Section -->
                <div class="travel-section travel-room-board">
                    <h2>YOUR ROOM AND BOARD</h2>
                    <div class="travel-details-flex room-board">
                        <div class="travel-room">
                            <span class="travel-icon"><i class="fa-solid fa-bed"></i></span>
                            <div class="room-items" id="roomType">
                                 ${voucherData.holiday.holidayDetails.hotel.rooms.map(room => `
            <div>
                <p>${room.roomName}</p>
                <p>for ${room.persons} ${room.persons > 1 ? 'persons' : 'person'}</p>
            </div>
        `).join('')}
                            </div>
                        </div>

                        <hr />
                        <div class="travel-board">
                            <span class="travel-icon"><i class="fa">🍽️</i></span>
                            <div class="board-items" >
                                <p id="boardType2">${voucherData.holiday.holidayDetails.hotel.board.boardName}</p>
                                <ul id="boardIncludes">
                                    ${voucherData.holiday.holidayDetails.hotel.board.includes.map(x => `<li>${x}</li>`).join('')}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Passenger Details Section -->
                <div class="travel-section travel-passenger-details">
                    <h2>PASSENGER DETAILS</h2>
                    <div class="travel-details-flex" id="passengers"> 
                      ${voucherData.holiday.holidayDetails.passengers.map(passenger => `
            <div class="travel-passenger">
                <p style="margin-top: 0;"><i class="fa fa-user"></i> ${passenger.name}${passenger.lead ? ' - <span class="travel-lead-passenger">Lead passenger</span>' : ''}</p>
                <p style="margin-left: 25px;">Email: ${passenger.email}</p>
            </div>
        `).join('')}
                    </div>
                </div>

            </div>


        </div>
    </div>

</body>
</html>
    `;
};

export default (gethtml);