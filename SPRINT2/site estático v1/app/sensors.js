function lm35(min, max) {
    min = typeof min == 'undefined' ? 35 : min;
    max = typeof max == 'undefined' ? 37.8 : max;
    
    let random = Math.random() * (max - min) + min;

    return random
}

function trc5000(min, max) {
    min = typeof min == 'undefined' ? 35 : min;
    max = typeof max == 'undefined' ? 37.8 : max;
    
    let random = Math.random() * (max - min) + min;

    return random
}

function ldr(min, max){
    min = typeof min == 'undefined' ? 35 : min;
    max = typeof max == 'undefined' ? 37.8 : max;
    
    let random = Math.random() * (max - min) + min;

    return random
}

function dht11(min,max){
    min = typeof min == 'undefined' ? 35 : min;
    max = typeof max == 'undefined' ? 37.8 : max;
    
    let random = Math.random() * (max - min) + min;

    return random
}


module.exports = {lm35, trc5000, ldr, dht11};
