const { cheerio, request } = require("../includes");
const goToPlayerAndAddData = require("./goToPlayerAndAddData");


module.exports = (url) => {
    request(url, (err, res, html) => {
        if (err) {
            console.log(err);
        } else {
            let $ = cheerio.load(html);
            let teamone = $("#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.card > div.match-header > div.event > div > div > div.teams > div.team.team-gray > div.name-detail > a > p").text().trim()
            let teamtwo = $("#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.card > div.match-header > div.event > div > div > div.teams > div:nth-child(2) > div.name-detail > a > p").text().trim()
            let twoteams = $(".match-scorecard-page .Collapsible")

            const result = $("#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.card > div.match-header > div.event > div > div > div.status-text > span").text().trim();
            const dateandvenue = $(".match-info.match-info-MATCH .description").text().split(",")
            const date = dateandvenue[2].split("(")[0].trim()
            const venue = dateandvenue[1].trim()
            // console.log(date,venue);
            for (let i = 0; i < twoteams.length; i++) {
                // console.log("**********Result",result,"************");
                const teamname = $(twoteams[i]).find("h5.header-title.label ").text().split("INNINGS")[0].trim();
                const batsmansoftheteam = $(twoteams[i]).find(".table.batsman tbody tr")
                // console.log('`````````````````````````````````````````````````````');
                // console.log(teamname);
                for (let j = 0; j < batsmansoftheteam.length - 1; j += 2) {
                    const name = $(batsmansoftheteam[j]).find(".batsman-cell.text-truncate").text();

                    const run = $(batsmansoftheteam[j]).find("td:nth-child(3)").text().trim();
                    const ball = $(batsmansoftheteam[j]).find("td:nth-child(4)").text().trim();
                    const fours = $(batsmansoftheteam[j]).find("td:nth-child(5)").text().trim();
                    const sixes = $(batsmansoftheteam[j]).find("td:nth-child(6)").text().trim();
                    const strikerate = $(batsmansoftheteam[j]).find("td:nth-child(7)").text().trim();
                    const opponent = i == 0 ? teamtwo : teamone
                    let batsmanOBJ = {
                        result, name, run, ball, fours, sixes, strikerate, opponent, date, venue
                    }
                    goToPlayerAndAddData(teamname,name,batsmanOBJ)
                    // console.log(batsmanOBJ);
                }
            }
        }
    })
}