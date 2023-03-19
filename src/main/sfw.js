
const axios = require('axios');

class Sfw {
  constructor() {
    this.baseUrl = "https://purrbot.site/api"
  }

  async blush() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/blush/gif`);
    const message = await data.link;
    return message;
  }

  async cry() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/cry/gif`);
    const message = await data.link;
    return message;
  }

  async cuddle() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/cuddle/gif`);
    const message = await data.link;
    return message;
  }
  async dance() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/dance/gif`);
    const message = await data.link;
    return message;
  }

  async hug() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/hug/gif`);
    const message = await data.link;
    return message;
  }

  async kiss() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/kiss/gif`);
    const message = await data.link;
    return message;
  }

  async neko() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/neko/gif`);
    const message = await data.link;
    return message;
  }

  async slap() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/slap/gif`);
    const message = await data.link;
    return message;
  }

  async tail() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/tail/gif`);
    const message = await data.link;
    return message;
  }

  async smile() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/smile/gif`);
    const message = await data.link;
    return message;
  }

  async comfy() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/comfy/gif`);
    const message = await data.link;
    return message;
  }

  async background() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/background/gif`);
    const message = await data.link;
    return message;
  }

  async dance() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/dance/gif`);
    const message = await data.link;
    return message;
  }

  async okami() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/okami/gif`);
    const message = await data.link;
    return message;
  }

  async pat() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/pat/gif`);
    const message = await data.link;
    return message;
  }
  async poke() {
    const { data } = await axios.get(`${this.baseUrl}/img/sfw/poke/gif`);
    const message = await data.link;
    return message;
  }

}

  


module.exports = Sfw;
