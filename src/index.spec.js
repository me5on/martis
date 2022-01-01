import {describe, expect, it, jest} from '@jest/globals';
import martis from './index.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe.each([

    ['martis', martis],

])('module', (name, mod) => { // eslint-disable-line no-shadow,max-lines-per-function

    const fields = ['c', 'r', 't', 'tr', 'check', 'rule', 'term', 'terminating'].sort();

    // eslint-disable-next-line max-lines-per-function
    describe(name, () => {


        it(
            'is a function',
            () => void expect(mod).toBeFun(name),
        );


        it(
            'contains fields',
            () => void expect(sortedKeys(martis)).toEqual(fields),
        );


        it(
            'returns function for trivial input',
            () => void expect(martis()).toBeFun(),
        );


        it(
            'returns function for invalid input',
            () => void expect(martis({rules: 1})).toBeFun(),
        );


        it(
            'returns identity function for invalid input',
            () => {
                const actual = martis({rules: 1});
                const object = {};
                expect(actual(object)).toEqual(object);
                expect(actual.length).toEqual(1);
            },
        );


        it.each([
            // [result, ...args]
            [['not array: undefined']],
            [['not array: null'], null],
            [['not array: [object Object]'], {}],
            [['not array: 0'], {rules: 0}],
            [
                [
                    'invalid pattern at 0: undefined',
                    'invalid replacement at 0: undefined',
                ],
                {rules: [1]},
            ],
        ])(
            'returns function with field errors %p for invalid input %p',
            expect((...$$) => martis(...$$).errors).toMapEquals,
        );


        it.each([
            // [result, ...args]
            [void (1), []],
        ])(
            'does not return function with field errors %p for input %p',
            expect((...$$) => martis(...$$).errors).toMapEquals,
        );

        it(
            'calls the boot callback on start',
            () => {

                const boot = jest.fn($ => $);

                const expectedResult = 'e';
                const old = 'asdf';
                const end = 'good end';
                const rep = jest.fn(() => expectedResult);
                const pat = /.*/u;


                const actual = martis({boot, rules: [{pat, rep, end}]})(old);

                expect(actual).toBe(expectedResult);
                expect(boot).toHaveBeenCalledTimes(1);
                expect(boot).toHaveBeenCalledWith({rules: [{end, loc: 0, pat, rep}]});
            },
        );


        it(
            'calls the boot callback on error',
            () => {

                const boot = jest.fn($ => $);

                const expectedResult = 'asdf';

                const actual = martis({boot, rules: 'bad rules'})(expectedResult);

                expect(actual).toBe(expectedResult);
                expect(boot).toHaveBeenCalledTimes(1);
                expect(boot).toHaveBeenCalledWith({errors: ['not array: bad rules']});
            },
        );


    });
});
