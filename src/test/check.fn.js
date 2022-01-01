import IS from '@me5on/is';


const s = ($ => String($));


const check = (rule, idx) => {

    const errors = [];
    const {pat, rep} = rule ?? {};

    if (!IS.num(idx) || 0 > idx) {
        errors.push(
            `invalid index: ${idx}`,
        );
    }

    idx ??= 'unknown index';

    if (IS.nil(rule)) {
        errors.push(
            `invalid rule at ${idx}: ${rule}`,
        );
    }

    if (!IS.str(pat) && !IS.rgx(pat)) {
        errors.push(
            `invalid pattern at ${idx}: ${s(pat)}`,
        );
    }

    if (!IS.str(rep) && !IS.fun(rep)) {
        errors.push(
            `invalid replacement at ${idx}: ${s(rep)}`,
        );
    }

    return errors;

};


export default check;
