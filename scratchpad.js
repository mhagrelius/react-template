/* eslint-disable */
// const fetch = require("node-fetch")
// global.fetch = fetch
// import { http } from "./src/lib/utils/http"
// import { GraphQLClient } from "graphql-request"

const { validate } = require("graphql")

// function graph(url) {
//   const methodObj = {
//     query: (request, variables) => ({}),
//     mutate: (request, variables) => ({}),
//   }

//   return {
//     ...methodObj,
//   }
// }
// // query
// // mutate

// http("https://jsonplaceholder.typicode.com/todos/2").getJSON() //?

// Semigroups

const Sum = (x) => ({
  x,
  concat: (other) => Sum(x + other.x),
})

const res = Sum(3).concat(Sum(5)) //?

const { List } = require('immutable-ext')

// Validation
const validate = (spec, obj) =>
  List(Object.keys(spec)

const validations = {name: isPresent, email: isPresent }
const obj = {name: 'matthew', email: 'test@test.com'}
validate(validations, obj)