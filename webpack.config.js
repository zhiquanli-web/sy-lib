const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "sy_utils.js",
    // Commonjs: 社区规范的CommonJS，这个里面没有module对象
    // CommonJS2：Node实现的CommonJS, 这个里面有module对象(module.exports)
    libraryTarget: "umd", // 同时支持 AMD/Commonjs/CommonJS2/浏览器
    library: "syUtils",
    globalObject: "this", // 设置为this: 在node环境中代表当前模块，在浏览器中代表window对象(通常设置为this ['this' | 'document'])
  },
};
