// ==UserScript==
// @name         Test change google image to MD
// @namespace    http://tampermonkey.net/
// @version      2025-01-01
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @updateURL    https://github.com/glad-barfs/test-userscript-updates/raw/main/test_google_MD.user.js
// @downloadURL  https://github.com/glad-barfs/test-userscript-updates/raw/main/test_google_MD.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.querySelector("#hplogo").src = "https://mangadex.org/img/brand/mangadex-logo.svg"
})();
