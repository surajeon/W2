const sentence = "hello there from lighthouse labs";

// let holdTime = 50;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, holdTime);
//   holdTime += 50;
// }
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  time += 100;
}
  setTimeout(() => {
  process.stdout.write('\n');
}, sentence.length * 100)


// console.log(holdTime);



// using c stlye
// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, i * 50)
// }
