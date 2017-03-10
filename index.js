"use strict";
function default_1(str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
