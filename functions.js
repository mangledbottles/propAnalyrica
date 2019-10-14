
module.exports = {

    setupUrlParameters: function(pageIteration){
        // return       '?parameters=%7B%22api_key%22:%22edc5958166db14ec6e4ef9c0cfbac7017210c550%22,%22query%22:%7B%0A%20%20%22page%22%20:%202,%0A%20%20%22sort_ascending%22%20:%20%220%22,%0A%20%20%22sort_by%22%20:%20%22priority_date%22,%0A%20%20%22perpage%22%20:%2025%0A%7D%7D&source=iphone'
        // return encodeURIComponent(
        //     '?parameters={"api_key":"'+API_KEY+'","query":{ "page" : '+pageIteration+', "sort_ascending" : "0", "sort_by" : "priority_date", "perpage" : 25 }}&source=iphone'
        // );
        return '?parameters='+ JSON.stringify('{"api_key":"'+API_KEY+'","query":{ "page" : '+pageIteration+', "sort_ascending" : "0", "sort_by" : "priority_date", "perpage" : 25 }}') + '&source=iphone';
    }
};