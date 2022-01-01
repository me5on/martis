import IS from '@me5on/is';


const parse = (

    $ => ({
        boot: IS.fun($?.boot) ? $.boot : void (1),
        prep: IS.fun($?.prep) ? $.prep : void (1),
        pass: IS.fun($?.pass) ? $.pass : void (1),
        step: IS.fun($?.step) ? $.step : void (1),
        halt: IS.fun($?.halt) ? $.halt : void (1),
    })

);


export default parse;
