// setTimeout Example: Executes code after a delay 
console.log("setTimeout Example:");

setTimeout(() => {
    console.log("This message appears after 3 seconds (3000ms).");
}, 3000);

// setInterval Example: Executes code repeatedly at specified intervals
console.log("setInterval Example:");

let counter = 0;
const intervalId = setInterval(() => {
    counter += 1;
    console.log(`Interval Message: Count = ${counter}`);

    // Stop the interval after 5 iterations
    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped after 5 iterations.");
    }
}, 1000); // Executes every 1 second (1000ms)

/* Output Explanation:
   - The setTimeout message will appear once after 3 seconds.
   - The setInterval message will appear every second, counting up to 5.
*/
