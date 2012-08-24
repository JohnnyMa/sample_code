//core.js
//define global variables & utility functions here
//author: johnny.ma

var sample = {};
sample.offline = true;
sample.debug = true;
sample.constants = {};
sample.ui = {};
sample.data = {};
sample.util = {};



//define common functions for ui rendering
sample.ui = (function() {
  var _renderHeader = function(options) {
    //TODO: add code to create header
  };

  var _renderTable = function(options) {
    //TODO
    //reminder: give different solutions to render table based on different HTML tag
  };

  var _renderFooter = function(options) {
    //TODO:
    //1. add footer content
    //2. add copyright information
    //3. etc.
  };



  //used to render a overlay feature, commonly used when loading page or waiting for ajax response, etc.
  var _renderOverlay = function(options) {
    //TODO: 
  };

  

  return {
    renderHeader : _renderHeader
  };
})();



//define util functions
sample.utility = (function() {
  var _setCookie = function(key, value) {
    document.cookie = ("lang=" + value);
  };

  var _getCookie = function() {
    var returnVal = "";
    var cookieValue = document.cookie;
    var cookies = cookieValue.split(";");
    var cookiesValue = new Array();
    for (var i = 0; i < cookies.length; i++) {
      var tempArr = cookies[i].split("=");
      cookiesValue[i] = tempArr;
    }

    for (var i = 0; i < cookiesValue.length; i++) {
      if (cookiesValue[i][0] === key) {
        returnVal = cookiesValue[i][1];
      }
    }
    return returnVal;
  };

  //util function for ajax call
  //@param {Object} options = {url: string, async: boolean, data: object, success: callback, showOverlay: boolean}
  var _sendAjax = function(options) {
    if (options.showOverlay) {
      pal.ui.loadingOverlayContainer.open();
    }
    options.dataType = options.dataType || "JSONP";
    $.ajax({
      url : options.url,
      async : options.async,
      type : "GET",
      dataType : options.dataType,
      data : options.data,
      success : options.success,
      complete : function() {
        if (sample.debug) {
          console.log('complete.....');
        }
        if (options.showOverlay) {
          pal.ui.loadingOverlayContainer.close();
        }
        if (!options.complete) {
          options.complete
        }
      },
      error : function(res, e, c) {
        if (options.showOverlay) {
          pal.ui.loadingOverlayContainer.close();
          pal.ui.errorOverlayContainer.open();
        }
        if (!options.error) {
          options.error
        }
      }
    });
  };

  return {
    setCookie : _setCookie,
    getCookie : _getCookie
  };
})();
