import { composeP } from "./functional"

async function get(url, headers) {
  return await fetch(url, { headers })
}

async function postJSON(url, headers, payloadObj) {
  return await fetch(url, {
    "Content-Type": "application/json",
    ...headers,
    method: "POST",
    body: JSON.stringify(payloadObj),
  })
}

async function buildResponseFromJSON(response) {
  try {
    return response.ok === true
      ? {
          success: true,
          content: await response.json(),
        }
      : { success: false }
  } catch (err) {
    return {
      success: false,
      content: err,
    }
  }
}

function http(url) {
  let _headers = []

  const methodObj = {
    getJSON: () => composeP(buildResponseFromJSON, get)(url, _headers),
    postJSON: (payload) => composeP(buildResponseFromJSON, postJSON)(url, _headers, payload),
  }

  return {
    withJwtToken: (token) => {
      _headers["Authorization"] = `Bearer ${token}`
      return methodObj
    },
    withHeaders: (headers) => {
      _headers = [..._headers, ...headers]
      return methodObj
    },
    ...methodObj,
  }
}

export { get, http, postJSON }
