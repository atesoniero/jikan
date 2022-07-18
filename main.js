// JavaScript template file
console.log("Release the kraken!!!");

let hourSlider = document.querySelector(".hourSlider");
let hourOutput = document.querySelector(".countHour");
let hourHand = document.querySelector(".hour");

hourHand.style.transfrom = "rotate(0deg)";
hourOutput.innerHTML = hourSlider.value;

// Rotate hour hand
hourSlider.oninput = function () {
  hourOutput.innerHTML = this.value;
  const rotation = this.value * 30;
  hourHand.style.transform = `rotate(${rotation}deg)`;
};

let minuteSlider = document.querySelector(".minuteSlider");
let minuteOutput = document.querySelector(".countMinute");
let minuteHand = document.querySelector(".minute");

minuteHand.style.transfrom = "rotate(0deg)";
minuteOutput.innerHTML = minuteSlider.value;

// Rotate minute hand
minuteSlider.oninput = function () {
  minuteOutput.innerHTML = this.value;
  const HourRotation = this.value * 6;
  minuteHand.style.transform = `rotate(${HourRotation}deg)`;
};

// Button click
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let hour = document.querySelector(".hourSlider").value;
  let minute = document.querySelector(".minuteSlider").value;
  const render = document.querySelector(".render");
  let meridium = "";

  if (document.querySelector(".am").checked) {
    meridium = "午前";
  } else {
    meridium = "午後";
  }

  if (hour == 0) {
    hour = "12";
  }
  if (minute == 60) {
    minute = "0";
  }

  let outputMinute = "";
  const outputHour = kanji(hour) + "時";
  if (minute == 30) {
    outputMinute = "半";
  } else if (minute == 0) {
    outputMinute = "";
  } else {
    outputMinute = kanji(minute) + "分";
  }

  let text = `${meridium}` + `${outputHour}` + `${outputMinute}` + `です。`;

  render.innerHTML = text
});


// Helper

kanjiDictionary = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九",
  10: "十",
  20: "二十",
  30: "三十",
  40: "四十",
  50: "五十",
};

function kanji(n) {
  if (n in kanjiDictionary) {
    return kanjiDictionary[n];
  }
  return kanjiDictionary[n[0] + "0"] + kanjiDictionary[n[1]];
}

