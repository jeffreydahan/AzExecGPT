let recognizer;
let subscriptionKey = process.env.SPEECH_KEY;
let serviceRegion = process.env.SPEECH_REGION;
let endpointId = process.env.SPEECH_ENDPOINT;

function startRecording() {
    const SpeechSDK = require('microsoft-cognitiveservices-speech-sdk');
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.endpointId = endpointId;
    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync(result => {
        document.getElementById('textbox1').value = result.text;
    });
}

function stopRecording() {
    recognizer.stopContinuousRecognitionAsync();
}
