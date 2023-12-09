
let compareNumbers = function(value1, value2) {

    let inValue1 = document.getElementById("value1").value;
    
    let inValue2 = document.getElementById("value2").value;
    
    if(isNaN(inValue1)) {
        document.getElementById("results").innerHTML = "Enter a number for Value 1";
        return;
    }
    
    if(isNaN(inValue2)) {
        document.getElementById("results").innerHTML = "Enter a number for Value 2";
        return;
    }
    
    let parseValue1 = parseFloat( inValue1 );
    
    let parseValue2 = parseFloat( inValue2 );
    
    if ( isNaN(parseValue2) ) {
        document.getElementById("results").innerHTML = "Enter a number for Value 1";
        return;
    }
    if ( isNaN(parseValue2) ) {
        document.getElementById("results").innerHTML = "Enter a number for Value 2";
    }
    
    if( parseValue1 == parseValue2) {
        document.getElementById("results").innerHTML = "Equal";
    }
    else {
        if (parseValue1 > parseValue2) {
            document.getElementById("results").innerHTML = inValue1;
        }
        else {
            document.getElementById("results").innerHTML = inValue2;
        }
    }
}