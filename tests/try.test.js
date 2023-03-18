const superagent = require("axios")

class nsfw {
  constructor() {
  }

  async blush() {
    const body = await superagent.get(
      "https://purrbot.site/api/img/sfw/blush/gif"
    );
  
    console.log(await body.data.link)
   
  }
  
}

module.exports=nsfw;






