const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ p1_text: "p1" })
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ p2_text: "p2" })
    }, 2000)
})

Promise.all([p1, p2]).then((result) => {
    console.log("p1 = " + result[0].p1_text);
    console.log("p2 = " + result[1].p2_text);
})

// p1.then((result) => {
//     console.log("p1 = " + result.p1_text);
//     return p2;
// }).then((result) => {
//     console.log("p2 = " + result.p2_text)
// })