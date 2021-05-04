//1. Method Objek Array: Array.reverse()
// Method Array.reverse() digunakan untuk membalikkan urutan dari elemen di dalam array. Method ini akan mengubah array asal.

console.log("1.")
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.toString());
arr1.reverse();
console.log(arr1.toString());
console.log("\n")

//2. Method Objek Array: Array.sort()
// Method Array.sort() digunakan untuk mengurutkan elemen dari array. Jika method ini dipanggil tanpa argumen, elemen dari array akan diurutkan berdasarkan abjad. Jika elemen di dalam array bukan huruf, maka akan dikonversi sementara menjadi string, baru kemudian dilakukan proses pengurutan. Jika ditemukan elemen dengan nilai null atau undefined, akan di tempatkan pada urutan akhir.

console.log("2.")
var arr1 = ["zulkifli","andi","erik","joko","dina"];
arr1.sort();
console.log(arr1.toString());
var arr2 = [3,5,2,8,,,1,31,22,44,33,11];
arr2.sort();
console.log(arr2.toString());
console.log("\n")

//3. Method Array.concat() berfungsi untuk ”penyambungan” array. Hasil akhir dari pemanggilan fungsi ini adalah array baru dengan penambahan dari method concat(). Elemen yang ditambahkan diinput sebagai argumen dari method concat().

console.log("3.")
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());
  
var arr2=arr1.concat(11,22,33,44);
console.log(arr2.toString());
console.log("\n")

//4. Method Objek Array: Array.slice()
// Method Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal. Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan.

// Jika hanya diberikan 1 argumen, maka method ini akan mengembalikan array baru dimulai dari posisi argumen sampai dengan akhir array. Jika argumen bernilai negatif, maka perhitungan akan dimulai dari akhir array.

console.log("4.")
var arr1 = [1,2,3,4,"a","b","c","d"];
var arr2 = arr1.slice(2,4)
console.log(arr2.toString());

var arr3 = arr1.slice(4)
console.log(arr3.toString());

var arr4 = arr1.slice(-2)
console.log(arr4.toString());

var arr5 = arr1.slice(-5,-2)
console.log(arr5.toString()); 
console.log("\n")

//5. Method Objek Array: Array.splice()
// Walaupun memiliki nama method yang mirip dengan slice(), method splice() sepenuhnya berbeda. Method splice() adalah method ’serba-bisa’ yang bisa digunakan untuk memotong array, menambahkan elemen array, bahkan melakukan keduanya sekaligus.

// Tidak seperti method slice() dan concat(), pemanggilan method ini akan mengubah array asal.

// Jika hanya diberikan satu buah argumen, method splice() akan berfungsi ’menghapus’ array asal mulai dari index yang diberikan, dan mengembalikan nilai array yang ’dihapus’.

console.log("5.")
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());
var arr2 = arr1.splice(4)
console.log(arr1.toString());
console.log(arr2.toString());
console.log("\n")

//6. Method Objek Array: Array.push() dan Array.pop()
// Method push() dan pop() digunakan untuk menambahkan dan mengurangi elemen dari array. Kedua method ini memungkinkan pemrosesan array sabagai sebuah ’stack’ atau tumpukan dengan metoda ”first in last out”.

// Method push() akan menambahkan elemen array pada akhir dari array, sedangkan method pop()  akan menghapus elemen terakhir dari array. Kedua method ini akan mengubah array asal dan mengembalikan nilai jumlah elemen array.

console.log("6.")
var arr1 = [];
  
arr1.push("a","b","c");
console.log(arr1.toString());
  
arr1.push("d");
console.log(arr1.toString());
  
arr1.pop();
console.log(arr1.toString());
  
arr1.pop();
console.log(arr1.toString());
console.log("\n")

//7. Objek Array: Array.unshift() dan Array.shift()
// Method Array.unshift() dan Array.shift() hampir sama dengan Array.push() dan Array.pop() perbedaannya, method unshift() dan shift() akan menambahkan atau menghapus elemen array di awal array.

// Method unshift() akan menambahkan elemen baru diawal array, dan menggeser seluruh eleman yang ada. Method shift() akan menghapus elemen paling awal array, dan menggeser ke bawah seluruh elemen lain di dalam Array. Kedua method ini akan mengubah array asal.

console.log("7.")
var arr1 = [];
  
arr1.unshift("a","b","c");
console.log(arr1.toString());
  
arr1.unshift("d");
console.log(arr1.toString());
  
arr1.shift();
console.log(arr1.toString());
  
arr1.shift();
console.log(arr1.toString());
console.log("\n")

//8. Method toString() dan toLocaleString() berfungsi untuk menkonversi array menjadi string. Dalam contoh-contoh yang kita lakukan dalam tutorial ini, hampir semuanya menggunakan method toString untuk menampilkan hasil array.

// Kedua method ini akan mengkonversi masing-masing elemen menjadi string, lalu menyambungnya menjadi sebuah string dengan karakter koma sebagai pemisah.

// Perbedaan antara toString() dan toLocaleString() adalah method toLocaleString() akan mengkonversi elemen berdasarkan setingan lokal web browser, namun anda tidak akan melihat perbedaannya.

console.log("8.")
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());
console.log(arr1.toLocaleString());
console.log("\n")

//9. Method join () membuat dan mengembalikan string baru dengan menggabungkan semua elemen dalam array (atau objek mirip array), dipisahkan dengan koma atau string pemisah yang ditentukan. Jika array hanya memiliki satu item, maka item tersebut akan dikembalikan tanpa menggunakan pemisah.

console.log("9.")
const elements = ['Api', 'Air', 'Udara'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));
console.log("\n")

//10. Method include () menentukan apakah sebuah array menyertakan nilai tertentu di antara entri-entrinya, mengembalikan true atau false sebagaimana mestinya.

console.log("10.")
const array1 = [1, 2, 3];
console.log(array1.includes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));
console.log("\n")