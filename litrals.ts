function combine(
    a: number | string,
    b: number | string,
    type: 'as_number' | 'as_string') {
    if (type == "as_number") {
        return (+a) + (+b)
    } else {
        return a.toString() + b.toString()
    }
}

console.warn(combine(10, 20, "as_number"))
console.warn(combine("tony", "parker", "as_string"))