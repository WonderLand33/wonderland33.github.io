

initPlayers();

function initPlayers() {

    // dp1
    window.dp1 = new DPlayer({
        container: document.getElementById('dplayer1'),
        preload: 'none',
        screenshot: true,
//         video: {
//             url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
//             pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
//             thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg'
//         },
         video: {
             url: 'https://42.192.148.214/live/test.live.flv',
             type: 'hls',
        },
        subtitle: {
            url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.vtt'
        },
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/',
            addition: ['https://s-sh-17-dplayercdn.oss.dogecdn.com/1678963.json']
        }
    });

}
  
