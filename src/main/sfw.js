
const axios = require('axios');

class Sfw {
  constructor() {
    this.baseUrl = "https://nekos.life/api/v2"
  }

  async waifu() {
    const { data } = await axios.get(`${this.baseUrl}/img/waifu`);
    const message = await data.link;
    return message;
  }

  async spoiler() {
    const { data } = await axios.get(`${this.baseUrl}/img/spoiler`);
    const message = await data.link;
    return message;
  }

  async cuddle() {
    const { data } = await axios.get(`${this.baseUrl}/img/cuddle`);
    const message = await data.link;
    return message;
  }
  async owoify() {
    const { data } = await axios.get(`${this.baseUrl}/img/owoify`);
    const message = await data.link;
    return message;
  }

  async hug() {
    const { data } = await axios.get(`${this.baseUrl}/img/hug`);
    const message = await data.link;
    return message;
  }

  async kiss() {
    const { data } = await axios.get(`${this.baseUrl}/img/kiss`);
    const message = await data.link;
    return message;
  }

  async neko() {
    const { data } = await axios.get(`${this.baseUrl}/img/ngif`);
    const message = await data.link;
    return message;
  }

  async slap() {
    const { data } = await axios.get(`${this.baseUrl}/img/slap`);
    const message = await data.link;
    return message;
  }

  async foxgirl() {
    const { data } = await axios.get(`${this.baseUrl}/img/fox_girl`);
    const message = await data.link;
    return message;
  }

  async meow() {
    const { data } = await axios.get(`${this.baseUrl}/img/meow`);
    const message = await data.link;
    return message;
  }

  async smug() {
    const { data } = await axios.get(`${this.baseUrl}/img/smug`);
    const message = await data.link;
    return message;
  }

  async lizard() {
    const { data } = await axios.get(`${this.baseUrl}/img/lizard`);
    const message = await data.link;
    return message;
  }

  async feed() {
    const { data } = await axios.get(`${this.baseUrl}/img/feed`);
    const message = await data.link;
    return message;
  }

  async avatar() {
    const { data } = await axios.get(`${this.baseUrl}/img/avatar`);
    const message = await data.link;
    return message;
  }

  async pat() {
    const { data } = await axios.get(`${this.baseUrl}/img/pat`);
    const message = await data.link;
    return message;
  }
  async poke() {
    const { data } = await axios.get(`${this.baseUrl}/img/poke`);
    const message = await data.link;
    return message;
  }

}

  


module.exports = Sfw;
