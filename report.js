function report(string) {
  arrayOfColours = string.split(", ");

  let greenCounter = 0;
  let amberCounter = 0;
  let redCounter = 0;

  for (let i = 0; i < arrayOfColours.length; i++) {
    if (arrayOfColours[i].toLowerCase() === "green") {
      greenCounter++;
    }
    if (arrayOfColours[i].toLowerCase() === "amber") {
      amberCounter++;
    }
    if (arrayOfColours[i].toLowerCase() === "red") {
      redCounter++;
    }
  }

  if (greenCounter > 0 && amberCounter === 0 && redCounter === 0) {
    return `Green: ${greenCounter}`;
  } else if (greenCounter === 0 && amberCounter > 0 && redCounter === 0) {
    return `Amber: ${amberCounter}`;
  } else if (greenCounter > 0 && amberCounter > 0 && redCounter === 0) {
    return `Green: ${greenCounter}, Amber: ${amberCounter}`;
  } else if (greenCounter === 0 && amberCounter === 0 && redCounter > 0) {
    return `Red: ${redCounter}`;
  } else if (greenCounter > 0 && amberCounter === 0 && redCounter > 0) {
    return `Green: ${greenCounter}, Red: ${redCounter}`;
  } else if (greenCounter === 0 && amberCounter > 0 && redCounter > 0) {
    return `Amber: ${amberCounter}, Red: ${redCounter}`;
  }
}

module.exports = report;
