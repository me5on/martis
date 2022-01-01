import {describe, expect, it} from '@jest/globals';
import parse from './parse.fn.js';


describe('parse', () => {

    it(
        'is a function',
        () => void expect(parse).toBeFun(),
    );


    const fn = $ => $;

    it.each([
        // [result, ...args]
        [{}],
        [{}, null],
        [{}, void (1)],
        [{}, {boot: 1}],
        [{}, {halt: 1}],
        [{}, {pass: 1}],
        [{}, {prep: 1}],
        [{}, {step: 1}],
        [{boot: fn}, {boot: fn}],
        [{halt: fn}, {halt: fn}],
        [{pass: fn}, {pass: fn}],
        [{prep: fn}, {prep: fn}],
        [{step: fn}, {step: fn}],
    ])(
        'returns correct %p for %p',
        expect(parse).toMapEqual,
    );

});
