/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var r = [];
    var cur = [];

    for(var i = 0; i < arr.length; i++){
        cur.push(arr[i]);
        if(cur.length == size){
            r.push(cur);
            cur = [];
        }
    }
    if(cur.length > 0) r.push(cur);
    return r;
};
