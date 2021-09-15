// noinspection JSUnusedGlobalSymbols

import {expect} from '@jest/globals';


// message shown when positive scenario fails
const pos = (
    message => ({pass: false, message: () => message})
);


// message shown when negative scenario fails
const neg = (
    message => ({pass: true, message: () => message})
);


expect.extend({


    // eslint-disable-next-line no-shadow
    toBeFun(received, name) {

        const printed = this.utils.printReceived(received);

        return 'function' === typeof received
            ? (
                name
                    ? neg(`Expected "${name}" not to be function, instead got ${printed}`)
                    : neg(`Expected ${printed} not to be function`)
            )
            : (
                name
                    ? pos(`Expected "${name}" to be function, instead got ${printed}`)
                    : pos(`Expected ${printed} to be function`)
            );
    },


    toMap(fn, result, ...args) {

        const actual = fn(...args);
        const act = this.utils.printExpected(actual);
        const res = this.utils.printReceived(result);
        const arg = this.utils.printReceived(args);


        return (
            result === actual
                ? neg(`Expected ${fn} to not map ${arg} to ${res}, instead got ${act}`)
                : pos(`Expected ${fn} to map ${arg} to ${res}, instead got ${act}`)

        );
    },


});
