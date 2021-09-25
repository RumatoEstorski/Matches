let n = 13;
document.write(n);
let str = " ";
for (let i = 0; i < n; i++) {
    str += "| ";
}
alert(n + str);
while (n > 0) {
    alert("You turn!");
    let m = prompt("Get the matches!");
    if (isNaN(n) || isNaN(m)) {
        break;
    } else if (m > 3) {
        break;
    }
    n -= m;
    for (let i = 0; i < n; i++) {
        str += "| ";
    }
    alert(n + str);
    alert("My turn!");
    let rnd = Math.floor(Math.random() * 3) + 1;
    if (n <= 0) {
        alert("You win!");
        break;
    } else if (n - rnd <= 0) {
        alert("I win!");

        break;
    }
    n -= rnd;
    for (let i = 0; i < n; i++) {
        str += "| ";
    }
    alert(n + str);

    str = " ";

}