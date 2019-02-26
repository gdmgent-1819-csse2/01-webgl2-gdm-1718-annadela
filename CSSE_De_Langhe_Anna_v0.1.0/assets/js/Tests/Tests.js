import TestVector2 from './Liberary/Math/Vector/TestVector2.js'
import TestVector3 from './Liberary/Math/Vector/TestVector3.js'
import TestVector4 from './Liberary/Math/Vector/TestVector4.js'
import TestMatrix2 from './Liberary/Math/Matrix/TestMatrix2.js'
import TestMatrix3 from './Liberary/Math/Matrix/TestMatrix3.js'
import TestMatrix4 from './Liberary/Math/Matrix/TestMatrix4.js'

export default class Tests
{
  constructor()
  {
    console.log('Running...')
    new TestVector2()
    new TestVector3()
    new TestVector4()
    new TestMatrix2()
    new TestMatrix3()
    new TestMatrix4()
  }
}