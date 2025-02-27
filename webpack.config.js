const path = require("path"); // модуль что-бы привязаь доступ к абсолютным путям
const { Extension } = require("typescript");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // создаем правила что куда от куда и тп
  mode: "development", // свойство которое требует пакет что бы он пониал что он делает на данный момент разработка, или можно поствить production
  devtool: "eval-source-map", // свойство что бы webpack мог показывать в дев тулс источник ишибки а не только скампеларованый файл, // так же нужно включить в tsconfig, это source-map на true
  entry: "./src/ts/main.ts", //от куда
  module: {
    // блогодоря модулю говорим что мы будем делать с файлами
    rules: [
      // задаем правила проверок и компиляции
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "src/img/",
            },
          },
        ],
      },
      {
        test: /\.ts$/i, // регулярное выражение которое говорит проверять что бы фаил соответствовал ts в конце
        use: "ts-loader", // что будет компилироваьт в js
        include: [path.resolve(__dirname, "./src/ts")], // указываем корневое расположения файла которое мы будем компилировать
      },
      {
        test: /\.css$/i, // регулярное выражение которое говорит проверять что бы фаил соответствовал ts в конце
        use: ["css-loader", "style-loader"], // что будет компилироваьт
        include: [path.resolve(__dirname, "./src/css/style.css")],
      },
    ],
  },
  resolve: {
    // добовляем доступные расширения что бы webpack понимал какие файлы он мог компелироввать
    extensions: [".ts", ".js"], // те расширения которые мы хотим что бы webpack компелировал // что бы пользоваться импортом экспортом
  },
  output: {
    // куда
    // publicPath: "./docs",
    filename: "index.js", // название создаваемого файла
    path: path.resolve(__dirname, "docs"), // абсолютный путь
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/html/add.html" })],
};
