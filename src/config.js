
let serverConfig = {
  baseURL: 'http://localhost:8000/api',
  timeout: 1000,
  withCredentials: false,
  responseType: 'json', // default
  maxRedirects: 5, // default,
  renderError: true
}

export {
  serverConfig
}
