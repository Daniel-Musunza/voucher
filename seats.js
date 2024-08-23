`<div class="seats">
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
</div>`