//while 
//for

// let i = 0;
// while (i < 5) {
//     console.log(i)
//     i++
// }

//didalam looping kiri pengurangan kanan pertambahan

// let name = "bryan";

 //ada yang namanya methode length untuk tipe data string dan array
 //methode length mengembalikan nilai angka, total huruf pada string atau total element yang ada pada array

// for (i = 0; i < name.length; i++){
//     console.log(name[i])
// } 

//pada tipe data string atau array ada yang namanya indexing
//dimana index itu sudah pasti berawal dari 0

// console.log(name [0] + name [5]) 


// let name = "fasya"; //length 5, sedangkan index itu dari 0, f -> 0, a -> 1, s -> 2, y -> 3, a -> 4
// let result = "";

// for ( i = name.length - 1; i >= 0; i--){ //i = 5 - 1; 4 - 1 >=0; i--
//     result += name[i]; //a => ay => ays => aysa => aysaf 
// }
// console.log(result)

// nested loop 

let result = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(j)
    }
    console.log('')
}
console.log('selesai')