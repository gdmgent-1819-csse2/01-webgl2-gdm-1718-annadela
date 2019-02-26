import Matrix3 from '../Matrix/Matrix3.js'

export default class Vector3
{
  /**
   * Represents a two-diractional-vector
   * 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} z
   */
  constructor(x,y,z)
  {
     this.x=Number(x)||0
     this.y=Number(y)||0
     this.z=Number(z)||0
  }

  // Length of the vector
  norm()
  {
    return Math.sqrt(this.x**2 + this.y**2 + this.y**2)
  }

  add(v)
  {
    this.x = this.x += v.x
    this.y = this.y += v.y
    this.z = this.z += v.z
  }

  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
  }

  scalar(a) {
      this.x *= a
      this.y *= a
      this.z *= a
  }

  dot(v)
  {
    this.p = this.x * v.x + this.y * v.y + this.z * v.z
    return this.p
  }

  rotx(α)
  {
    const m = new Matrix3([this.x, 0, 0,this.y, 0, 0, this.y, 0, 0])
    m.rotx(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[3]
    this.z = m.items[6]
  }

  roty(α)
  {
    const m = new Matrix3([this.x, 0, 0,this.y, 0, 0, this.y, 0, 0])
    m.roty(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[3]
    this.z = m.items[6]
  }

  rotz(α)
  {
    const m = new Matrix3([this.x, 0, 0,this.y, 0, 0, this.y, 0, 0])
    m.rotz(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[3]
    this.z = m.items[6]
  }
}