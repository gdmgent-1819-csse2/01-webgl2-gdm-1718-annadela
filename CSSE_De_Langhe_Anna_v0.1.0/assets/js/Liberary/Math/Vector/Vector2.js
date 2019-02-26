import Matrix2 from '../Matrix/Matrix2.js'

export default class Vector2
{
  /**
   * Represents a two-diractional-vector
   * 
   * @param {Number} x 
   * @param {Number} y 
   */
  constructor(x,y)
  {
     this.x=Number(x)||0
     this.y=Number(y)||0
  }

  // Length of the vector
  norm()
  {
    return Math.sqrt(this.x**2 + this.y**2)
  }

  /**
   * 
   * @param {Vector2} v 
   */
  add(v)
  {
    this.x = this.x += v.x
    this.y = this.y += v.y
  }

  /**
   * Substraction
   * 
   * @param {vector2} v
   */
  sub(v) {
    this.x -= v.x
    this.y -= v.y
  }

  /**
   * Scalar multipplication
   * 
   * @param {Number} a
   */
  scalar(a) {
      this.x *= a
      this.y *= a
  }

  /**
   * Calculate the dot product of the current vector and another vector.
   * 
   * @returns {Number}
   */
  dot(v)
  {
    this.p = this.x * v.x + this.y * v.y
      return this.p
  }

  /**
   * Rotate the vector around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α)
  {
    const m = new Matrix2([this.x, 0, this.y, 0])
    m.rot(α)
    console.log(m)
    this.x = m.items[0]
    this.y = m.items[2]
  }
}