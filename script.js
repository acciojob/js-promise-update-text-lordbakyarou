const outpu = document.getElementById("output");

function pro() {
  return new Promise((res, rej) => {
    if (true) {
      setTimeOut(() => {
        res("Hello, world!");
      }, 1000);
    }
  });
}
outpu.innerText = pro()
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err);
  });