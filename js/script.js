// // Setting variables
// var webgl, audio, audioO, stats, guiConfig, MeshBasicMaterial, gui;
// var AudioObj, Mesh, WebGl;
//
// audioId = new Audio();
// audioId.src = 'tunes/BTSM-Religion.mp3';
// audioId.controls = false;
// audioId.autoplay = false;
// audioId.loop = true;
// document.getElementById('myAudio');
//
// // Audio Object
//
// AudioObj = function() {
//
//         function AudioObj() {
//
//           var self = this;
//
//             this.audioCtx = new AudioContext();
//             this.audio = audioId;
//             this.audioSrc = this.ctx.createMediaElementSource(this.audio);
//             this.analyser = this.ctx.createAnalyser();
//             this.audioData = [];
//
//             this.audioSrc.connect(this.analyser);
//             this.audioSrc.connect(this.ctx.destination);
//             ctx.decodeAudioData(compressedBuffer).then(function(decodedData) {
//  // use the decoded data here
// });
//
//             this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
//
//             this.audio.play();
//
//       }
// };

var context;
var source, sourceJs;
var analyser;
var buffer;
var url = 'tunes/BTSM-Religion';
var array = [];

var request = new XMLHttpRequest();
request.open("GET", url, true);
request.responseType = "arraybuffer";

request.onload = function() {
    // decode audio data
};
