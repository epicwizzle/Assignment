/**
 * This javascript program is used in the index.html to answer some questions
 * 
 * @author Esenwa Michael 
 * 
 * Date: 1st Febuary, 2023
 */

/**
 * This function is used to determine if an input is a number,
 * if it is equal to zero,
 * if it is between 13 and 17 inclusively
 * 
 */
function group_1_choice_1() {
    // Output result
    let q1_input = document.getElementById("q1_input").value;
    let q1_output = document.getElementById("q1_output");

    console.log(q1_output)

    // https://stackoverflow.com/questions/18042133/check-if-input-is-number-or-letter-javascript
    if (isNaN(q1_input)) {
        q1_output.innerHTML = "Not a number";
    }
    else {
        if (q1_input == 0 || (q1_input >= 13 && q1_input <= 17)) {
            q1_output.innerHTML = "In range";
        }
        else {
            q1_output.innerHTML = "Not in range";
        }
    }

}

/**
 * This function is used to convert a number of days into years, 
 * months and days
 *  
 */
function group_1_choice_2() {
    // Output result
    let q2_input = document.getElementById("q2_input").value;
    let q2_output = document.getElementById("q2_output");
    q2_output.innerHTML = "";
    if (isNaN(q2_input) || (q2_input <= 0)) { //Assuming zero is not a postive number
        q2_output.innerHTML += "Non-numeric or Negative";
    }
    else {
        if (!isNaN(q2_input) && (q2_input > 0)) {
            let year = parseInt(q2_input / 365.35);
            let month = parseInt((q2_input % 365.35) / 30.44);
            //https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
            let day = Math.round(((q2_input % 365.35) % 30.44) * 100) / 100;
            q2_output.innerHTML += year + " year(s), " + month +
                " month(s), " + day + " day(s)";
        }
    }


}

/**
 * This function is used to determine if an input is a vowel,
 * and if it is y
 * 
 */
function group_2_choice_1() {
    // Output result
    let q3_input = document.getElementById("q3_input").value;
    let q3_output = document.getElementById("q3_output");
    let vowels = "aeiouAEIOU";
    if (q3_input == "Y" || q3_input == "y") {
        q3_output.innerHTML = "Sometime";
    }
    else {
        for (let i = 0; i < vowels.length; i++) {
            if (q3_input == vowels[i]) {
                q3_output.innerHTML = "A Vowel";
                break;
            }
            else {
                q3_output.innerHTML = "Not a vowel";
            }
        }
    }
}
/** 
 * This function is used to determine the factorial of a number
 * 
**/

function group_2_choice_3() {
    let q4_input = document.getElementById("q4_input").value;
    let q4_output = document.getElementById("q4_output");

    product = 1;
    //console.log("This is to show the product")
    for (let j = 1; j < parseInt(q4_input) + 1; j++) {
        //console.log("Display product ")
        product *= j;
    }
    q4_output.innerHTML = product;
}

/**
 * 
 * This function is used to convert a binary number to a decimal number
 * using  the little endian method
**/

function group_3_choice_1() {
    let q5_input = document.getElementById("q5_input").value;
    let q5_output = document.getElementById("q5_output");


    // console.log("check statement") 
    if (q5_input.length >= 10 && q5_input.length <= 20 && !isNaN(q5_input)) {

        let x = 0;
        // console.log("loop")
        for (let q = 0; q < q5_input.length + 1; q++) {
            // console.log("binary")
            if (q5_input[q] == 1 || q5_input[q] == 0) {
                x += (q5_input[q] * Math.pow(2, q));
            }
            else {
                break;
            }


            /* Used this to convert NAN to a number (~~NAN)
            https://www.tutorialspoint.com/How-is-NaN-converted-to-Number-in-JavaScript#:~:text=Using%20Ternary%20Operator-,Using%20the%20OR%20(%7C%7C)%20Operator,operator%20will%20return%20that%20Number.*/
            // binary += ~~((q5_input[q]) * (2**(q5_input.length-1-q)))
            /*  if(isNaN(x)){
            console.error("It is not a number") } */

        }
        q5_output.innerHTML = x;
    }
    else {
        q5_output.innerHTML = 0;
    }


}