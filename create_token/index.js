"use strict";
/**
 * Created by kevinbayes on 9/06/16.
 */
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
module.exports = function (context, req) {
    var start = new Date();
    var hash = crypto.createHash("md5")
        .update("someid", "utf8").digest("utf8");
    var token = jwt.sign({ usr: hash, aid: "sometenant", expr: new Date() }, "secret");
    context.res = {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: token })
    };
    context.done();
    console.log("Time taken to complete: " + (new Date().getTime() - start.getTime()) + "ms");
};
//# sourceMappingURL=index.js.map