"use strict";
//Node不能识别ts的syntax，执行node app.ts命令，node会把ts文件当js文件处理，但是一旦遇到了ts的syntax就不能运行了，所以需要线编译，在运行js文件
//Node中需要tsc来编译文件，需要运行node来执行文件
//创建过程
//npm init
//tsc --init
//设置tsconfig.json
/*
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
*/
//npm install --save express body-parser
//npm install --save-dev nodemon
//npm install --save-dev @types/node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/todos", todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
