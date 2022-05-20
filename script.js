var button=document.querySelector(".btn");
button.addEventListener("click",entries);
function entries(){
    if(validation()){
        readEntries()
        insertEntries(readEntries())
        resetEntries()
        alert("You are successfully enter in Parkink Lot");
    }

}
// read the entries of parking lot
function readEntries(){
    var readEntry={}
    readEntry["ownerName"]=document.querySelector("#name").value;
    readEntry["vehicleName"]=document.querySelector("#vehicle-name").value;
    readEntry["vehicleNumber"]=document.querySelector("#vehicle-number").value;
    readEntry["entryDate"]=document.querySelector("#entry-date").value;
    readEntry["exitDate"]=document.querySelector("#exit-date").value;
    return readEntry
}
// insert the value of entries in the parking lot
function insertEntries(addEntry){
    var table=document.querySelector("#table");
    var tr=table.insertRow(table.length);
    var td1=tr.insertCell(0);
    var td2=tr.insertCell(1);
    var td3=tr.insertCell(2);
    var td4=tr.insertCell(3);
    var td5=tr.insertCell(4);
    var td6=tr.insertCell(5);
    td1.innerHTML=addEntry.ownerName;
    td2.innerHTML=addEntry.vehicleName;
    td3.innerHTML=addEntry.vehicleNumber;
    td4.innerHTML=addEntry.entryDate;
    td5.innerHTML=addEntry.exitDate;
    td6.innerHTML="<button onClick='remove(this)'class='delete btn-primary'>X</button>"
}
// check the validation of entries
function validation(){
    var ownerName=document.querySelector("#name").value;
    var vehicleName=document.querySelector("#vehicle-name").value;
    var vehicleNumber=document.querySelector("#vehicle-number").value;
    var entryDate=document.querySelector("#entry-date").value;
    var exitDate=document.querySelector("#exit-date").value;
    var vehicleNumberReges=/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/;
    if(ownerName==""){
        document.querySelector("#ownername").innerHTML="**Required to fill**";
        return false
    } else{document.querySelector("#ownername").innerHTML="";}
    if(vehicleName==""){
        document.querySelector("#vehiclename").innerHTML="**Required to fill**";
        return false
    }else{document.querySelector("#vehiclename").innerHTML="";}
    if(vehicleNumber==""){
        document.querySelector("#vehiclenumber").innerHTML="**Required to fill**";
        return false
    }else{document.querySelector("#vehiclenumber").innerHTML="";}
    if(entryDate==""){
        document.querySelector("#entrydate").innerHTML="**Required to fill**";
        return false
    }else{ document.querySelector("#entrydate").innerHTML="";}
    if(exitDate==""){
        document.querySelector("#exitdate").innerHTML="**Required to fill**";
        return false
    }else{document.querySelector("#exitdate").innerHTML="";}
    if(entryDate>exitDate){
        document.querySelector("#exitdate").innerHTML="**Exit date must be greater than entry date**";
        return false;
    }else{document.querySelector("#exitdate").innerHTML="";}
    if(!vehicleNumberReges.test(vehicleNumber)){
        document.querySelector("#vehiclenumber").innerHTML="**Vehicle number is not valid**";
        return false;
    }else{document.querySelector("#vehiclenumber").innerHTML="";}
    return true
}
// reset the entries of parking lot
function resetEntries(){
    document.querySelector("#name").value="";
    document.querySelector("#vehicle-name").value="";
    document.querySelector("#vehicle-number").value="";
    document.querySelector("#entry-date").value="";
    document.querySelector("#exit-date").value="";
}

// delete the entries in the parking lot 
function remove(row){
    if(confirm("Are you want to delete your entry ?")){
    var removeRow=row.parentElement.parentElement;
    removeRow.remove();
    }

}


//  search event of table
const Search = () =>{
    var input_value = document.getElementById("text").value.toUpperCase();
    var table = document.getElementById("table");
    var tr = table.getElementsByTagName("tr");
    for(var i=0; i<tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            var text_value = td.textContent;
            if(text_value.toUpperCase().indexOf(input_value)>-1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display= "none";
            }
        }
    }
}