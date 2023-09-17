const beep = function (time) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
};

for (let i = 2; i < process.argv.length; i++) {
  let num = Number(process.argv[i]);

  if (typeof num === "number" && num >= 0) {
    beep(process.argv[i]);
  }
}
