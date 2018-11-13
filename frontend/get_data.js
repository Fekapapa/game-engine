'use strict'

const getData = () => {
  const http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      const xhrResponse = JSON.parse(http.response);
      draw(xhrResponse);
    }
  }
  http.open('GET', '/data');
  http.send();
}
