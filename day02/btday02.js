//let b = []
arr1 = [1, 2, 3, 4, 5, 6];
arr2 = [1, 6, 8, 9, 0];
// for (let i = 0; i < arr1.length; i++) {
//     for(let a=0; a < arr2.length; a++) {
//         if (arr2[a] == arr1[i]) {
//             c = arr2[a]
//             b.push(c)
//         }
//         else {
//             continue
//         }
//     }
// }
// console.log(b)
var chung = arr1.filter((item) => arr2.includes(item)); // arr2.includes(item): dùng để xét xem item có trong arr2 hay không
console.log(chung);

arr = [1, 54, 6, 7];
function make(du_lieu) {
  return (du_lieu += 5);
}
const newArr = arr.map(make);
console.log(newArr);

m = [1, 2, 4, 5, 6, 7];
n = [3, 5, 875, 8, 96];
function check() {
  for (let i = 0; i < m.length; i++) {
    if (m[i] == 1 || m[i] == 8 || m[i] == 10 || m[i] == 96 || m[i] == 7) {
      m.splice(i, 1);
      continue;
    }
  }
  for (let l = 0; l < n.length; l++) {
    if (n[l] == 1 || n[l] == 8 || n[l] == 10 || n[l] == 96 || n[l] == 7) {
      n.splice(l, 1);
      continue;
    }
  }
}
check();
console.log(m);
console.log(n);

players = [
  { id: 11, name: "Messi", age: 33 },
  { id: 12, name: "Ronaldo", age: 34 },
  { id: 13, name: "Young", age: 35 },
  { id: 14, name: "Mane", age: 21 },
  { id: 15, name: "Salah", age: 24 },
];
let playersModified = Object.fromEntries(players)
console.log(playersModified)

  const obj = players.reduce((result, item) => {
    result[item.id] = { name: item.name };
    return result;
  }, {});
  
  console.log(obj); // { 1: { name: "Alice" }, 2: { name: "Bob" }, 3: { name: "Charlie" } }

//string.split(separator, limit) : dùng để tách chuỗi , separator quy định kí tự phân cách , limit quy định số lần tách
// array.slice(start, end) : dùng để lấy phần tử bằng chỉ số, start: vị trí bắt đầu, end: vị trí kết thúc, lúc in ra sẽ đc phần tử từ vị trí start đến trc vị trí end(ko bao gồm end), nếu start là âm thì bắt đầu từ cuối mảng
