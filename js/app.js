const endDate = "09 Nov 2024 11:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);     // Convert endDate string to a Date object
    const now = new Date();            // Get the current date and time
    const diff = (end - now) / 1000;   // Get the difference in seconds between now and endDate

    if(diff < 0) return;

    // convert into days  
    inputs[0].value = Math.floor(diff/3600/24); // days formula
    // convert into hours
    inputs[1].value = Math.floor(diff/3600) % 24; // for hours
    // convert into minutes
    inputs[2].value = Math.floor(diff/60) % 60; // for minutes
    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;  // for seconds show
}
// initial call the function
// clock();

// har ek second pe call kr na hai
setInterval(
    () => {
        clock();
    },1000);
// setInterval(
//     () => {
//         clock();
//     },1000 * 60 * 24 * 31); // for 1 month refresh

/**
 * Calculation
 * (end of time - now of time) / 1000 = it's for seconds
 * 1 day = 24 hours
 * 1 hour = 60 mins
 * 60 mins = 3600 sec
 */