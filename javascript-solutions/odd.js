function printOdds(min, max) {
  for (i = min; i <= max; i++) {
    if (i%2 > 0) {
      console.log(i);
    }
  }
}

printOdds(1, 99);