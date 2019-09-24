var xhr= new XMLHttpRequest();

xhr.onload = function () {
  document.getElementById('content').innerHTML=xhr.responseText;
};

xhr.open('GET', 'data/data.html', true);
xhr.send(null);


