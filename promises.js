
// function doTask(name) {
//   const p = new Promise((resolve, reject) => {
//     console.log(`${name} has started`);
//     const duration =   Math.floor(Math.random() * 5000);
//     setTimeout(() => {
//       resolve(`${name} has ended after ${duration} milliseconds`);
//     }, duration);
//   });
//   return p;
// }

// const p1 = doTask('A');
// const p2 = doTask('B');
// const p3 = doTask('C');

// Promise.all([p1, p2, p3])
//   .then((arr) => {
//     arr.forEach(result => {console.log(result);})
//     return doTask('D');
//   })
//   .then(result => {
//     console.log(result);
//   });



