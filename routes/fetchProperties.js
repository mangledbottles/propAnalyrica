var express = require("express");
var router = express.Router();
var request = require("request");


router.get('/', function(req, res){
    console.log("Working");
    //res.send("Hello");

    request(
        API_REQUEST_URL + GET_RENTALS + '?parameters=%7B%22api_key%22:%22edc5958166db14ec6e4ef9c0cfbac7017210c550%22,%22query%22:%7B%0A%20%20%22page%22%20:%202,%0A%20%20%22sort_ascending%22%20:%20%220%22,%0A%20%20%22sort_by%22%20:%20%22priority_date%22,%0A%20%20%22perpage%22%20:%2025%0A%7D%7D&source=iphone',
        function(error, response, body){
            res.send(JSON.parse(body));
            // console.table(JSON.parse(body['result']['result']['ads'][0]));
            // console.log(JSON.parse(body['result']['result']['ads'][0]));
            console.table(JSON.parse(body).result.results.ads);
        }
    );
});

module.exports = router;