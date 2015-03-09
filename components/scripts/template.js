$(function() {
var Mustache = require('mustache');
 
$.getJSON('js/data.json', function(data) {
var template = $('#speakerstpl').html();
var html = Mustache.to_html(template, data);
$('#speakers').html(html);
}); //getJSON
}); //function //takes care of merging a template to take care of speakers on tour  gets a file from data.json
//see javascript and json 
//javascript templating with mustache.js