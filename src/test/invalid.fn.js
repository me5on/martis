import IS from '@me5on/is';
import check from './check.fn.js';


const invalid = (

    rules => IS.arr(rules)
        ? rules.map(check).flat()
        : [
            `not array: ${(String(rules))}`,
        ]

);


export default invalid;
