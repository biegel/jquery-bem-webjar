/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        "jquery-bem": ['webjars!jquery.js' ]
    }
});
