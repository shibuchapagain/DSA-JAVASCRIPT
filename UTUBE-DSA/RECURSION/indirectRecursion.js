let money = 111;
let totalApple = 0;
let perApple = 10;
function buyApple(x) {
  //   console.log(x);
  if (x >= perApple) {
    console.log(`I HAVE ${x} RS. ${totalApple} APPLE.`);
    buyMore(x);
  } else {
    console.log(`I HAVE ${x} RS AND TOTAL APPLE IS: ${totalApple}`);
  }
}

function buyMore(x) {
  totalApple++;
  buyApple(x - perApple);
}

buyApple(money);

// OUTPUT :
// I HAVE 111 RS. 0 APPLE.
// I HAVE 101 RS. 1 APPLE.
// I HAVE 91 RS. 2 APPLE.
// I HAVE 81 RS. 3 APPLE.
// I HAVE 71 RS. 4 APPLE.
// I HAVE 61 RS. 5 APPLE.
// I HAVE 51 RS. 6 APPLE.
// I HAVE 41 RS. 7 APPLE.
// I HAVE 31 RS. 8 APPLE.
// I HAVE 21 RS. 9 APPLE.
// I HAVE 11 RS. 10 APPLE.
// I HAVE 1 RS AND TOTAL APPLE IS: 11
