
const superagent = require('axios');


class Nsfw {
  constructor() {}

  async anal() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=anal"
    );
    const message = await data.message;
    return message;
  }

  async fourk() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=4k"
    );
    const message = await data.message;
    return message;
  }

  async ass() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=ass"
    );
    const message = await data.message;
    return message;
  }

  async gonewild() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=gonewild"
    );
    const message = await data.message;
    return message;
  }

  async pgif() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=pgif"
    );
    const message = await data.message;
    return message;
  }

  async pussy() {
    const { data }  = await superagent.get(
      "https://nekobot.xyz/api/image?type=pussy"
    );
    const message = await data.message;
     return message;

  }

  async thigh() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=thigh"
    );
    const message = await data.message;
    return message;
  }

  async boobs() {
    const { data } = await superagent.get(
        "https://nekobot.xyz/api/image?type=boobs"
      );
      const message = await data.message;
      return message;
  }

  async hentaiass() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hass"
    );
    const message = await data.message;
    return message;
  }

  async hentai() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hentai"
    );
    const message = await data.message;
    return message;
  }

  async hmidriff() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hmidriff"
    );
    const message = await data.message;
    return message;
  }

  async hentaithigh() {
    const { data } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hthigh"
    );
    const message = await data.message;
    return message;
  }

  

}

  


module.exports = Nsfw;
