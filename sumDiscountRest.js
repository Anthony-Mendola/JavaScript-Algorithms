function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount); //returns final price after discount is applied
}

console.log(sum(0.1, 20, 30));
