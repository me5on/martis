/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import invalid from './invalid.fn.js';


describe('invalid', () => {

    it(
        'is a function',
        () => void expect(invalid).toBeFun(),
    );


    it.each([
        // [result, ...args]
        [[], []],
        [['not array: [object Object]'], {}],
        [['not array: undefined'], void (1)],
        [['not array: null'], null],
        [
            [
                'invalid replacement at 0: undefined',
                'invalid pattern at 1: undefined',
                'invalid rule at 2: null',
                'invalid pattern at 2: undefined',
                'invalid replacement at 2: undefined',
                'invalid rule at 3: undefined',
                'invalid pattern at 3: undefined',
                'invalid replacement at 3: undefined',
            ],
            [
                {pat: ''},
                {rep: ''},
                null,
                void (1),
            ],
        ],
    ])(
        'returns correct string %p for %p',
        expect(invalid).toMapEquals,
    );

});
