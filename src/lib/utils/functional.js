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

export default {
  tryCatch,
  Right,
  Left,
}
