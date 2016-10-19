var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
request({
	url:"http://www.acfun.tv/v/list110/index.htm",
	method:"GET"
}, function(e,r,b){
	if(e || !b){return;}
	var $ = cheerio.load(b);
	var result = [];
	var titles = $(".mainer .item a.title");
	for(var i=0;i<titles.length;i++){
		result.push($(titles[i]).text());
	}
	fs.writeFileSync("result.json",JSON.stringify(result));
});
