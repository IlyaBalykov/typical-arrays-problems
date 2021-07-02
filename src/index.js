
exports.min = function min (array) {
    let min = Math.min.apply(null, array);
    if (min == "-Infinity" || min =="Infinity") {
        return 0
    } else {
        return min;
    }
}

exports.max = function max (array) {
    let max = Math.max.apply(null, array);
    if (max == "-Infinity" || max =="Infinity") {
        return 0
    } else {
        return max;
    }
}

exports.avg = function avg (array) {
    if (Array.isArray(array) && array.length !== 0) {
        const avg = (acc, current) => acc + current;
        return (array.reduce(avg))/array.length;
    } else {
        return 0
    }
}
