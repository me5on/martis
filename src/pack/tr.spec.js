/* eslint-disable no-magic-numbers,require-unicode-regexp */
// noinspection RegExpUnnecessaryNonCapturingGroup


import {describe, expect, it} from '@jest/globals';
import tr from './tr.fn.js';


describe('tr', () => {

    it(
        'is a function',
        () => void expect(tr).toBeFun(),
    );

    const noop = () => void (1);

    // noinspection RegExpDuplicateCharacterInClass
    it.each([
        // [result, ...args]
        [{end: true, pat: /(?:)/u}],
        [{end: true, pat: /null/u}, null],
        [{end: true, pat: /null/u, rep: void (1)}, null],
        [{end: true, pat: /null/u, rep: null}, null, null],
        [{end: true, pat: /(?:)/u, rep: void (1)}, void (1)],
        [{end: true, pat: /asdf/u, rep: void (1)}, 'asdf'],
        [{end: true, pat: /123/, rep: void (1)}, /123/],
        [{end: true, pat: /pattern/u, rep: 'replacement'}, 'pattern', 'replacement'],
        [{end: true, pat: /pattern/, rep: noop}, /pattern/, noop],
        [{end: true, pat: /[object Object]/u, rep: void (1)}, {}],
        [{end: true, pat: /[object Object]/u, rep: void (1)}, {a: 1}],
    ])(
        'returns correct %p for %p',
        expect(tr).toMapEquals,
    );

});
