const { cheerio, request } = require("../includes");
const goToMatchURL = require("./goToMatchURL");

module.exports=(url)=>{
    request(url,(err,res,html)=>{
        if(err){
            console.log(err);
        }else{
            let selectorTool = cheerio.load(html);
            let matches = selectorTool(".container-fluid.p-0 .row.no-gutters div.col-md-8")
            for (let index = 0; index < matches.length; index++) {
                let matchdata = selectorTool(matches[index]).find(".match-cta-container a")
                let matchURL = "https://www.espncricinfo.com"+selectorTool(matchdata[2]).attr("href")
                goToMatchURL(matchURL);
                // console.log(matchURL);
            }
        }
    })
}