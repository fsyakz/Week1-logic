// prediksi cuaca
let cuaca ="mendung"

if (cuaca === "cerah"){
    console.log("hari ini cuaca bagus mari kita keluar")
}
else if (cuaca === "hujan"){
    console.log("sebaiknya bawa payung atau jaz hujan")
}
else if (cuaca === "mendung"){
    console.log("sepertinya akan turun hujan sebentar lagi")
}
else {
    console.log("cuaca tidak dikenali")
}


// positif negatif
let number = 0;

if (number % 2 === 0){
    if(number > 0) {
        console.log("bilangan positif")
    }
    else if(number < 0){
        console.log("bilangan negatif")
    }
    else if(number === 0) {
        console.log("sama dengan nol")
    }
}

// nilai
let nilai = 100;

if (nilai >= 80 && nilai <= 100){
    console.log("LULUS")
} else if(nilai >= 60 && nilai <= 80){
    console.log("KURANG LULUS")
}else {
    console.log("TIDAK LULUS")
}

// menentukan nilai
let bilangan1 = 2;
let bilangan2 = 2;

if (bilangan1 > bilangan2) {
    console.log(`${bilangan1} adalah bilangan terbesar`)
  }  else if (bilangan1 < bilangan2){
    console.log(`${bilangan2} adalah bilangan terbesar`)
} else {
    console.log("bilangan sama")
}

//kalkulator