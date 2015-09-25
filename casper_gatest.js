var casper = require('casper').create({
    logLevel: "verbose",
    debug: true
});
var links = []
var base_url = "http://lucaricciweb.it/";
var ga_params = "?utm_source=casper_campaign&utm_medium=casper_media&utm_term=casper_term&utm_content=casper_content&utm_campaign=casper_campaignname";

var ParamUrl = base_url + ga_params;

function getLinks() {
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links,function (e) {
            return e.getAttribute(href);
         });
};

casper.start(ParamUrl);

casper.then(function(){
    links = this.evaluate(getLinks);
    return links;
    echo(links);
});

casper.run(function () {
    for (i=0; i < links.length;i++) {
    casper.thenOpen(links[i]);
}
    this.exit();
});


