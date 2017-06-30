const add = a => b => a + b
const multi = a => b => a * b
import compose from './compose'
// const add2multi3add3 = a => add(3)(multi(3)(add(2)(a)))
const add2multi3add3 = a => compose(add(2), multi(3), add(3))(a)
