function colouredTriangles(colors) {
  if (colors.length === 1) {
    return colors;
  }

  const lettersColors = ["R", "G", "B"];

  let nextRow = "";

  while (nextRow !== 1) {
    for (let i = 0; i <= colors.length - 2; i = i + 2) {
      const colorsToMix = colors.slice(i, i + 2);
      const firstColor = colorsToMix[0];
      const secondColor = colorsToMix[1];

      if (firstColor === secondColor) {
        nextRow = nextRow.concat(firstColor);
        continue;
      }

      const indexFirstColor = lettersColors.indexOf(firstColor);
      const indexSecondColor = lettersColors.indexOf(secondColor);
      const indexNewColor =
        lettersColors.length - (indexFirstColor + indexSecondColor);
      const newColor = lettersColors[indexNewColor];

      nextRow = nextRow.concat(newColor);
    }

    console.log(nextRow);
  }
}

colouredTriangles("RRGBRGBB");
