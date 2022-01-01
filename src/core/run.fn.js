/* eslint-disable max-lines-per-function */
import IS from '@me5on/is';


const run = (

    options => {

        // noinspection UnnecessaryLocalVariableJS
        const martis$run = $ => {

            const {prep, pass, step, halt, rules} = options ?? {};

            let str = IS.nil($) ? '' : String($);
            let idx = 0n;
            let done;

            do {
                done = true;

                for (const {pat, rep, end, loc} of rules ?? []) {

                    const tst = str.match(pat);
                    if (!tst) {
                        pass?.({idx, loc, pat, rep, end, tst, str});
                        continue;
                    }

                    const old = str;
                    idx += 1n; // eslint-disable-line no-magic-numbers

                    prep?.({idx, loc, pat, rep, end, tst, old});

                    str = (
                        IS.fun(rep)
                            ? rep({idx, loc, pat, rep, end, tst, old})
                            : str.replace(pat, rep)
                    );

                    step?.({idx, loc, pat, rep, end, tst, old, str});

                    done = end;
                    break;

                }

            } while (!done);

            halt?.({idx, end: done, old: $, str});
            return str;
        };

        return martis$run;
    }

);


export default run;
