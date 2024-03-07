let guest = [
    "ubaida",
    "urooj",
    "ali",
];
let index = guest.indexOf("urooj");
guest[index] = "umair";

guest.forEach (guest => {
    console.log(`we would like to invite ${guest}, at the birthday party`)
});
export{}