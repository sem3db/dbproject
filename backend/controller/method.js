const { URL } = require("url");

const dotenv = require("dotenv");
dotenv.config();

class Method {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.type = req.type;
    this.url = new URL("http://localhost:" + process.env.port + req.url);
    this.seperator = req.url.split(/[/,?]/);
    this.user = null;
  }
  getPath(ind) {
    return this.seperator[ind];
  }

  serachURL(query) {
    return this.url.searchParams.get(query);
  }

  getToken() {}

  setUser(user) {
    this.user = user;
  }

  getBody() {
    return this.req.body;
  }
}

module.exports = Method;
