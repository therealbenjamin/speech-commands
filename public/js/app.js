$(document).ready(initialize);

function initialize() {
  if (annyang) {
    annyang.debug()
    console.log('it started')
    annyang.addCommands(commands);
    annyang.start();
  } 
}

function searchFlickr(query) {
  var apiKey = "a050beda319aa138dfd0f6b9724c8155"
  var perPage = 1
  var page = 1
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&text=' + query + '&per_page=' + perPage + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, displayImage)
}

function displayImage(data) {
  console.log(data)
  photo = data.photos.photo[0]
  var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
  $('.image-div p').remove()
  $('.image-div').css({
    'background': url,
    'background-repeat' : 'no-repeat',
    'background-position': 'center'
  });
}

var commands = {
  'I want *desires': searchFlickr
}