//core.js
//define global variables & utility functions here
//author: johnny.ma

(function(window, undefined) {
  var root = this, document = window.document, navigator = window.navigator, location = window.location;
  var sample = {};
  sample.offline = true;
  sample.debug = true;
  sample.constants = {};
  sample.ui = {};
  sample.data = {};
  sample.util = {};

  sample.ui = {

  };

  window.sample = sample;
})(window);

//define util functions
sample.util = (function() {
  var _strToJson = function(str) {
    var json = (new Function("return " + str))();
    return json;
  };

  //load a javascript file into current file
  var _loadScript = function(sURL) {
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
    strToJson : _strToJson,
    loadScript : _loadScript,
    loadScriptString : _loadScriptString
  };
})();

//define common functions for ui rendering
sample.ui = (function() {
  var _renderHeader = function(options) {
    //TODO: add code to create header
    console.log('create header...');
    console.log(document);
    console.log(document.body);
    
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
