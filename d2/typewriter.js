const sentence = "hello there from lighthouse labs\n";

let holdTime = 50;
for (const char of sentence) {
  setTimeout(() => {
    // process.stdout.write(char);
    console.log(char);
  }, holdTime);
  holdTime += 50;
}
console.log(holdTime);



// using c stlye
// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, i * 50)
// }
