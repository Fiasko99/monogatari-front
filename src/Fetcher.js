import axios from "axios";

const config = {
  withCredentials: true,
  baseURL: process.env.VUE_APP_API_URL
}

class Http {

  constructor(queryTool) {
    this._http = queryTool.create(config)
    this.#createConfig()
    this.setToken()
  }

  async #reqWrapper(req, ...reqArgs) {
    const res = await req(...reqArgs)
    .catch(async err => {
      if (err?.response?.status == 402) {
        const res = await this.get('/refresh')
        this.removeToken()
        localStorage.setItem(
          process.env.VUE_APP_TOKEN_NAME, res.data.accessToken)
        this.setToken()
        const reqData = await req(...reqArgs)
        return reqData
      }
    })
    return res
  }

  async get(url) {
    return await this.#reqWrapper(this._http.get, url)
  }

  async post(url, body, opt={}) {
    return await this.#reqWrapper(this._http.post, url, body, opt)
  }

  async put(url, body) {
    return await this.#reqWrapper(this._http.put, url, body)
  }

  async delete(url) {
    return await this.#reqWrapper(this._http.delete, url)
  }

  setToken() {
    const token = localStorage.getItem(process.env.VUE_APP_TOKEN_NAME);
    if (token) {
      this._http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }

  removeToken() {
    this._http.defaults.headers.common["Authorization"] = null;
  }

  #createConfig() {
    this._http.interceptors.response.use(
      response => response,
      (error) => {
        return Promise.reject(error)
      }
    );
  }
}

export default new Http(axios)