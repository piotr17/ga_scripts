var casper = require('casper').create({
    logLevel: "verbose",
    debug: true,
    pageSettings: {
        loadImages:  true,        // The WebPage instance used by Casper will
        loadPlugins: true         // use these settings
    },
});
var links = []
var base_url = "http://www.lucaricciweb.it/";
var ga_params = "?utm_source=casper_campaign&utm_medium=casper_media&utm_term=casper_term&utm_content=casper_content&utm_campaign=casper_campaignname";
var ParamUrl = base_url + ga_params;

function getLinks() {
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function (e) {
            return e.getAttribute(href);
    });
}


casper.start(base_url, function(){
    links = getLinks(base_url);
    return links
});

for (i = 0; i < links.length; i++){
    casper.thenOpen(links[i], function(){
        var filename = this.echo(this.getTitle());
        console.log(filename);    
    });
};


casper.run();




