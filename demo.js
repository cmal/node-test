function fetchAll(urls, cb) {
  var len = urls.length;
  var responses = new Array(len);
  urls.forEach(function(url, index) {
    request(url, function(resp) {
      responses[index] = resp;
      len --;
      if (!len) {
        cb(responses);
      }
    });
  });
}


function fetchAll(urls, cb) {
  var index = 0;
  var responses = [];

  function fetchOne(index) {
    if (index == urls.length) {
      cb(responses);
      return;
    }
    request(urls[index], function(resp) {
      responses.push(resp);
      fetchOne(index++);
    });
  }
  fetchOne(0);
}

