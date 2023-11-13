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
	  outpu.innerText = data;
  })
  .catch((err) => {
    console.log(err);
  });


