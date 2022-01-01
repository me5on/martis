/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import check from './check.fn.js';


// eslint-disable-next-line max-lines-per-function
describe('check', () => {

    it(
        'is a function',
        () => void expect(check).toBeFun(),
    );


    it.each([
        // [result, ...args]
        [[], {pat: '', rep: ''}, 0],
        [[], {pat: /./u, rep: ''}, 0],
        [[], {pat: '', rep: $ => $}, 0],

        [['invalid index: -1'], {pat: '', rep: ''}, -1],
        [['invalid index: Infinity'], {pat: '', rep: ''}, Infinity],
        [['invalid index: undefined'], {pat: '', rep: ''}],

        [['invalid replacement at 0: undefined'], {pat: ''}, 0],
        [['invalid pattern at 0: undefined'], {rep: ''}, 0],

        [['invalid replacement at 0: null'], {pat: '', rep: null}, 0],
        [['invalid pattern at 0: null'], {pat: null, rep: ''}, 0],

        [['invalid pattern at 0: 1', 'invalid replacement at 0: 2'], {pat: 1, rep: 2}, 0],

        [
            [
                'invalid index: undefined',
                'invalid rule at unknown index: undefined',
                'invalid pattern at unknown index: undefined',
                'invalid replacement at unknown index: undefined',
            ],
            void (1),
        ],
        [
            [
                'invalid index: undefined',
                'invalid rule at unknown index: null',
                'invalid pattern at unknown index: undefined',
                'invalid replacement at unknown index: undefined',
            ],
            null,
        ],
        [
            [
                'invalid rule at 0: null',
                'invalid pattern at 0: undefined',
                'invalid replacement at 0: undefined',
            ],
            null,
            0,
        ],
    ])(
        'returns correct string %p for %p',
        expect(check).toMapEquals,
    );

});
