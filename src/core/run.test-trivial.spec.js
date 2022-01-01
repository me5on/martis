import {describe, expect, it} from '@jest/globals';
import run from './run.fn.js';


const anyFun = expect.any(Function);


describe('run', () => {


    it(
        'is a function',
        () => void expect(run).toBeFun(),
    );


    it.each([
        // [result, ...args]
        [anyFun],
        [anyFun, null],
        [anyFun, {}],
        [anyFun, ''],
    ])(
        'returns correct %p for %p',
        expect(run).toMapEqual,
    );

    it.each([
        // [result, ...args]
        [''],
        ['', null],
        ['', {}, ''],
        ['identity', null, 'identity'],
    ])(
        'returned trivial function returns correct %p for %p',
        expect((options, ...$$) => run(options)(...$$)).toMapEqual,
    );


});
