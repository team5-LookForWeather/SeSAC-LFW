const models = require("../model");

/* 메인페이지 */
exports.index = (req, res) => {
    var data = {};
    if (req.session.user != undefined) {
        data["isLogin"] = true;
        data["user"] = req.session.user;
    }
    else data["isLogin"] = false;

    res.render('main', data);
}
