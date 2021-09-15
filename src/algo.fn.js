import IS from '@me5on/is';


const algo = (

    ({prep, step, rules}) => input => {

        let str = String(input);
        let idx = 0n;
        let done;

        do {
            done = true;

            for (const {pat, rep, end, loc} of rules) {

                const tst = str.match(pat);
                if (!tst) {
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

        return str;
    }

);


export default algo;
