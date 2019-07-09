"use strict";

var linksDetails = require('./links'); //función API md_links


var md_links = function md_links(path, options) {
  return new Promise(function (resolve, reject) {
    if (options.validate === true) {
      resolve(linksDetails.statusLink(linksDetails.routeLinks(path)));
    } else {
      resolve(linksDetails.routeLinks(path));
    }
  });
};

module.exports = {
  md_links: md_links
};