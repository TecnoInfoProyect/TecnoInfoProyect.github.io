 simplyCountdown('#cuenta', {
            year: 2021, // required
            month: 10, // required
            day: 22, // required
            hours: 17, // Default is 0 [0-23] integer
            minutes: 20, // Default is 0 [0-59] integer
            seconds: 0, // Default is 0 [0-59] integer
            words: { //words displayed into the countdown
                days: { singular: 'Día', plural: 'Días' },
                hours: { singular: 'Hora', plural: 'Horas' },
                minutes: { singular: 'Minuto', plural: 'Minutos' },
                seconds: { singular: 'Segundo', plural: 'Segundos' }
            },
            plural: true, //use plurals
            inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
            inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
            // in case of inline set to false
            enableUtc: false, //Use UTC or not - default : false
            onEnd: function() { 
                alert('Finalizó');
                return; }, //Callback on countdown end, put your own function here
            refresh: 1000, // default refresh every 1s
            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word', // word css class
            zeroPad: false,
            countUp: true,
    });

let counter = 0;
let message = "La mama de la mamamamamamamamam";
let message2 = "PARA RCTMRE TE DIGO"

function countingClicks(){
  document.getElementById("counting").innerHTML = ++counter;
    if(counter>10){
        document.getElementById("warning").innerHTML = message;
    }
    if(counter>=30){
       document.getElementById("warning").innerHTML = message2;
       }
}