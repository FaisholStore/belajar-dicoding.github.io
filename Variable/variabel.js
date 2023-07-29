
/*
INI ADALAH VARIABEL DARI LET
dalam potongan kode di atas, Anda mendeklarasikan dua variabel menggunakan let, yaitu Firstname dan Lastname, untuk menyimpan dua bagian dari nama seseorang. Kemudian, Anda membuat variabel baru dengan nama FULLNAME yang digunakan untuk menggabungkan nilai dari Firstname dan Lastname.

Mari kita jelaskan langkah demi langkah:
let Firstname = "muhammad faishol ";
let Lastname = "wijanarko";
Anda mendeklarasikan dua variabel, yaitu Firstname dan Lastname. Variabel Firstname berisi nilai "muhammad faishol " (dengan satu spasi di akhir), dan variabel Lastname berisi nilai "wijanarko" 

Menggabungkan Variabel:


let FULLNAME = Firstname + " " + Lastname;
Anda membuat variabel baru bernama FULLNAME, dan nilai dari variabel ini adalah hasil penggabungan nilai dari Firstname dan Lastname. Anda menggunakan operator + untuk menggabungkan nilai dan juga menambahkan spasi di antara mereka untuk memisahkan nama depan dan nama belakang.

Mencetak Hasil:
console.log('FULLNAME:', FULLNAME);
akhirnya, Anda mencetak hasil penggabungan nama lengkap (nama depan dan nama belakang) dengan menggunakan console.log(). Outputnya akan menjadi:

FULLNAME: muhammad faishol  wijanarko

*/

// let Firstname ="muhammad faishol ";
// let Lastname = "wijanarko";


// //membuat let baru 
// let FULLNAME =Firstname + '' + Lastname;
// console.log ('FULLNAME:', FULLNAME + '\n' ) ;



const namadepan = "muhammad faishol ";
const namabelakang = "wijanarko";   

const namee = "John";
const age = 30;
const isStudent = false;

const person = {
  namadepan: "Jane",
  namabelakang: "Doe",
  age: 25,
};
const colors = ["red", "green", "blue"];
const sayHello = function () {
  console.log("Hello!");
};



const combinedString = `
  FULLNAME: ${namadepan}${namabelakang}
 Combined String:${namee} ${age} ${isStudent} ${person.namadepan} ${person.namabelakang} ${colors.join(", ")} ${sayHello.toString()}
`; 

console.log(combinedString);