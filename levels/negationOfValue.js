function negationOfValue(x, value) {
  if (typeof value === "boolean") {
    console.log(x.length % 2 === 0 ? value : !value);
    return;
  }

  console.log(x.length % 2 === 0 ? true : false);
  return;
}

negationOfValue("!!", []);
