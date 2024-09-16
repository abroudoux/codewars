function projectPartners(n) {
  let pairs = 0;

  for (let i = 1; i <= n; i++) {
    pairs += n - i;
  }

  console.log(pairs);
}

projectPartners(5);
