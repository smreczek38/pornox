const superagent = require("axios")

class nsfw {
  constructor() {
    this.methods = [
        "anal",
        
      ];

  }

  async anal() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=pussy"
    );
  const res = new Promise(resolve => resolve(body));
 
  return res;
   
  }
  
}

module.exports=nsfw;






