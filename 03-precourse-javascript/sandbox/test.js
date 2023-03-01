
// Take a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(Number.isInteger);
}

console.log(filter_list([1,2,'a','b']));
