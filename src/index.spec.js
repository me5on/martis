import {describe, expect, it} from '@jest/globals';
import martis from './index.js';


describe.each([

    ['martis', martis],

])('module', (name, mod) => { // eslint-disable-line no-shadow

    describe(name, () => {


        it(
            'is a function',
            () => void expect(mod).toBeFun(name),
        );


    });
});
