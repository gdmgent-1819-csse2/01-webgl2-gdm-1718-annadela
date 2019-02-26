import Matrix3 from '../../../../Liberary/Math/Matrix/Matrix3.js'
import TestMatrix from './TestMatrix.js'

export default class TestMatrix3 extends TestMatrix
{
  constructor()
  {
    super()
    console.info('test Matrix3')
    this.AddTest()
    this.SubTest()
    this.MulTest()
    this.RotxTest()
    this.RotyTest()
    this.RotzTest()
  }

  AddTest()
  {
    console.log('Optellen')
    const a = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]
    const b = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9,
    ]
    console.log(a, b)
    const expected = [
      2, 2, 3,
      4, 6, 6,
      7, 8, 10,
    ]
    const m = new Matrix3(a)
    m.add(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  SubTest()
  {
    console.info('Aftrekken')
    const a = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]
    const b = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9,
    ]
    console.log(a, b)
    const expected = [
      0, -2, -3,
      -4, -4, -6,
      -7, -8, -8,
    ]
    const m = new Matrix3(a)
    m.sub(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  MulTest() 
  {
    console.info('Vermenigvuldigen')
    const a = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]
    const b = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9,
    ]
    console.log(a, b)
    const expected = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9,
    ]
    const m = new Matrix3(a)
    m.mul(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  RotxTest() {
    console.info('Roteren rond x-as')
    const α = 90
    const a = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]
    console.log(a, α)
    const expected = [
      1, 0, 0,
      0, 0, -1,
      0, 1, 0,
    ]
    const m = new Matrix3(a)
    m.rotx(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
  }

  RotyTest() {
    console.info('Roteren rond y-as')
    const α = 90
    const a = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]
    console.log(a, α)
    const expected = [
      0, 0, 1,
      0, 1, 0,
      -1, 0, 0,
    ]
    const m = new Matrix3(a)
    m.roty(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
  }

  RotzTest() {
    console.info('Roteren rond y-as')
    const α = 90
    const a = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]
    console.log(a, α)
    const expected = [
      0, -1, 0,
      1, 0, 0,
      0, 0, 1,
    ]
    const m = new Matrix3(a)
    m.rotz(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
  }
}