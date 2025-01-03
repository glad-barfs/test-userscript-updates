// ==UserScript==
// @name         Test change google image to MD
// @namespace    http://tampermonkey.net/
// @version      4.2
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @updateURL    https://github.com/glad-barfs/test-userscript-updates/raw/main/src/test_google_MD.user.js
// @downloadURL  https://github.com/glad-barfs/test-userscript-updates/raw/main/src/test_google_MD.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.querySelector(".lnXdpd").src = "https://mangadex.org/img/brand/mangadex-wordmark.svg"
    document.querySelector(".lnXdpd").srcset = "https://mangadex.org/img/brand/mangadex-wordmark.svg"
})();
