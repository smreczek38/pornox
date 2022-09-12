
const superagent = require('superagent');


class Nsfw {
  constructor() {
    this.methods = [
        "anal",
        "fourk",
        "ass",
        "gonewild",
        "pgif",
        "pussy",
        "thigh",
        "boobs",
        "hentaiass",
        "hentai",
        "hmidriff",
        "hentaithigh"
        
        
      ];

  }

  async anal() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=anal"
    );
    return body.message;
  }

  async fourk() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=4k"
    );
    return body.message;
  }

  async ass() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=ass"
    );
    return body.message;
  }

  async gonewild() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=gonewild"
    );
    return body.message;
  }

  async pgif() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=pgif"
    );
    return body.message;
  }

  async pussy() {
    const { body }  = await superagent.get(
      "https://nekobot.xyz/api/image?type=pussy"
    );
    
     return body.message;

  }

  async thigh() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=thigh"
    );
    return body.message;
  }

  async boobs() {
    const { body } = await superagent.get(
        "https://nekobot.xyz/api/image?type=boobs"
      );
      return body.message;
  }

  async hentaiass() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hass"
    );
    return body.message;
  }

  async hentai() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hentai"
    );
    return body.message;
  }

  async hmidriff() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hmidriff"
    );
    return body.message;
  }

  async hentaithigh() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hthigh"
    );
    return body.message;
  }

  

}

  


module.exports = Nsfw;
