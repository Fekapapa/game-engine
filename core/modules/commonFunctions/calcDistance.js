'use strict'

const CalcDistance = (a, b) => {
  const aPow = Math.pow(a, 2);
  const bPow = Math.pow(b, 2)
  const cPow = aPow + bPow;
  const c = Math.sqrt(cPow);
  
  return c
}

export { CalcDistance };
