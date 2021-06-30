const {testfunc} = require("./index.js");

test("checking the correct name", () => {
    expect(testfunc('dhairya')).toBe('hye dhairya');
})

test("checking the wrong name", () => {
    expect(testfunc('')).toBe('hye kartik');
})


