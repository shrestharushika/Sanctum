$("button").click(function() {
    var fired_button = $(this).val();
    console.log(fired_button);
    // alert(fired_button);

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = fired_button;
    speech.volume = 1;
    speech.rate =1;
    speech.pitch = 1;

    window
    .speechSynthesis
    .speak(speech);
});