document.addEventListener("DOMContentLoaded", () => {

    const voucherData = {
        holiday: {
            destination: "MARRAKECH",
            country: "MOROCCO",
            coverImage: "https://www.shutterstock.com/image-photo/panorama-beautiful-countryside-romania-sunny-600nw-1302294157.jpg",
            airlineLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdR7uR0JPwGXJbyhI1_rCmgHhWyE32mVUUA&s",
            holidayReferece: "6062974",
            flightReference: "K7W5V28",
            hotelDetails: {
                hotelName: "Diwane Marrakech",
                city: "Marrakech",
                stars: 4,
                reviews: 1551,
                images: [
                    "https://www.i-escape.com/gallery/252001_253000/252601_252700/252677_840x540.jpg",
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/df/59/4b/dar-zemora.jpg?w=700&h=-1&s=1",
                    "https://pix10.agoda.net/hotelImages/233/233840/233840_121227184850139.jpg?ca=0&ce=1&s=312x235&ar=16x9",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/575306044.jpg?k=35784defb18ac03f14d374e88ccf22beca297ecc26d84cf1ae0fbb84720235e4&o=&hp=1",
                    "https://media-cdn.tripadvisor.com/media/photo-s/15/66/c1/a0/dar-zemora.jpg"
                ],
                amenities: {
                    general: [
                        "Air conditioning",
                        "Concierge",
                        "Gym",
                        "Currency exchange facilities"
                    ],
                    entertainment: [
                        "Children's pool",
                        "Entertainment programme",
                        "Outdoor pool",
                        "TV lounge"
                    ],
                    foodAndDrinks: [
                        "Bar",
                        "Poolside snack bar",
                        "Restaurant"
                    ]
                }
            },
            cost: {
                costPerCategory: {
                    holiday: 416.59
                },
                total: 416.59
            },
            holidayDetails: {
                flights: {
                    outbound: {
                        departureDate: "Mon 9th Sep 2024",
                        reference: "EZY2265",
                        from: "Manchester (MAN)",
                        to: "Marrakech (RAK)",
                        departureTime: "06:25",
                        arrivalTime: "10:20"
                    },
                    return: {
                        departureDate: "Thu 12th Sep 2024",
                        reference: "TZY6765",
                        from: "Marrakech (RAK)",
                        to: "Manchester (MAN)",
                        departureTime: "13:05",
                        arrivalTime: "16:45"
                    }
                },
                seats: [
                    {
                        name: "Ms Gerramie Gabo Castro",
                        outbound: {
                            seatNumber: "16F",
                            seatType: " Rear Standard"
                        },
                        return: {
                            seatNumber: "16A",
                            seatType: " Rear Standard"
                        }

                    }
                ],
                laggages: 1,
                hotel: {
                    rooms: [
                        {
                            roomName: "SINGLE SUPERIOR",
                            roomNumber: "34A",
                            persons: 1
                        }
                    ],
                    board: {
                        boardName: "Half Board",
                        includes: [
                            "Breakfast",
                            "Dinner"
                        ]
                    }
                },
                passengers: [
                    {
                        name: "Ms Gerramie Gabo Castro",
                        email: "dreamlineholidays@hotmail.com",
                        lead: true,
                        adult: true
                    }
                ],
                nights: 3
            }
        }
    }

    const heroPart1 = document.querySelector('.hero-part1');

    // Function to set the background dynamically
    function setBackground(imageUrl) {
        heroPart1.style.background = `url('${imageUrl}') no-repeat center center/cover`;
    }

    // Example usage: setting the background image dynamically
    setBackground(voucherData.holiday.coverImage);

    // Inject data into the HTML elements
    document.getElementById("destinationAndCountry").textContent = `${voucherData.holiday.destination}, ${voucherData.holiday.country}`;
    document.getElementById("holidayReference").textContent = voucherData.holiday.holidayReferece;
    document.getElementById("flightReference").textContent = voucherData.holiday.flightReference;

    const airlineLogo = document.createElement("img");
    airlineLogo.className = "logo1"
    airlineLogo.src = voucherData.holiday.airlineLogo;
    airlineLogo.alt = `Airline Logo`;
    document.getElementById("branding").appendChild(airlineLogo);

    const firstimage = document.createElement("img");
    firstimage.className = "logo1"
    firstimage.src = voucherData.holiday.hotelDetails.images[0];
    firstimage.alt = `Hotel Image`;
    document.getElementById("gallery-first-image").appendChild(firstimage);

    //  // Inject hotel images
    voucherData.holiday.hotelDetails.images.slice(1, 5).forEach((image, index) => {
        // Create a new div for each gallery image
        const imgDiv = document.createElement("div");
        imgDiv.className = "gallery-image";

        // Create the img element
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = `Hotel Image ${index + 1}`;

        // Append the img element to the newly created div
        imgDiv.appendChild(imgElement);

        // Append the div to the container with id 'other-images'
        document.getElementById("other-images").appendChild(imgDiv);
    });


    document.getElementById("hotelName").textContent = voucherData.holiday.hotelDetails.hotelName;
    document.getElementById("cityDestinationCountry").textContent = `${voucherData.holiday.hotelDetails.city} city, ${voucherData.holiday.destination}, ${voucherData.holiday.country}`;
    document.getElementById("stars").textContent = `${"★".repeat(voucherData.holiday.hotelDetails.stars)}${"☆".repeat(5 - voucherData.holiday.hotelDetails.stars)} stars`;
    document.getElementById("reviews").textContent = `${voucherData.holiday.hotelDetails.reviews} reviews`;

    const adultsCount = voucherData.holiday.holidayDetails.passengers.filter(x => x.adult).length;
    const childrenCount = voucherData.holiday.holidayDetails.passengers.filter(x => !x.adult).length;

    let personsText = "";

    if (adultsCount > 0) {
        personsText += `${adultsCount} adult${adultsCount > 1 ? 's' : ''}`;
    }

    if (childrenCount > 0) {
        if (personsText) personsText += ", "; // Add a comma if there are adults
        personsText += `${childrenCount} child${childrenCount > 1 ? 'ren' : ''}`;
    }

    document.getElementById("persons").textContent = personsText;

    document.getElementById("holidayDates").textContent = `From ${voucherData.holiday.holidayDetails.flights.outbound.departureDate} - ${voucherData.holiday.holidayDetails.flights.return.departureDate} , ${voucherData.holiday.holidayDetails.nights} nights`;

    document.getElementById("boardType").textContent = `${voucherData.holiday.holidayDetails.hotel.board.boardName}`;

    //  // Inject amenities
    voucherData.holiday.hotelDetails.amenities.general.forEach((am) => {
        const list = document.createElement("li");
        list.textContent = am
        document.getElementById("g-amenities").appendChild(list);
    })

    voucherData.holiday.hotelDetails.amenities.entertainment.forEach((am) => {
        const list = document.createElement("li");
        list.textContent = am
        document.getElementById("e-amenities").appendChild(list);
    })

    voucherData.holiday.hotelDetails.amenities.foodAndDrinks.forEach((am) => {
        const list = document.createElement("li");
        list.textContent = am
        document.getElementById("fd-amenities").appendChild(list);
    })

    const costPerCategory = voucherData.holiday.cost.costPerCategory;
    const costItemsContainer = document.getElementById("costItems");

    // Clear any existing items
    costItemsContainer.innerHTML = "";

    Object.keys(costPerCategory).forEach((category) => {
        const costItem = document.createElement("div");
        costItem.className = "cost-item";

        const categoryName = document.createElement("p");
        categoryName.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter

        const costValue = document.createElement("p");
        costValue.textContent = `£${costPerCategory[category].toFixed(2)}`;

        costItem.appendChild(categoryName);
        costItem.appendChild(costValue);

        costItemsContainer.appendChild(costItem);
    });


    document.getElementById("totalCost").textContent = `£${voucherData.holiday.cost.total}`;

    document.getElementById("outboundDepartureDate").textContent = voucherData.holiday.holidayDetails.flights.outbound.departureDate;
    document.getElementById("outboundReference").textContent = voucherData.holiday.holidayDetails.flights.outbound.reference;
    document.getElementById("outboundDepartureTime").textContent = voucherData.holiday.holidayDetails.flights.outbound.departureTime;
    document.getElementById("outboundArrivalTime").textContent = voucherData.holiday.holidayDetails.flights.outbound.arrivalTime;
    document.getElementById("outboundFrom").textContent = voucherData.holiday.holidayDetails.flights.outbound.from;
    document.getElementById("outboundTo").textContent = voucherData.holiday.holidayDetails.flights.outbound.to;

    document.getElementById("returnDepartureDate").textContent = voucherData.holiday.holidayDetails.flights.return.departureDate;
    document.getElementById("returnReference").textContent = voucherData.holiday.holidayDetails.flights.return.reference;
    document.getElementById("returnDepartureTime").textContent = voucherData.holiday.holidayDetails.flights.return.departureTime;
    document.getElementById("returnArrivalTime").textContent = voucherData.holiday.holidayDetails.flights.return.arrivalTime;
    document.getElementById("returnFrom").textContent = voucherData.holiday.holidayDetails.flights.return.from;
    document.getElementById("returnTo").textContent = voucherData.holiday.holidayDetails.flights.return.to;

    const passengersSeatsContainer = document.getElementById("passegersSeats");
    const cabinBagsInstructionsContainer = document.getElementById("cabinBagsInstructions");

    // Clear existing content
    passengersSeatsContainer.innerHTML = "";
    cabinBagsInstructionsContainer.innerHTML = "";

    // Iterate over each seat in the seats array
    voucherData.holiday.holidayDetails.seats.forEach((seat) => {
        // Create elements for passenger seat details
        const passengerDiv = document.createElement("div");
        passengerDiv.className = "name";
        passengerDiv.innerHTML = `<i class="fa fa-user"></i> ${seat.name}`;

        const outboundDiv = document.createElement("div");
        outboundDiv.className = "outbound";
        outboundDiv.innerHTML = `<p><span class="seat-number">${seat.outbound.seatNumber}</span> ${seat.outbound.seatType}</p>`;

        const returnDiv = document.createElement("div");
        returnDiv.className = "return";
        returnDiv.innerHTML = `<p><span class="seat-number">${seat.return.seatNumber}</span> ${seat.return.seatType}</p>`;

        // Append the elements to the passengersSeatsContainer
        passengersSeatsContainer.appendChild(passengerDiv);
        passengersSeatsContainer.appendChild(outboundDiv);
        passengersSeatsContainer.appendChild(returnDiv);

        // Create elements for cabin bag instructions
        const cabinPassengerDiv = document.createElement("div");
        cabinPassengerDiv.className = "travel-passenger";
        cabinPassengerDiv.innerHTML = `<p><i class="fa fa-user"></i> ${seat.name}</p>`;

        const travelBagsDiv = document.createElement("div");
        travelBagsDiv.className = "travel-bags";
        travelBagsDiv.innerHTML = `
            <p><i class="fa-solid fa-suitcase-rolling"><span class="travel-icon1">✔️</span></i> Small under seat bag (included)</p>
            <p><i class="fa-solid fa-suitcase-rolling"><span class="travel-icon2">❌</span></i> No large over head cabin bag</p>
        `;

        // Append the elements to the cabinBagsInstructionsContainer
        cabinBagsInstructionsContainer.appendChild(cabinPassengerDiv);
        cabinBagsInstructionsContainer.appendChild(travelBagsDiv);
    });


    document.getElementById("laggages1").textContent = `${voucherData.holiday.holidayDetails.laggages}`;
    document.getElementById("laggages2").textContent = `${voucherData.holiday.holidayDetails.laggages}`;

    document.getElementById("transfer-p").textContent = `  ${voucherData.holiday.holidayDetails.passengers.length} `;

    const roomTypeContainer = document.getElementById("roomType");

    // Clear any existing content
    roomTypeContainer.innerHTML = "";

    // Iterate over each room in the rooms array
    voucherData.holiday.holidayDetails.hotel.rooms.forEach((room) => {
        const roomInfo = document.createElement("div");

        const roomName = document.createElement("p");
        roomName.textContent = `${room.roomName}`;

        const roomPersons = document.createElement("p");
        roomPersons.textContent = `for ${room.persons} ${room.persons > 1 ? 'persons' : 'person'}`;

        roomInfo.appendChild(roomName);
        roomInfo.appendChild(roomPersons);

        roomTypeContainer.appendChild(roomInfo);
    });


    document.getElementById("boardType2").textContent = `  ${voucherData.holiday.holidayDetails.hotel.board.boardName} `;


    voucherData.holiday.holidayDetails.hotel.board.includes.forEach((x) => {
        const list = document.createElement("li");
        list.textContent = x
        document.getElementById("boardIncludes").appendChild(list);
    })

    const passengers = voucherData.holiday.holidayDetails.passengers;

    const passengersContainer = document.getElementById("passengers");

    // Clear any existing passenger details
    passengersContainer.innerHTML = "";

    // Iterate over each passenger
    passengers.forEach((passenger) => {
        const passengerDiv = document.createElement("div");
        passengerDiv.className = "travel-passenger";

        const passengerName = document.createElement("p");
        passengerName.style.marginTop = "0";
        passengerName.innerHTML = `<i class="fa fa-user"></i> ${passenger.name}${passenger.lead ? ' - <span class="travel-lead-passenger">Lead passenger</span>' : ''}`;

        const passengerEmail = document.createElement("p");
        passengerEmail.style.marginLeft = "25px";
        passengerEmail.textContent = `Email: ${passenger.email}`;

        passengerDiv.appendChild(passengerName);
        passengerDiv.appendChild(passengerEmail);
        passengersContainer.appendChild(passengerDiv);
    });


});