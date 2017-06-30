const compose = (...fns) => {
    return fns.reverse().reduce((prevFn, currentFn) => value => currentFn(prevFn(value)), a => a)
}

export default compose