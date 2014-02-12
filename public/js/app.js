$(document).ready(initialize);

function intialize() {

}

function searchFlickr(query) {
  var apiKey = "a050beda319aa138dfd0f6b9724c8155"
  var perPage = 1
  var page = 1
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $getJSON(url, displayImage)
}

function displayImage(data) {
  photo = data.photos.photo[1]
  var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
  $('.image-div p').remove()
  $('image-div').css('background', url)
}