// Write an efficient method that tells us whether or not an input string brackets ("{", "}",
//   "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
//   “{([)]}” => false

function checkBracketsBalanced(inputBrackets) {
  const stack = []
  const openingBrackets = ['{', '(', '[']
  const closingBrackets = ['}', ')', ']']
  const matchingBrackets = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  for (const bracket of inputBrackets) {
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket)
    } else if (closingBrackets.includes(bracket)) {
      if (stack.length === 0 || bracket !== matchingBrackets[stack.pop()]) {
        return false
      }
    } else {
      return false
    }
  }

  return stack.length === 0
}


const isBalanced = checkBracketsBalanced('{([)]}')
console.log(isBalanced)