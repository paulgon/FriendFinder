var path = require("path");
module.exports = function (app) {
    // GET path to survey.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //ROUTE path for home.html
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};