const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
console.log(container, seats);

const count = document.getElementById("count");
const total = document.getElementById("total");

console.log(count, total);

let movie = document.getElementById("movie");
console.log(movie);
console.log(movie.value);
console.log(movie.selectedIndex)
let moviePrice = +movie.value;
console.log(moviePrice)

populateUI();

//getting the data from local storage and populate in the UI
function populateUI() {
  const selectedSeats1 = JSON.parse(localStorage.getItem("seats"));
  console.log(selectedSeats1);
  if (selectedSeats1 !== null && selectedSeats1.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats1.indexOf(index) > -1) seat.classList.add("selected");
    });
  }

  const selectedMovieIndex = localStorage.getItem('movieIndex');
  // console.log(selectedMovieIndex);
  if(selectedMovieIndex !== null)
  {
    movie.selectedIndex = selectedMovieIndex;
    console.log(movie.selectedIndex);
    console.log(movie.value)
  }

  const selectedMovieCost = localStorage.getItem('movieCost');
  console.log(selectedMovieCost);
moviePrice = selectedMovieCost;

}


function updateSelecteData() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats);
  // console.log([...selectedSeats]);
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  console.log(seatsIndex);

  localStorage.setItem("seats", JSON.stringify(seatsIndex));

  let numbers = selectedSeats.length;
  count.innerText = numbers;
  let totalBill = +moviePrice * numbers;
  total.innerText = totalBill;
  // console.log(movie)
}

function setMovieData(selectedIndex, moviePrice) {
  localStorage.setItem("movieIndex", JSON.stringify(selectedIndex));
  localStorage.setItem("movieCost", JSON.stringify(+moviePrice));
}

movie.addEventListener("change", (e) => {
  console.log(e.target.value);
  // console.log(e.target)
  console.log(e.target.selectedIndex, e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  moviePrice = e.target.value;

  updateSelecteData();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log('yes');
    e.target.classList.toggle("selected");

    updateSelecteData();
  }
});
updateSelecteData();


// when we want to restrore the previous state we have to the save th eseats which we selected and also the movie and the cost of the movie ticket
