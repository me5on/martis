/* eslint-disable no-magic-numbers */
import {describe, expect, it} from '@jest/globals';
import normalize from './normalize.fn.js';


describe('normalize', () => {

    it(
        'is a function',
        () => void expect(normalize).toBeFun(),
    );

    it.each([
        // [result, ...args]
        [{end: void (1), loc: void (1), pat: void (1), rep: void (1)}],
        [{end: void (1), loc: void (1), pat: void (1), rep: void (1)}, null],
        [{end: void (1), loc: null, pat: void (1), rep: void (1)}, null, null],
        [{end: void (1), loc: 0x10c, pat: void (1), rep: void (1)}, null, 0x10c],
        [{end: 1, loc: 0x10c, pat: void (1), rep: void (1)}, {end: 1}, 0x10c],
        [{end: true, pat: void (1), rep: void (1)}, {end: true}],
        [{end: true}, {end: true}],
        [{end: void (1), pat: 'pat'}, {pat: 'pat'}],
        [{end: void (1), rep: 'rep'}, {rep: 'rep'}],
        [{end: 0, pat: 1, rep: 2}, {end: 0, pat: 1, rep: 2}],
    ])(
        'returns correct %p for %p',
        expect(normalize).toMapEqual,
    );

});
