/* eslint-disable no-magic-numbers,require-unicode-regexp */


import {describe, expect, it} from '@jest/globals';
import rule from './rule.fn.js';


describe('rule', () => {

    it(
        'is a function',
        () => void expect(rule).toBeFun(),
    );


    const noop = () => void (1);

    it.each([
        // [result, ...args]
        [{pat: /(?:)/u}],
        [{pat: /null/u}, null],
        [{pat: /null/u, rep: null}, null, null],
        [{pat: /asdf/u, rep: void (1)}, 'asdf'],
        [{pat: /123/, rep: void (1)}, /123/],
        [{pat: /pattern/u, rep: 'replacement'}, 'pattern', 'replacement'],
        [{pat: /pattern/, rep: noop}, /pattern/, noop],
    ])(
        'returns correct %p for %p',
        expect(rule).toMapEquals,
    );

});
