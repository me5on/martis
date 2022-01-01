const normalize = (

    (rule, loc) => ({
        ...rule,
        end: rule?.end,
        loc,
    })

);


export default normalize;
