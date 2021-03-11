export function log() {
  return {
    info: (message) => console.log(message),
    error: (message) => console.error(message),
  }
}
