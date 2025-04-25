function Helloworld() {
    return 'Hello world'
}  //fungsi ini punya nilai "hello world"
console.log(Helloworld());

//return mempunyai nilai fungsi 
//jika tidak memakai return maka undifined

function tambahAngka(angka1, angka2) {
    return angka1 + angka2;
}
console.log(tambahAngka(3,4))
console.log(tambahAngka(5,4))
console.log(tambahAngka(6,3))
console.log(tambahAngka(7,7))
console.log(tambahAngka(2,5))

function balikKata(kata){
    let hasilBalik = ""; // Inisialisasi variabel hasilBalik dengan string kosong
    for(let i = kata.length - 1; i >= 0; i--) {
        hasilBalik += kata[i];
    }
    return hasilBalik;
}

console.log(balikKata("gajah"));   // Output: hajag
console.log(balikKata("jerapa"));  // Output: aparaj
console.log(balikKata("beruang")); // Output: gnaureb
console.log(balikKata("cheta"));   // Output: atehc
console.log(balikKata("tikus"));   // Output: sukit


function nambahinHurufBesarSetelahSpasi(kata) {
    let result = ""; // Inisialisasi variabel result dengan string kosong
    for (let i = 0; i < kata.length; i++) {
        if ((i === 0 || kata[i - 1] === ' ')) {
            result += kata[i].toUpperCase();
        } else {
            result += kata[i];
        }
    }
    return result;
}

console.log(nambahinHurufBesarSetelahSpasi('bryan dewa wicaksana'));
console.log(nambahinHurufBesarSetelahSpasi('fasya alghoniyyu'));
console.log(nambahinHurufBesarSetelahSpasi('leopatra telunya'));
console.log(nambahinHurufBesarSetelahSpasi('afrah anindita sukisman'));