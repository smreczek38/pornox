
const axios = require('axios');


class Nsfw {
  constructor() {
    this.baseUrl =`https://nekobot.xyz/api`
  }

  async anal() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=anal`
    );
    const message = await data.message;
    return message;
  }

  async fourk() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=4k`
    );
    const message = await data.message;
    return message;
  }

  async ass() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=ass`
    );
    const message = await data.message;
    return message;
  }

  async gonewild() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=gonewild`
    );
    const message = await data.message;
    return message;
  }

  async pgif() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=pgif`
    );
    const message = await data.message;
    return message;
  }

  async pussy() {
    const { data }  = await axios.get(
      `${this.baseUrl}/image?type=pussy`
    );
    const message = await data.message;
     return message;

  }

  async thigh() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=thigh`
    );
    const message = await data.message;
    return message;
  }

  async boobs() {
    const { data } = await axios.get(
        `${this.baseUrl}/image?type=boobs`
      );
      const message = await data.message;
      return message;
  }

  async hentaiass() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=hass`
    );
    const message = await data.message;
    return message;
  }

  async hentai() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=hentai`
    );
    const message = await data.message;
    return message;
  }

  async hmidriff() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=hmidriff`
    );
    const message = await data.message;
    return message;
  }

  async hentaithigh() {
    const { data } = await axios.get(
      `${this.baseUrl}/image?type=hthigh`
    );
    const message = await data.message;
    return message;
  }

  

}

  


module.exports = Nsfw;
