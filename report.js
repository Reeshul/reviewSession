function report(string) {
  arrayOfColours = string.split(", ");

  let greenCounter = 0;

  for (let i = 0; i < arrayOfColours.length; i++) {
    if (arrayOfColours[i].toLowerCase() === "green") {
      greenCounter++;
    }
  }

  return `Green: ${greenCounter}`;

  // if (string === "Green") {
  //   return "Green: 1";
  // } else if (string === "Green, Green") {
  //   return "Green: 2";
  // } else {
  //   return "Green: 3";
  // }

  // return arrayOfColours;
}

module.exports = report;
