setTimeout(() => {
  console.log("4311o th3r3 w0r1d");
}, 3000);

const output = "4311o th3r3 w0r1d";

setTimeout(()=> {
  console.log(output);
  setTimeout(()=> {
    console.log(output);
    setTimeout(()=> {
      console.log(output);
    }, 1000)
  }, 1000)
},1000)


setInterval(() => {
  console.log("4311o th3r3 w0r1d");
}, 3000);
