import IS from '@me5on/is';


const rule = (

    (pat, rep) => ({
        pat: (
            IS.rgx(pat)
                ? pat
                : new RegExp(pat, 'u')
        ),
        rep,
    })

);


export default rule;
