let clicks = [];        // store timestamps of each tap
let min_clicks = 10;    // minimum taps before BPM calculation

let tapButtonVariable = document.getElementById('tapButton');
tapButtonVariable.addEventListener('click', getBPM);

function getBPM () {
// Get the timestamp for NOW and save it in a variable
    let date_right_now = Date.now(); 

        clicks.push(date_right_now);
// Check if the length of the array is equal to or greater than min_clicks (10) - if yes, calculate!
    if (clicks.length >= min_clicks) {
        let calculatedBPM = calculateBPMFromClicks(clicks);
        alert("Your calculated BPM is: " + calculatedBPM);
        clicks = [];
    }
}

function calculateBPMFromClicks(clickTimestamps) {
    let totalInterval = 0;
   
    for (let i = 1; i < clickTimestamps.length; i++) {
    let interval = clickTimestamps[i] - clickTimestamps [i-1];
    totalInterval += interval;
    }
    
    let numIntervals = clickTimestamps.length -1;
    let averageInterval = totalInterval / numIntervals;
    return Math. round(60000/averageInterval);
}