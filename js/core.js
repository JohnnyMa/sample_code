//core.js
//define global variables & utility functions here
//author: johnny.ma

(function(window, undefined) {
  var root = this, document = window.document, navigator = window.navigator, location = window.location;
  var a = '11111';
  var sample = {};
  sample.offline = true;
  sample.debug = true;
  sample.constants = {};
  sample.ui = {};
  sample.data = {};
  sample.util = {};

  console.log( typeof document);
  console.log(document);

  //define util functions
  sample.util = (function() {
    var _setCookie = function(key, value) {
      //document.cookie = ("lang=" + value);
    };

    var _getCookie = function() {/*
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
      */
    };

    // util function for ajax call
    // @param {Object} options = {url: string, async: boolean, data: object, success: callback, showOverlay: boolean}
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

    // format number
    // e.g. 12000 => 1,2000
    // @param amtStr number
    var _formatIntNum = function(amtStr) {
      var isInt = function(num) {
        return (num % 1 === 0);
      };
      var amtStr = (isInt(amtStr)) ? amtStr : Number(amtStr).toFixed(0);
      amtStr = "" + amtStr;
      var a, renum = '';
      var j = 0;
      var a1 = '', a2 = '', a3 = '';
      var tes = /^-/;
      var isCurrency = ( typeof (isCurrency) != 'undefined') ? isCurrency : true;

      a = amtStr.replace(/,/g, "");
      a = a.replace(/[^-\.,0-9]/g, "");
      a = a.replace(/(^\s*)|(\s*$)/g, "");
      if (tes.test(a))
        a1 = '-';
      else
        a1 = '';
      a = a.replace(/-/g, "");
      if (a != "0" && a.substr(0, 2) != "0.")
        a = a.replace(/^0*/g, "");
      j = a.indexOf('.');
      if (j < 0)
        j = a.length;
      a2 = a.substr(0, j);
      a3 = a.substr(j);
      j = 0;
      for ( i = a2.length; i > 3; i = i - 3) {
        renum = "," + a2.substr(i - 3, 3) + renum;
        j++;
      }

      renum = a1 + a2.substr(0, a2.length - j * 3) + renum + a3;

      return renum;
    };

    var _strToJson = function(str) {
      var json = (new Function("return " + str))();
      return json;
    };

    //load a javascript file into current file
    var _loadScript = function(sURL) {
      console.log( typeof document);
      
      console.log(document);
      var dScript = document.createElement('script');
      dScript.type = 'text/javascript';
      dScript.src = sURL;
      document.body.appendChild(dScript);
    };

    //load a line script into current file
    var _loadScriptString = function(sCode) {
      var dScript = document.createElement('script');
      dScript.type = 'text/javascript';

      try {
        dScript.appendChild(document.createTextNode(sCode));
      } catch (ex) {
        dScript.text = sCode;
      }

      document.body.appendChild(dScript);
    };

    return {
      setCookie : _setCookie,
      getCookie : _getCookie,
      sendAjax : _sendAjax,
      formatIntNum : _formatIntNum,
      strToJson : _strToJson,
      loadScript : _loadScript,
      loadScriptString : _loadScriptString
    };
  })();

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
      renderHeader : _renderHeader,
      renderTable : _renderTable,
      renderFooter : _renderFooter,
      renderOverlay : _renderOverlay
    };
  })();

  sample.preLoad = (function() {
    //TODO:
    // pre-load data here
  })();

  console.log(document);
  console.log( typeof document);
  console.log(window.document.body);

  window.sample = sample;
})(window);
