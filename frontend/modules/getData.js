'use strict'

import { StoreData } from "../../main.js";

const GetData = () => {
  const http = new XMLHttpRequest();

  http.onreadystatechange = function xhrRequest() {
    if (http.readyState === 4 && http.status === 200) {
      const xhrResponse = JSON.parse(http.response);
      StoreData(xhrResponse);
    }
  }
  http.open('GET', '/data');
  http.send();

}

export { GetData };
