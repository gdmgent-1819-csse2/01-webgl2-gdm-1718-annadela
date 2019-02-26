import Matrix2 from '../../../../Liberary/Math/Matrix/Matrix2.js'
import TestMatrix from './TestMatrix.js'

export default class TestMatrix2 extends TestMatrix
{
  constructor()
  {
    super()
    console.info('test Matrix2')
    this.AddTest()
    this.SubTest()
    this.MulTest()
    this.MulIdTest()
    this.RotTest()
  }

  AddTest()
  {
    console.log('Optellen')
    const a = [
      1, 2,
      3, 4,
    ]
    const b = [
      5, 6,
      7, 8,
    ]
    console.log(a, b)
    const expected = [
      6, 8,
      10, 12,
    ]
    const m = new Matrix2(a)
    m.add(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  SubTest()
  {
    console.info('Aftrekken')
    const a = [
      1, 2,
      3, 4,
    ]
    const b = [
      9, 8,
      7, 6,
    ]
    const expected = [
      -8, -6,
      -4, -2,
    ]
    console.log(a, b)
    const m = new Matrix2(a)
    m.sub(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  MulTest() 
  {
    console.info('Vermenigvuldigen')
    const a = [
        1, 2,
        3, 4,
    ]
    const b = [
        2, -1,
        -1, 2,
    ]
    console.log(a, b)
    const expected = [
        0, 3,
        2, 5,
    ]
    const m = new Matrix2(a)
    m.mul(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  MulIdTest() 
  {
    console.info('Vermenigvuldigen met Id')
    const a = [
        1, 2,
        3, 4,
    ]
    const i = [
        1, 0,
        0, 1,
    ]
    console.log(a, i)
    const expected = [
        1, 2,
        3, 4,
    ]
    const m = new Matrix2(a)
    m.mul(i)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  RotTest() {
    console.info('Roteren')
    const α = 90
    const a = [
        3, 0,
        1, 0,
    ]
    console.log(α, a)
    const expected = [
        -1, 0,
        3, 0,
    ]
    const m = new Matrix2(a)
    m.rot(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
}

}