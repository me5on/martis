import normalize from './core/normalize.fn.js';
import parse from './core/parse.fn.js';
import run from './core/run.fn.js';
import rule from './pack/rule.fn.js';
import term from './pack/terminating.fn.js';
import tr from './pack/tr.fn.js';
import check from './test/check.fn.js';
import invalid from './test/invalid.fn.js';


const martis$init = (

    (options, rules) => {

        const {boot, prep, pass, step, halt} = parse(options);

        rules ??= options?.rules ?? options;

        const errors = invalid(rules);
        if (errors?.length) {
            boot?.({errors});
            return Object.assign($ => $, {errors});
        }

        rules = rules.map(normalize);
        boot?.({rules});

        const runner = run({prep, pass, step, halt, rules});
        Object.assign(runner, {rules});

        return runner;
    }

);


Object.assign(
    martis$init,
    {
        check, c: check,
        rule, r:  rule,
        term, t:  term, terminating: term,
        tr,
    },
);


export default martis$init;
