let nilai = 35;

if (nilai >= 65 && nilai <= 70){
    nilai = "A"
}
else if (nilai >= 45 && nilai <= 55){
    nilai = "B";
}
else if (nilai >= 35 && nilai <= 45){
    nilai = "C"
} console.log(nilai)



// and semua kondisi harus terpenuhi maka akan menghasilkan true
// or salah satu kondisi terpenuhi maka akan menghasilkan true
// not diatas angka
nilai = 59

let banding = nilai >= 50 && nilai <= 60;
console.log(banding, "&&") 
let banding2 = nilai >= 40 && nilai <= 60;
console.log(banding2, "||") 
let banding3 = nilai != 30;
console.log(banding3, "!=")

//apa bedanya == dan ===
let y = "50"; //tipe data int
let x = 50; //tipe daya str

let banding4 = x == y;
console.log(banding4, '4');
let banding5 = x === y;
console.log(banding5, '5');

//if else bisa dibikin bersarang

let number = 3
if (number > 5) {
    if (number % 2 === 0 ) 
    { console.log("lebih besar dari 5 dan genap")
    } else { console.log("lebih besar dari 5 dan ganjil")      
    }
} else {
 if (number % 2 === 0 ) 
    { console.log("lebih kecil sama dengan 5 dan genap")
   } else { console.log("lebih kecil sama dengan 5 dan ganjil")
   }
}

