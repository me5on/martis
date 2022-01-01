import rule from './rule.fn.js';
import terminating from './terminating.fn.js';


const tr = (

    (pat, rep) => terminating(rule(pat, rep))

);


export default tr;
