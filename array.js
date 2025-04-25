// let array = [0, 1, 2, 3, 4]
// console.log(array)

// //pada array kaliam mampu menampung semua type data

// let dimensi1 = [0, 1, 2, 3, 4]
// let dimensi2 = [[1, 2, 3],[4, 5, 6, 7]]
// console.log(dimensi1[1])
// console.log(dimensi1[2])

// console.log(dimensi2[0])
// console.log(dimensi2[1])

// console.log(dimensi2[0][0])
// console.log(dimensi2[1][1])

// console.log('array and looping')

// for (let i = 0; i < dimensi2.length; i++) {
//  for (let j = 0; j < dimensi2[i].length; j++){
//  console.log(dimensi2[i][j])
//  }
// }

let orang = [
 ["bryan", "indonesia", "41 tahun"],
 ["fasya", "jepang", "18 tahun"]];

 console.log('biodata orang')

 for (let i = 0; i < orang.length; i++) {
 for (let j = 0; j < orang[i].length; j++) {
  if (j === 0){
    console.log(`nama: ${orang[i][j]}`)
  }
  else if (j === 1){
    console.log(`alamat: ${orang[i][j]}`)
  }
  else {
    console.log(`umur: ${orang[i][j]}`)
  }
    }
    console.log('')
 }