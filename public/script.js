'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = function $(selector) {
  return document.querySelector(selector);
};

var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};

var createElement = function createElement(tag, className) {
  var element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
};

// dynamically load main image on home page
var imgWrapper = $('.img-wrapper') || null;

if (imgWrapper) {
  var img = createElement('img', 'hero');
  var randomImg = 'https://source.unsplash.com/random';
  img.src = randomImg;
  img.alt = 'Random image from Unsplash.com';
  img.addEventListener('click', function (e) {
    console.log(e.target.alt);
  });
  imgWrapper.appendChild(img);
}

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: 'getStatus',
    value: function getStatus() {
      return 'OK';
    }
  }]);

  return Utils;
}();

var utils = new Utils();
var status = utils.getStatus();
console.log({ status: status });