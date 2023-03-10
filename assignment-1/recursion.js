function fibs(n) {
  // Fibonacci iterative
  if (n < 0) return new Error("Invalid Input");
  if (n === 0) return [];
  if (n === 1) return [0];

  const output = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    output.push(output[i] + output[i + 1]);
  }
  return output;
}

function fibsRec(n) {
  //Fibonacci recursive
  return n <= 1 ? n : fibsRec(n - 1) + fibsRec(n - 2);
}

