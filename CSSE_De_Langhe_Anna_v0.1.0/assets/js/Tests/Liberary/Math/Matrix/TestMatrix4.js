import Matrix4 from '../../../../Liberary/Math/Matrix/Matrix4.js'
import TestMatrix from './TestMatrix.js'

export default class TestMatrix4 extends TestMatrix
{
  constructor()
  {
    super()
    console.info('test Matrix4')
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
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]
    const b = [
      9, 4, 10, 8,
      10, 3, 9, 7,
      3, 2, 1, 10,
      8, 9, 4, 8,
    ]
    console.log(a,b)
    const expected = [
      10, 4, 10, 8,
      10, 4, 9, 7,
      3, 2, 2, 10,
      8, 9, 4, 9,
    ]
    const m = new Matrix4(a)
    m.add(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  SubTest()
  {
    console.log('Aftrekken')
    const a = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]
    const b = [
      9, 4, 10, 8,
      10, 3, 9, 7,
      3, 2, 1, 10,
      8, 9, 4, 8,
    ]
    const expected = [
      -8, -4, -10, -8,
      -10, -2, -9, -7,
      -3, -2, 0, -10,
      -8, -9, -4, -7,
    ]
    console.log(a,b)
    const m = new Matrix4(a)
    m.sub(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  MulTest() 
  {
    console.info('Vermenigvuldigen')
    const a = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]
    const b = [
      9, 4, 10, 8,
      10, 3, 9, 7,
      3, 2, 1, 10,
      8, 9, 4, 8,
    ]
    console.log(a,b)
    const expected = [
      9, 4, 10, 8,
      10, 3, 9, 7,
      3, 2, 1, 10,
      8, 9, 4, 8,
    ]
    const m = new Matrix4(a)
    m.mul(b)
    const actual = m.items
    this.assertIdentical(actual, expected)
  }

  RotxTest() {
    console.info('Roteren rond x-as')
    const α = 90
    const a = [
      1, 0, 0, 0,
      0, 1, 0, 0, 
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]
    console.log(a,α)
    const expected = [
      1, 0, 0, 0,
      0, 0, -1, 0,
      0, 1, 0, 0,
      0, 0, 0, 1,
    ]
    const m = new Matrix4(a)
    m.rotx(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
  }

  RotyTest() {
    console.info('Roteren rond y-as')
    const α = 90
    const a = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]
    console.log(a,α)
    const expected = [
      0, 0, 1, 0,
      0, 1, 0, 0,
      -1, 0, 0, 0,
      0, 0, 0, 1,
    ]
    const m = new Matrix4(a)
    m.roty(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
  }

  RotzTest() {
    console.info('Roteren rond z-as')
    const α = 90
    const a = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]
    console.log(a,α)
    const expected = [
      0, -1, 0, 0,
      1, 0, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ]
    const m = new Matrix4(a)
    m.rotz(α)
    const actual = m.items
    this.assertIdenticalRounded(actual, expected)
  }
}