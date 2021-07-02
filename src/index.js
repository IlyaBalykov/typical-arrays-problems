
exports.min = function min (array) {
    if (array !== "") {
        let min = Math.min.apply(null,array);
        console.log(min);
        return min;
    } else {
        return 0
    }
}

exports.max = function max (array) {
    if (array !== "") {
        let max = Math.max.apply(null,array);
        console.log(max);
        return max;
    } else {
        return 0
    }
}

exports.avg = function avg (array) {
    if (array !== "") {
        const avg = (acc, current) => acc + current;
        let res = (array.reduce(avg))/array.length;
        console.log(res);
        return res;
    } else {
        return 0
    }
}
