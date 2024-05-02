const rcolor = require('./rcolor');


test('randomColor between 0 and 255', () =>{

    const res = rcolor();
    expect(res.red).toBeGreaterThanOrEqual(0);
    expect(res.red).toBeLessThanOrEqual(255);

    expect(res.green).toBeGreaterThanOrEqual(0);
    expect(res.green).toBeGreaterThanOrEqual(0);

    expect(res.blue).toBeGreaterThanOrEqual(0);
    expect(res.blue).toBeGreaterThanOrEqual(0);

});
