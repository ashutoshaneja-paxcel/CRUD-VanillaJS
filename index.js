var recordID = 1;
var records = new Array();

function userData(id, fname, lname, mailid, country){
this.id=id;
this.fname=fname;
this.lname=lname;
this.mailid=mailid;
this.country=country;
}

function printRecord(){
    let FirstName = document.getElementById("createRecordForm").elements[0].value; 
    let LastName = document.getElementById("createRecordForm").elements[1].value; 
    let MailID = document.getElementById("createRecordForm").elements[2].value; 
    let Country = document.getElementById("createRecordForm").elements[3].value; 

    if(country==""){
    document.getElementById("country").required = true;
    }
    
    var table = document.getElementById("displayRecordTable");
    var row = table.insertRow(-1);
    var recordIDColumn=row.insertCell(0);
    var fnameColumn = row.insertCell(1);
    var lnameColumn = row.insertCell(2);
    var mailColumn = row.insertCell(3);
    var countryColumn = row.insertCell(4);

    let uniqueRowID = "row"+recordID;
    row.setAttribute("id","uniqueRowID");

    recordIDColumn.innerHTML = recordID;
    fnameColumn.innerHTML = FirstName;
    lnameColumn.innerHTML = LastName;
    mailColumn.innerHTML = MailID;
    countryColumn.innerHTML = Country;   

    obj = new userData(recordID,FirstName,LastName,MailID,Country);        
    records.push(obj);
      
    recordID++;
    clearForm();
}

function clearForm(){
    document.getElementById("createRecordForm").reset();
    document.getElementById("searchRecordIDForm").reset();
    console.info(records);
}

function searchRecordID(){
    let inputID = document.getElementById("searchRecordIDForm").elements[0].value;
    // if(records[inputID-1].includes(inputID))

    var flag=flag;
    for(var i=0;i<records.length;i++) {
        if(records[i].id==inputID){
            let index = i;
            alert("Present");
            $('#showRecordModal').modal('show');
            showRecord(index);
            flag=true;
            break;
        }
        else{
            flag=false;
        }
    }

    if(flag==false)
    alert("Incorrect ID!");

    clearForm();
}

function showRecord(index){
    document.getElementById("editRecordForm").elements[0].value = index;
    document.getElementById("editRecordForm").elements[1].value = records[index].fname;
    document.getElementById("editRecordForm").elements[2].value = records[index].lname;
    document.getElementById("editRecordForm").elements[3].value = records[index].mailid;
    document.getElementById("editRecordForm").elements[4].value = records[index].country;
}

 function editRecord(){
    let index = document.getElementById("editRecordForm").elements[0].value; 
    records[index].fname = document.getElementById("editRecordForm").elements[1].value;
    records[index].lname = document.getElementById("editRecordForm").elements[2].value;
    records[index].mailid = document.getElementById("editRecordForm").elements[3].value;
    records[index].country = document.getElementById("editRecordForm").elements[4].value;

    
 }

