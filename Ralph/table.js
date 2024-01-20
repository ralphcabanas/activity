function insertRow(){
    let table = document.getElementById('myTable');
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = "Ralph";
    cell2.innerHTML = "Cabañas";
    cell3.innerHTML = "21";
    cell4.innerHTML = "<button onclick=' deleteRow(this)'>Delete</button>";
}

function deleteRow(row){
    let r = row.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(r);
}