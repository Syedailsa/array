"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guest = [
    "ubaida",
    "urooj",
    "ali",
];
var index = guest.indexOf("urooj");
guest[index] = "umair";
guest.forEach(function (guest) {
    console.log("we would like to invite ".concat(guest, ", at the birthday party"));
});
