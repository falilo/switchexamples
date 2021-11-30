



function formHandler(event){


    let degreeInput = document.getElementById("degreeInput").value;
    degreeInput = parseInt(degreeInput);

    let coversionType = document.getElementById("conversionType").value;

    let answer = "";


    if(coversionType === "Fahrenheit"){
        /* this mean convert to Fahrenheit */

        answer = (degreeInput * 1.8) + 32

    } else if( coversionType === "Celsius"){
        answer = (degreeInput - 32) / 1.8
    }

   // alert("It is working" + answer);

   document.getElementById("answer").value = answer
    event.preventDefault();
}

// listener
let form = document.getElementById("temperatureForm");
form.addEventListener("submit", formHandler);