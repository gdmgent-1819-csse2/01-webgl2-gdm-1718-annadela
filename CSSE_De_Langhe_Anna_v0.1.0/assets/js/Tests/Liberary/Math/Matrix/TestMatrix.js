export default class TestMatrix
{
  assertIdentical(actual, expected)
  {
    for (let i=0; i<expected.length; i++) {
      if (actual[i] === expected[i]) {
        console.log(i, 'PASS', `actual: ${actual[i]}`)
      } else {
        console.error(i, 'FAIL', `actual: ${actual[i]}`)
      }
    }
  }

  assertIdenticalRounded(actual, expected) {
    for (let i = 0; i < expected.length; i++) {
        const actualRounded = Math.round(actual[i])
        if (actualRounded === expected[i]) {
            console.log(i, 'PASS', `actual: ${actualRounded}`)
        } else {
            console.error(i, 'FAIL', `actual: ${actualRounded}, expected: ${expected[i]}`);
        }
    }
  }
}