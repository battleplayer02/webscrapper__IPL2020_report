const { fs, path } = require("../includes")

module.exports = (foldername, playername, matchobj) => {
    let loc = path.join(__dirname + "/../IPL 2020/" + foldername + "/" + playername + ".json");
    if (fs.existsSync(loc)) {
        let olddata = fs.readFileSync(loc)
        olddata = JSON.parse(olddata)
        olddata.push(matchobj)
        fs.writeFileSync(loc,JSON.stringify(olddata))
    } else {
        let arr = []
        arr.push(matchobj)
        fs.writeFileSync(loc,JSON.stringify(arr))
    }
}