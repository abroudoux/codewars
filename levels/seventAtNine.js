function sevenAtNine(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let num = string[i];

    if (!string[i - 1] || !string[i + 1]) {
      result += string[i];
      continue;
    }

    if (num === "9") {
      if (string[i - 1] === "7" && string[i + 1] === "7") {
        continue;
      }
    }

    result += string[i];
  }

  console.log(result);
}

sevenAtNine("79797");
