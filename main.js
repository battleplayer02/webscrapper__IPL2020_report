const { fs, path, cheerio, creareDir, request } = require("./includes");
const allMatches = require("./modules/allMatches");
const makeTeams = require("./modules/makeTeams");



creareDir("IPL 2020")

const teams__url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/points-table-standings"
makeTeams(teams__url)


let all__matches = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results"

allMatches(all__matches)