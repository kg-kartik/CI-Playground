const {testfunc} = require("./index.js");

test("checking the correct name", () => {
    expect(testfunc('dhairya')).toBe('hello dhairya');
})

test("checking the wrong name", () => {
    expect(testfunc('')).toBe('hello kartik');
})


