import { composeWith } from "ramda"
const Right = (x) => ({
  chain: (f) => f(x), // flattens while it maps
  map: (f) => Right(f(x)),
  fold: (_f, g) => g(x),
  toString: `Right(${x})`,
})

const Left = (x) => ({
  chain: (_f) => Left(x),
  map: (_f) => Left(x),
  fold: (f, _g) => f(x),
  toString: `Left(${x})`,
})

const tryCatch = (f) => {
  try {
    Right(f())
  } catch (e) {
    return Left(e)
  }
}

function composeP(...fns) {
  return composeWith(async (nextFn, lastFn) => nextFn(await lastFn))(fns)
}

export { composeP, tryCatch, Right, Left }
