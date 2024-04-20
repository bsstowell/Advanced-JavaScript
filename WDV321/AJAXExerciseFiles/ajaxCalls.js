function retrieveFile1() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {

            let fileOneRetrieval = JSON.parse(xmlhttp.responseText);
            //console.log(xmlhttp.responseText);
            let temp = document.getElementsByTagName("template")[0];
            console.log(temp);
            let clone = temp.content.cloneNode(true);
            clone.querySelector("#id").innerText = fileOneRetrieval.student_id;
            clone.querySelector("#first").innerText = fileOneRetrieval.student_first_name;
            clone.querySelector("#last").innerText = fileOneRetrieval.student_last_name;
            clone.querySelector("#major").innerText = fileOneRetrieval.student_major;
            clone.querySelector("#credits").innerText = fileOneRetrieval.student_credits;
            clone.querySelector("#gpa").innerText = fileOneRetrieval.student_gpa;
            clone.querySelector("#date").innerText = fileOneRetrieval.student_registration_date;
            document.body.appendChild(clone);
        }
    }
    
    xmlhttp.open("GET","900006361.json",true);
    
    xmlhttp.send();
}

function retrieveFile2() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
       
            let fileTwoRetrieval = JSON.parse(xmlhttp.responseText);
            let temp = document.getElementsByTagName("template")[0];
            let clone = temp.content.cloneNode(true);
            clone.querySelector("#id").innerText = fileTwoRetrieval.student_id;
            clone.querySelector("#first").innerText = fileTwoRetrieval.student_first_name;
            clone.querySelector("#last").innerText = fileTwoRetrieval.student_last_name;
            clone.querySelector("#major").innerText = fileTwoRetrieval.student_major;
            clone.querySelector("#credits").innerText = fileTwoRetrieval.student_credits;
            clone.querySelector("#gpa").innerText = fileTwoRetrieval.student_gpa;
            clone.querySelector("#date").innerText = fileTwoRetrieval.student_registration_date;
            document.body.appendChild(clone);
        }
    }
    
    xmlhttp.open("GET","903998004.json",true);
    
    xmlhttp.send();
}

function retrieveFile3() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        
        let fileThreeRetrieval = JSON.parse(xmlhttp.responseText);
            let temp = document.getElementsByTagName("template")[0];
            let clone = temp.content.cloneNode(true);
            clone.querySelector("#id").innerText = fileThreeRetrieval.student_id;
            clone.querySelector("#first").innerText = fileThreeRetrieval.student_first_name;
            clone.querySelector("#last").innerText = fileThreeRetrieval.student_last_name;
            clone.querySelector("#major").innerText = fileThreeRetrieval.student_major;
            clone.querySelector("#credits").innerText = fileThreeRetrieval.student_credits;
            clone.querySelector("#gpa").innerText = fileThreeRetrieval.student_gpa;
            clone.querySelector("#date").innerText = fileThreeRetrieval.student_registration_date;
            document.body.appendChild(clone);
        }
    }
    
    xmlhttp.open("GET","900668871.json",true);
    
    xmlhttp.send();
}




    function fetchFile1() {
        getText("900006361.json");

        async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
            let file1Retrieval = JSON.parse(myText);
            let temp = document.getElementsByTagName("template")[0];
            let clone = temp.content.cloneNode(true);
            clone.querySelector("#id").innerText = file1Retrieval.student_id;
            clone.querySelector("#first").innerText = file1Retrieval.student_first_name;
            clone.querySelector("#last").innerText = file1Retrieval.student_last_name;
            clone.querySelector("#major").innerText = file1Retrieval.student_major;
            clone.querySelector("#credits").innerText = file1Retrieval.student_credits;
            clone.querySelector("#gpa").innerText = file1Retrieval.student_gpa;
            clone.querySelector("#date").innerText = file1Retrieval.student_registration_date;
            document.body.appendChild(clone);
        }
    }
    function fetchFile2() {
        getText("903998004.json");

        async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
            let file2Retrieval = JSON.parse(myText);
            let temp = document.getElementsByTagName("template")[0];
            let clone = temp.content.cloneNode(true);
            clone.querySelector("#id").innerText = file2Retrieval.student_id;
            clone.querySelector("#first").innerText = file2Retrieval.student_first_name;
            clone.querySelector("#last").innerText = file2Retrieval.student_last_name;
            clone.querySelector("#major").innerText = file2Retrieval.student_major;
            clone.querySelector("#credits").innerText = file2Retrieval.student_credits;
            clone.querySelector("#gpa").innerText = file2Retrieval.student_gpa;
            clone.querySelector("#date").innerText = file2Retrieval.student_registration_date;
            document.body.appendChild(clone);
        }
    }
    function fetchFile3() {
        getText("900668871.json");

        async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
            let file3Retrieval = JSON.parse(myText);
            let temp = document.getElementsByTagName("template")[0];
            let clone = temp.content.cloneNode(true);
            clone.querySelector("#id").innerText = file3Retrieval.student_id;
            clone.querySelector("#first").innerText = file3Retrieval.student_first_name;
            clone.querySelector("#last").innerText = file3Retrieval.student_last_name;
            clone.querySelector("#major").innerText = file3Retrieval.student_major;
            clone.querySelector("#credits").innerText = file3Retrieval.student_credits;
            clone.querySelector("#gpa").innerText = file3Retrieval.student_gpa;
            clone.querySelector("#date").innerText = file3Retrieval.student_registration_date;
            document.body.appendChild(clone);
        }
    }