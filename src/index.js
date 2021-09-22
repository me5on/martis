import FN from '@me5on/fn';
import algo from './algo.fn.js';
import invalid from './invalid.fn.js';
import normalize from './normalize.fn.js';
import parse from './parse.fn.js';
import rule from './rule.fn.js';
import terminating from './terminating.fn.js';


const martis = (

    (options, rules) => {

        const {boot, prep, step} = parse(options);

        rules ??= options.rules ?? options;

        const errors = invalid(rules);
        if (errors.length) {
            boot?.(errors);
            return FN.ident;
        }

        return algo({
            prep,
            step,
            rules: rules.map(normalize),
        });
    }

);


Object.assign(
    martis,
    {
        rule,
        r:    rule,
        term: terminating,
        t:    terminating,
        terminating,
    },
);


export default martis;
