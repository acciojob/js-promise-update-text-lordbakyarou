const outpu = document.getElementById("output");

function pro() {
  return new Promise((res, rej) => {
    if (true) {
      setTimeout(() => {
        res("Hello, world!");
      }, 1000);
    }
  });
}

let hey;

const her = pro()
  .then((data) => {
    return data;
  }).then((data)=>{
		hey = data;
	  outpu.innerText = hey
	  return data;
  })
  .catch((err) => {
    console.log(err);
  });

console.log(hey);

