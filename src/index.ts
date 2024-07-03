function calculateTax(income: number, state: string) {
  let tax = 0
  if (state === 'NY') {
    tax = income * 0.06
  } else if (state === 'NJ') {
    tax = income * 0.05
  }
  return tax
}

console.log(calculateTax(50000, 'NY')); // 3000