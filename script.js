let cars = JSON.parse(localStorage.getItem("cars")) || [];

function renderCars() {
  const table = document.getElementById("carTable");
  table.innerHTML = "";

  cars.forEach((car, index) => {
    table.innerHTML += `
      <tr>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.year}</td>
        <td>${car.color}</td>
        <td>${car.engine}</td>
        <td>${car.fuel}</td>
        <td>${car.price}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editCar(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteCar(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("cars", JSON.stringify(cars));
}

document.getElementById("carForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const car = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    year: document.getElementById("year").value,
    color: document.getElementById("color").value,
    engine: document.getElementById("engine").value,
    fuel: document.getElementById("fuel").value,
    price: document.getElementById("price").value,
  };

  const carId = document.getElementById("carId").value;
  if (carId === "") {
    cars.push(car);
  } else {
    cars[carId] = car;
    document.getElementById("carId").value = "";
  }

  this.reset();
  renderCars();
});

function deleteCar(index) {
  if (confirm("Rostdan ham o‘chirmoqchimisiz?")) {
    cars.splice(index, 1);
    renderCars();
  }
}

function editCar(index) {
  const car = cars[index];
  document.getElementById("brand").value = car.brand;
  document.getElementById("model").value = car.model;
  document.getElementById("year").value = car.year;
  document.getElementById("color").value = car.color;
  document.getElementById("engine").value = car.engine;
  document.getElementById("fuel").value = car.fuel;
  document.getElementById("price").value = car.price;
  document.getElementById("carId").value = index;
}

renderCars();

