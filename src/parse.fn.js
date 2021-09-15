import IS from '@me5on/is';


const parse = (

    ({boot: b, prep: p, step: s} = {}) => ({
        boot: IS.fun(b) ? b : void (1),
        prep: IS.fun(p) ? p : void (1),
        step: IS.fun(s) ? s : void (1),
    })

);


export default parse;
