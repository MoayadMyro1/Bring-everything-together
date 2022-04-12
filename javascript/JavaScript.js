
const btn = document.getElementById("SumbmitBtn");
const btn2 = document.getElementById("addtoBtn");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let msg = document.getElementsByClassName("msg");
    console.log(msg);
    //HTMLCollection[p.alert - danger.msg]
    //give me the first element of HTMLAllCollection
    msg = msg[0];
    msg.style.display = "block";
    //hide after 7 sec
    setTimeout(function () {
        msg.style.display = "none";
        intervalIsGoingOn = false;
    }, 7000);
});
//You have to use at least an Event listener, For loop, and Function.\
function addtodom(num,element)
{
   
    for (let i = 0; i < num; i++)
    {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = element.insertRow(element.rows.length);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add some text to the new cells:
        cell1.innerHTML = "NEW CELL" + i;
    
        cell2.innerHTML = "Another CELL" + i;
    }
}
btn2.addEventListener("click", function (event) {
    //event.preventDefault();
    let tbl = document.querySelector("#Table1");
    console.log(tbl);
    //call function with given parameter number and element
    addtodom(2, tbl);
   
});