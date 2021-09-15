const rule = (

    (pat, rep) => ({
        pat: (
            pat instanceof RegExp
                ? pat
                : new RegExp(pat, 'u')
        ),
        rep,
    })

);


export default rule;
