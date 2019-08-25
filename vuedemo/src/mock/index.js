const Mock = require("mockjs")
Mock.mock("http://localhost:8080/homeData","get",require("./data/homeData"))