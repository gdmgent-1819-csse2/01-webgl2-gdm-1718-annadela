import Vector2 from '../../../../Liberary/Math/Vector/Vector2.js'

export default class TestVector2
{
  constructor()
  {
    // super()
    console.info('test Vector2')
    this.AddTest()
    this.SubTest()
    this.ScalarTest()
    this.RotTest()
  }

  AddTest()
  {
    console.log('Optellen')
    const x1 = 2
    const y1 = 1
    const x2 = 2
    const y2 = 1
    console.log('x1=', x1, 'y1=', y1, 'x2=', x2, 'y2=', y2)
    const expectedx = 4
    const expectedy = 2
    const v1 = new Vector2(x1, y1)
    const v2 = new Vector2(x2, y2)
    v1.add(v2)
    const actualx = v1.x
    const actualy = v1.y
    this.assertIdentical(actualx,actualy, expectedx, expectedy)
  }

  
  SubTest()
  {
    console.log('Aftrekken')
    const x1 = 8
    const y1 = 4
    const x2 = 2
    const y2 = 1
    console.log('x1=', x1, 'y1=', y1, 'x2=', x2, 'y2=', y2)
    const expectedx = 6
    const expectedy = 3
    const v1 = new Vector2(x1, y1)
    const v2 = new Vector2(x2, y2)
    v1.sub(v2)
    const actualx = v1.x
    const actualy = v1.y
    this.assertIdentical(actualx,actualy, expectedx, expectedy)
  }

  ScalarTest()
  {
    console.log('Vermenigvuldigen')
    const x = 2
    const y = 3
    const a = 2
    console.log('x1=', x, 'y1=', y, 'a=', a)
    const expectedx = 4
    const expectedy = 6
    const v = new Vector2(x, y)
    v.scalar(a)
    const actualx = v.x
    const actualy = v.y
    this.assertIdentical(actualx, actualy, expectedx, expectedy)
  }

  RotTest()
  {
    console.log('Roteren')
    const x = 2
    const y = 3
    const α = 2
    console.log('x1=', x, 'y1=', y, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const v = new Vector2(x, y)
    v.rot(α)
    const actualx = v.x
    const actualy = v.y
    this.assertIdentical(actualx, actualy, expectedx, expectedy)
  }

 


  assertIdentical(actualx,actualy, expectedx, expectedy)
  {
    const actualroundx = Math.round(actualx)
    const actualroundy = Math.round(actualy)
    if (actualroundx === expectedx) {
      console.log('PASS', `actual: ${actualroundx}`)
    } else {
      console.error('FAIL', `actual: ${actualroundx}`)
    }
    if (actualroundy === expectedy) {
      console.log('PASS', `actual: ${Math.round(actualroundy)}`)
    } else {
      console.error('FAIL', `actual: ${actualroundy}`)
    }
  }
}