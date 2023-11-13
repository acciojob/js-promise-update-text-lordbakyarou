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

const her = pro()
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err);
  });
