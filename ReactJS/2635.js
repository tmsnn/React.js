/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cnt = init;
    return {
        increment: () => ++cnt,
        decrement: () => --cnt,
        reset: () => cnt = init,
    }
};

const counter = createCounter(5)
let ans = [];
ans.push(counter.increment()); // 6
ans.push(counter.reset()); // 5
ans.push(counter.decrement()); // 4