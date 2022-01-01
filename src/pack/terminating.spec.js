/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import terminating from './terminating.fn.js';


describe('terminating', () => {

    it(
        'is a function',
        () => void expect(terminating).toBeFun(),
    );


    it.each([
        // [result, ...args]
        [{end: true}, {}],
        [{end: true}, null],
        [{end: true}, void (1)],
        [{end: true, a: 1}, {a: 1}],
    ])(
        'returns correct %p for %p',
        expect(terminating).toMapEquals,
    );

});
