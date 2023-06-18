import axios from "axios";
const config = {
  withCredentials: true,
  baseURL: process.env.VUE_APP_API_URL
}

class Http {

  constructor(queryTool) {
    this._http = queryTool.create(config)
    this.createConfig()
    this.setToken()
  }

  async reqWrapper(req, ...reqArgs) {
    const res = await req(...reqArgs)
      .catch(async err => {
        if (err.status == 402) {
          await baseRefreshReq();
          const reqData = await req(...reqArgs);
          return reqData;
        }
        return Promise.reject(err);
      })
    return res;
  }

  async get(url) {
    return await this.reqWrapper(this._http.get, url)
  }

  async post(url, body, opt={}) {
    return await this.reqWrapper(this._http.post, url, body, opt)
  }

  async put(url, body) {
    return await this.reqWrapper(this._http.put, url, body)
  }

  async delete(url) {
    return await this.reqWrapper(this._http.delete, url)
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

  async baseRefreshReq() {
    const res = await this.get('/user/refresh')
    .catch(err => console.log(err))
    res && this.rebootToken(res.accessToken);
  }

  rebootToken(token) {
    this.removeToken()
    localStorage.setItem(
      process.env.VUE_APP_TOKEN_NAME, 
      token
    )
    this.setToken()
  }

  createConfig() {
    this._http.interceptors.response.use(
      res => res.data,
      err => Promise.reject(err.response)
    );
  }
}

export default new Http(axios)