import Vector4 from '../../../../Liberary/Math/Vector/Vector4.js'

export default class TestVector4
{
  constructor()
  {
    // super()
    console.info('test Vector4')
    this.AddTest()
    this.SubTest()
    this.ScalarTest()
    this.RotxTest()
    this.RotyTest()
    this.RotzTest()
  }

  AddTest()
  {
    console.log('Optellen')
    const x1 = 2
    const y1 = 1
    const z1 = 3
    const w1 = 1
    const x2 = 2
    const y2 = 1
    const z2 = 4
    const w2 = 1
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'w1=', w1, 'x2=', x2, 'y2=', y2, 'z2=', z2, 'w2=', w2)
    const expectedx = 4
    const expectedy = 2
    const expectedz = 7
    const expectedw = 2
    const v1 = new Vector4(x1, y1, z1, w1)
    const v2 = new Vector4(x2, y2, z2, w1)
    v1.add(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    const actualw = v1.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  
  SubTest()
  {
    console.log('Aftrekken')
    const x1 = 8
    const y1 = 4
    const z1 = 2
    const w1 = 10
    const x2 = 2
    const y2 = 1
    const z2 = 8
    const w2= 5
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'w1=', w1, 'x2=', x2, 'y2=', y2, 'z2=', z2, 'w2=', w2)
    const expectedx = 6
    const expectedy = 3
    const expectedz = -6
    const expectedw = 5
    const v1 = new Vector4(x1, y1, z1, w1)
    const v2 = new Vector4(x2, y2, z2, w2)
    v1.sub(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    const actualw = v1.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  ScalarTest()
  {
    console.log('Vermenigvuldigen')
    const x = 2
    const y = 3
    const z = 5
    const w = 6
    const a = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z,'w1=', w, 'a=', a)
    const expectedx = 4
    const expectedy = 6
    const expectedz = 10
    const expectedw = 12
    const v = new Vector4(x, y, z, w)
    v.scalar(a)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  RotxTest()
  {
    console.log('Roteren rond x-as')
    const x = 2
    const y = 3
    const z = 4
    const w = 1
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z,'w1=', w, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 3
    const expectedw = 1
    const v = new Vector4(x, y, z, w)
    v.rotx(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  RotyTest()
  {
    console.log('Roteren rond y-as')
    const x = 2
    const y = 3
    const z = 4
    const w = 1
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z,'w1=', w, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 3
    const expectedw = 1
    const v = new Vector4(x, y, z, w)
    v.roty(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

  RotzTest()
  {
    console.log('Roteren rond z-as')
    const x = 2
    const y = 3
    const z = 4
    const w = 1
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z,'w1=', w, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 3
    const expectedw = 1
    const v = new Vector4(x, y, z, w)
    v.rotz(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    const actualw = v.w
    this.assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  }

 


  assertIdentical(actualx,actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
  {
    const actualroundx = Math.round(actualx)
    const actualroundy = Math.round(actualy)
    const actualroundz = Math.round(actualz)
    const actualroundw = Math.round(actualw)
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
    if (actualroundz === expectedz) {
      console.log('PASS', `actual: ${Math.round(actualroundz)}`)
    } else {
      console.error('FAIL', `actual: ${actualroundz}`)
    }
    if (actualroundw === expectedw) {
      console.log('PASS', `actual: ${Math.round(actualroundw)}`)
    } else {
      console.error('FAIL', `actual: ${actualroundw}`)
    }
  }
}