xmlDoc = loadXMLDoc("gradeReport.xml");

gradesNames = {1:"Sorry, but u can better", 2:"Bad", 3:"Normal", 4:"Very Good", 5:"Amazing"};
headers = [" ", "Student", "Grade", "Grade name"];
data = [xmlDoc.getElementsByTagName("gradeRecord"),
  xmlDoc.getElementsByTagName("student"),
  xmlDoc.getElementsByTagName("grade"),
  xmlDoc.getElementsByTagName("grade")];

body = document.getElementsByTagName("body")[0];

table = document.createElement("table");
tableBody = document.createElement("tbody");
headersRow = document.createElement("tr");

for (i = 0; i < headers.length; i++) {
  cell = document.createElement("th");
  cellText = document.createTextNode(headers[i]);
  cell.appendChild(cellText);
  headersRow.appendChild(cell);
}

tableBody.appendChild(headersRow);

for (i = 0; i < data[0].length; i++) {

  row = document.createElement("tr");

  for (j = 0; j < data.length; j++) {

    cell = document.createElement("td");
    cellText = null;
    if (j == 0) {
      cellText = document.createTextNode(data[j][i].getAttribute("id"));
    } else if (j == 1) {
      cellText = document.createTextNode(data[j][i].firstChild.nodeValue);
    } else if (j==2) {
      cellText = document.createTextNode(data[j][i].firstChild.nodeValue);
    } else {
      cellText = document.createTextNode(gradesNames[data[j][i].firstChild.nodeValue]);
    }
    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  tableBody.appendChild(row);

}

table.appendChild(tableBody);
body.appendChild(table);