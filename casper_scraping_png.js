var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

var base_url = "http://infodent.it";
var ga_params = "?utm_source=casper_campaign&utm_medium=casper_media&utm_term=casper_term&utm_content=casper_content&utm_campaign=casper_campaignname";

casper.start(base_url);

casper.then(function() {
    links = this.evaluate(getLinks);
    for (i = 0; i < links.length; i++){
        casper.thenOpen(links[i], function(){
            var filename = this.echo(this.getTitle());
            console.log(filename);  
        });
    };
});

casper.run();
