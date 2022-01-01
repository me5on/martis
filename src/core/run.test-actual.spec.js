import {describe, expect, it, jest} from '@jest/globals';
import run from './run.fn.js';


const {objectContaining: similar} = expect;


// eslint-disable-next-line max-lines-per-function
describe('run', () => {


    it.each([
        // [result, options, input]
        ['a', {rules: [{pat: 'b', rep: 'c'}]}, 'a'],
        ['b', {rules: [{pat: 'a', rep: 'b'}]}, 'a'],
        ['c', {rules: [{pat: /../u, rep: 'c'}]}, 'asdf'],
        ['d', {rules: [{pat: /.*/u, rep: () => 'd', end: 1}]}, 'asdf'],
    ])(
        'returns %p for options %p and input %p',
        expect((options, input) => run(options)(input)).toMapExact,
    );


    it('calls the replacer function with proper arguments', () => {

        const expected = 'e';
        const old = 'asdf';
        const end = 'the end';
        const loc = 'the rule location i.e. index in the rules array';
        const rep = jest.fn(() => expected);
        const pat = /.*/u;

        const actual = run({rules: [{pat, rep, end, loc}]})(old);

        expect(actual).toBe(expected);
        expect(rep).toHaveBeenCalledTimes(1);
        expect(rep).toHaveReturnedTimes(1);
        expect(rep).toHaveReturnedWith(expected);
        expect(rep).toHaveBeenCalledWith(
            similar({
                end,
                idx: 1n,
                loc,
                old,
                pat,
                rep,
                tst: similar([old]),
            }),
        );
    });


});
