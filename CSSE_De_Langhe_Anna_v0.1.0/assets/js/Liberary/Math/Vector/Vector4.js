import Matrix4 from '../Matrix/Matrix4.js'

export default class Vector4
{
  /**
   * Represents a two-diractional-vector
   * 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} z
   */
  constructor(x,y,z,w)
  {
     this.x=Number(x)||0
     this.y=Number(y)||0
     this.z=Number(z)||0
     this.w=Number(w)||0
  }

  // Length of the vector
  norm()
  {
    return Math.sqrt(this.x**2 + this.y**2 + this.y**2 + this.w**2)
  }

  add(v)
  {
    this.x = this.x += v.x
    this.y = this.y += v.y
    this.z = this.z += v.z
    this.w = this.w += v.w
  }

  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
    this.w -= v.w
  }

  scalar(a) {
      this.x *= a
      this.y *= a
      this.z *= a
      this.w *= a
  }

  dot(v)
  {
    this.p = this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w
    return this.p
  }

  rotx(α)
  {
    const m = new Matrix4([this.x, 0, 0, 0,this.y, 0, 0, 0,this.y, 0, 0, 0, this.w, 0, 0, 0])
    m.rotx(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[4]
    this.z = m.items[8]
    this.w = m.items[12]
  }

  roty(α)
  {
    const m = new Matrix4([this.x, 0, 0, 0,this.y, 0, 0, 0,this.y, 0, 0, 0, this.w, 0, 0, 0])
    m.roty(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[4]
    this.z = m.items[8]
    this.w = m.items[12]
  }

  rotz(α)
  {
    const m = new Matrix4([this.x, 0, 0, 0,this.y, 0, 0, 0,this.y, 0, 0, 0, this.w, 0, 0, 0])
    m.rotz(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[4]
    this.z = m.items[8]
    this.w = m.items[12]
  }
}