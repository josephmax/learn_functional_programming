import compose from './compose'
const tag = tagName => content => `<${tagName}>${content}</${tagName}>`
// console.log(tag('div')('i am a div'))

const toAttribute = (x = {}) => Object.keys(x).map((key) => `${key}="${x[key]}"`).reduce((a, b) => `${a} ${b}`, '')

const tagV2 = ({ tag, attr }) => {
    return content => `<${tag}${toAttribute(attr)}>${content}</${tag}>`
}
const ul_el = tagV2({
    tag: 'ul',
    attr: {
        id: 'list-container'
    }
})

const li_el = tagV2({
    tag: 'li',
    attr: {
        'class': 'list-item'
    }
})

const list_items = list => list.map((item) => {
    return li_el(item)
}).join('\n\r')

const ul_li = compose(ul_el, list_items)
console.log(ul_li(['a', 'b', 'c', 'd']))