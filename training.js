const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function kalkulatorSederhanaNode() {
  readline.question('Masukkan bilangan pertama: ', (angka1Str) => {
    readline.question('Masukkan operator (+, -, *, /): ', (operator) => {
      readline.question('Masukkan bilangan kedua: ', (angka2Str) => {
        const angka1 = parseFloat(angka1Str);
        const angka2 = parseFloat(angka2Str);

        if (isNaN(angka1) || isNaN(angka2)) {
          console.log("Input tidak valid. Harap masukkan angka.");
          readline.close();
          return;
        }

        let hasil;

        if (operator === "+") {
          hasil = angka1 + angka2;
        } else if (operator === "-") {
          hasil = angka1 - angka2;
        } else if (operator === "*") {
          hasil = angka1 * angka2;
        } else if (operator === "/") {
          if (angka2 === 0) {
            console.log("Pembagian dengan nol tidak diizinkan!");
            readline.close();
            return;
          }
          hasil = angka1 / angka2;
        } else {
          console.log("Operator tidak valid. Harap masukkan +, -, *, atau /.");
          readline.close();
          return;
        }

        console.log(`${angka1} ${operator} ${angka2} = ${hasil}`);
        readline.close();
      });
    });
  });
}

// Jalankan fungsi kalkulator untuk Node.js
kalkulatorSederhanaNode();