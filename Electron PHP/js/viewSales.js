let users = [];
function loadDataFromAPI() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.data);
      users = response.data;
      users.forEach(loadTable);
      loadTable();
      alert("ok");
    })
    .catch((error) => console.error(error));
}
function loadTable(item, index) {
  var table = document.getElementById("salesTables");
  var recCount = table.rows.length;
  console.log(recCount);

  let drug = item.id;
  let quantity = item.name;
  var row = table.insertRow(recCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = drug;
  cell2.innerHTML = quantity;
}

window.onload = loadDataFromAPI;

console.log("viewSales.js");
function addRec() {
  let drug = document.getElementById("drug").value;
  let quantity = document.getElementById("quantity").value;

  var table = document.getElementById("salesTables");
  var recCount = table.rows.length;
  console.log(recCount);

  var row = table.insertRow(recCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = drug;
  cell2.innerHTML = quantity;
}
