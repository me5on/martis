import {describe, expect, it, jest} from '@jest/globals';
import run from './run.fn.js';


const {objectContaining: similar} = expect;


const pat = 'a';
const rep = 'b';
const bad = 'c';
const end = 'd';
const rule = Object.freeze({pat, rep, end});
const rules = Object.freeze([rule]);
const ident = Object.freeze($ => $);


// eslint-disable-next-line max-lines-per-function
describe('run', () => {


    it(
        'calls the pass callback',
        () => {

            const pass = jest.fn(ident);

            const actual = run({pass, rules})(bad);

            expect(actual).toBe(bad);
            expect(pass).toHaveBeenCalledTimes(1);
            expect(pass).toHaveBeenCalledWith(
                similar({
                    end,
                    idx: 0n,
                    loc: void (1),
                    pat,
                    rep,
                    tst: null,
                }),
            );
        },
    );


    it(
        'calls the prep callback',
        () => {

            const prep = jest.fn(ident);

            const actual = run({prep, rules})(pat);

            expect(actual).toBe(rep);
            expect(prep).toHaveBeenCalledTimes(1);
            expect(prep).toHaveBeenCalledWith(
                similar({
                    end,
                    idx: 1n,
                    loc: void (1),
                    old: pat,
                    pat,
                    rep,
                    tst: similar([pat]),
                }),
            );
        },
    );


    it(
        'calls the step callback',
        () => {

            const step = jest.fn(ident);

            const actual = run({step, rules})(pat);

            expect(actual).toBe(rep);
            expect(step).toHaveBeenCalledTimes(1);
            expect(step).toHaveBeenCalledWith(
                similar({
                    end,
                    idx: 1n,
                    loc: void (1),
                    old: pat,
                    pat,
                    rep,
                    str: rep,
                    tst: similar([pat]),
                }),
            );
        },
    );


    it(
        'calls the halt callback',
        () => {

            const halt = jest.fn(ident);

            const actual = run({halt, rules})(pat);

            expect(actual).toBe(rep);
            expect(halt).toHaveBeenCalledTimes(1);
            expect(halt).toHaveBeenCalledWith(
                similar({
                    end,
                    idx: 1n,
                    old: pat,
                    str: rep,
                }),
            );
        },
    );


});
