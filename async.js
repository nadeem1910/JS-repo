// Promises
let ans = new Promise((res, rej) => {
    var n = Math.floor(Math.random() * 10);

    if (n < 5) {
        res(); // No need to return, just call res()
    } else {
        rej(); // No need to return, just call rej()
    }
});

ans.then(function () {
    console.log(`n is less than 5`);
}).catch(() => {
    console.log(`n is above 5`);
});


// async await
// async function username() {
//     try {
//         let raw = await fetch(`https://randomuser.me/api/`);
//         let ans = await raw.json();
//         console.log(ans);
//     } catch (error) {
//         console.error("Error fetching the data:", error);
//     }
// }

// username();
