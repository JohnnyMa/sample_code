window.onload = function() {
  //sample.util.loadScript('js/login.js');
  
  // render pages
  sample.ui.renderHeader({tagName: 'header', content: 'Sample header'});
  sample.ui.renderContainer({tagName: 'div', content: '', id: 'container'});
  sample.ui.renderTable();
  sample.ui.renderFooter({tagName: 'footer', content: 'copyright: sample    sample inside.'});
};
