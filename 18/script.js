// Grab all time information
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// Convert time into seconds
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, seconds) => total + seconds)

let secondsLeft = seconds;

// Calculate hours
const hours = Math.floor(secondsLeft / 3600);

// Store remaining seconds
secondsLeft = secondsLeft % 3600;

// Calculate minutes
const mins = Math.floor(secondsLeft / 60);

// Again, store remaining seconds
secondsLeft = seconds % 60;

// Output
console.log(hours, mins, secondsLeft);

// TODO: Use only one reduce function