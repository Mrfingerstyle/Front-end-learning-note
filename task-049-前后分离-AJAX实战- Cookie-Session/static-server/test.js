const fs = require('fs');

// 读取数据库
const usersString = fs.readFileSync('./db/users.json').toString()
const userArray = JSON.parse(usersString)

// console.log(typeof usersString);
// console.log(usersString);
// console.log(typeof userArray);
console.log(userArray);

const user_3 = { "id": 3, "name": "tom", "password": "yyy" }
userArray.push(user_3)

// 写入到数据库
const string = JSON.stringify(userArray)
fs.writeFileSync('./db/users.json', string)
