!function r(e,o,n){function t(i,f){if(!o[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(r){var o=e[i][1][r];return t(o||r)},l,l.exports,r,e,o,n)}return o[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)t(n[i]);return t}({1:[function(r,e,o){"use strict";r("./module1.js")()},{"./module1.js":2}],2:[function(r,e,o){"use strict";e.exports=function(){console.log("From module1, Browserified!!!")}},{}]},{},[1,2]);