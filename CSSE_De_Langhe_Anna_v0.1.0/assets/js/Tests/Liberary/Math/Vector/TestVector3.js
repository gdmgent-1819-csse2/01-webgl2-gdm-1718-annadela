import Vector3 from '../../../../Liberary/Math/Vector/Vector3.js'

export default class TestVector3
{
  constructor()
  {
    // super()
    console.info('test Vector3')
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
    const x2 = 2
    const y2 = 1
    const z2 = 4
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'x2=', x2, 'y2=', y2, 'z2=', z2)
    const expectedx = 4
    const expectedy = 2
    const expectedz = 7
    const v1 = new Vector3(x1, y1, z1)
    const v2 = new Vector3(x2, y2, z2)
    v1.add(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  
  SubTest()
  {
    console.log('Aftrekken')
    const x1 = 8
    const y1 = 4
    const z1 = 2
    const x2 = 2
    const y2 = 1
    const z2 = 8
    console.log('x1=', x1, 'y1=', y1, 'z1=', z1, 'x2=', x2, 'y2=', y2, 'z2=', z2)
    const expectedx = 6
    const expectedy = 3
    const expectedz = -6
    const v1 = new Vector3(x1, y1, z1)
    const v2 = new Vector3(x2, y2, z2)
    v1.sub(v2)
    const actualx = v1.x
    const actualy = v1.y
    const actualz = v1.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  ScalarTest()
  {
    console.log('Vermenigvuldigen')
    const x = 2
    const y = 3
    const z = 5
    const a = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'a=', a)
    const expectedx = 4
    const expectedy = 6
    const expectedz = 10
    const v = new Vector3(x, y, z)
    v.scalar(a)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  RotxTest()
  {
    console.log('Roteren rond x-as')
    const x = 2
    const y = 3
    const z = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 3
    const v = new Vector3(x, y, z)
    v.rotx(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  RotyTest()
  {
    console.log('Roteren rond y-as')
    const x = 2
    const y = 3
    const z = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 3
    const v = new Vector3(x, y, z)
    v.roty(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

  RotzTest()
  {
    console.log('Roteren rond z-as')
    const x = 2
    const y = 3
    const z = 4
    const α = 2
    console.log('x1=', x, 'y1=', y, 'z1=', z, 'α=', α)
    const expectedx = 2
    const expectedy = 3
    const expectedz = 3
    const v = new Vector3(x, y, z)
    v.rotz(α)
    const actualx = v.x
    const actualy = v.y
    const actualz = v.z
    this.assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  }

 


  assertIdentical(actualx,actualy, actualz, expectedx, expectedy, expectedz)
  {
    const actualroundx = Math.round(actualx)
    const actualroundy = Math.round(actualy)
    const actualroundz = Math.round(actualz)
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
  }
}