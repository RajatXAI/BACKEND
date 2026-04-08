const fs = require("fs");

const filePath = "./data.json";

// load data
let data = { 
    users: [] 
};

if (fs.existsSync(filePath)) {
  data = JSON.parse(fs.readFileSync(filePath));
}

// save function
function saveData(){
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { data, saveData };