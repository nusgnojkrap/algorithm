var load = require("audio-loader");

let filename = "./audio/goodday.wav";
load(filename).then(function (buffer) {
    const channelData = buffer.getChannelData(0);
    let count = 0;
    for (let i = 0; i < channelData.length - 2; i++) {
        if (channelData[i] > channelData[i + 1]) {
            //f'(x) > 0
            if (channelData[i + 1] <= channelData[i + 2]) {
                //f'(x) <= 0
                count = count + 1;
            }
        } else if (channelData[i] < channelData[i + 1]) {
            //f'(x) < 0
            if (channelData[i + 1] >= channelData[i + 2]) {
                //f'(x)
                count = count + 1;
            }
        } else if ((channelData[i] = channelData[i + 1])) {
            if (channelData[i + 1] > channelData[i + 2] || channelData[i + 1] < channelData[i + 2]) {
                count = count + 1;
            }
        }
    }
    console.log("count : " + count);

    // let f = [];
    // for(let i = 0 ; i < count ; i++){
    //     f[i] = 0;
    //     for(let j = 0 ; j < count ; j++){
    //         f[i] = f[i] + channelData[i] * e^(-1 * 2 * pi *)
    //     }
    // }
    //  data : n차 다항함수 ( n = count)
});
