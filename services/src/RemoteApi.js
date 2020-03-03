const fetch = require('node-fetch');

class RemoteApi {

  fetchJsonData(url) {
    var promise = new Promise(function(resolve, reject) {
      fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(function(serverResponse) {
          return serverResponse.json();
        })
        .then(function(serverResponseJson) {
          resolve(serverResponseJson);
        })
        .catch(err => console.log(err));
    });
    return promise;
  }


}

module.exports = RemoteApi;
