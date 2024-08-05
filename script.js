const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
console.log(container, seats);

const count = document.getElementById("count");
const total = document.getElementById("total");

console.log(count, total);

const movie = document.getElementById("movie");
console.log(movie);
console.log(movie.value);
let moviePrice = +movie.value;

function updateSelecteData() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats);

  let numbers = selectedSeats.length;
  count.innerText = numbers;
  let totalBill = +moviePrice * numbers;
  total.innerText = totalBill;
  // console.log(movie)
}

movie.addEventListener("change", (e) => {
  console.log(e.target.value);
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
