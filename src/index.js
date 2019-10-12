module.exports = function zeros(expression) {
let zeros = 0;
let fives = 0;
let deuces = 0;
if (expression.indexOf('*') !== -1) {
  expression = expression.split('*')
  for (let i = 0; i <expression.length;i++) {

    if (expression[i].match(/!!/) === null) {
      let expr = +(expression[i].replace(/!/, ""));
      let power = 1;
      let fives = 5;

     while (expr >= Math.pow(fives, power)) { 
      let value = Math.pow(fives, power);
      zeros = Math.floor(expr / value) + zeros;
      power++;
      }
      if (expr >= 2 && expr % 2 === 0) {
        let expres = expr;
        while (expres >= 2 && expres % 2 === 0) {
          let exprn = expres;
          while (exprn >= 2 && exprn % 2 === 0) {
          exprn = exprn / 2;
          deuces++
          }
          expres = expres - 2;
        }
        
      } 
    } else {
      let expr = +(expression[i].replace(/!!/, ""));
      if (expr >= 5 && expr % 2 !== 0) {
        let expres = expr;
        while (expres >= 5) {
        let exprn = expres;
        while (exprn >= 5 && exprn % 5 === 0) {
        exprn = exprn / 5;
        fives++
        }
        expres = expres - 2;
      }
      } else if (expr >= 10 && expr % 2 === 0) {
        let expres = expr;
        while (expres >= 10) {
        let exprn = expres;
        while (exprn >= 10 && exprn % 5 === 0) {
        exprn = exprn / 5;
        fives++
        }
        expres = expres - 2;
      }
      }
    
      if (expr >= 2 && expr % 2 === 0) {
        let expres = expr;
        while (expres >= 2 && expres % 2 === 0) {
          let exprn = expres;
          while (exprn >= 2 && exprn % 2 === 0) {
          exprn = exprn / 2;
          deuces++
          }
          expres = expres - 2;
        }
        
      } 
    }
  }
  if (fives >= deuces) {
    zeros = zeros + deuces;
  } else {
    zeros = zeros + fives;
  }
} else {
  let expr = +(expression.replace(/!/, ""));
  let power = 1;
  let fives = 5;

 while (expr >= Math.pow(fives, power)) { 
  let value = Math.pow(fives, power);
  zeros = Math.floor(expr / value) + zeros;
  power++;
  }
}
return zeros;
}

