export default class Matrix2
{
  constructor(items) {
    this.items = items || [
      0, 0,
      0, 0,
    ]
  }

  add(b)
  {
    const a = this.items
    this.items = [
      a[0] + b[0], a[1] + b[1],
      a[2] + b[2], a[3] + b[3],
    ]
  }

  sub(b)
  {
      const a = this.items
      this.items = [
          a[0] - b[0], a[1] - b[1],
          a[2] - b[2], a[3] - b[3],
      ]
  }

  mul(b) {
    const a = this.items
    const c = []
    c[0] = a[0] * b[0] + a[1] * b[2]
    c[1] = a[0] * b[1] + a[1] * b[3]
    c[2] = a[2] * b[0] + a[3] * b[2]
    c[3] = a[2] * b[1] + a[3] * b[3]

    this.items = c
  }

  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const a = this.items
    const r = [
        cos, -sin,
        sin, cos,
    ]
    this.items = r
    this.mul(a);
  }
}