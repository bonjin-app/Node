const wait1Seconds = new Promise((resolve, reject) => {
    console.log('Promise Start');

    setTimeout(() => {
        reject('asdfasdf');
        resolve("Promise");
    }, 1000);
});

wait1Seconds.then((result) => {
    console.log("Promise Success")
})