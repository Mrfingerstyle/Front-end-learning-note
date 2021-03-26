const div = dom.create('<div>newDiv</div>');
dom.after(test, div)

// const newSpan = dom.create('<span>newSpan</span>')
// dom.before(test, newSpan)
// dom.append(newDiv, dom.create('<p>p tag</p>'))

const div_3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div_3)

// let removeNode = dom.remove(test)
// console.log(removeNode);

let ul = document.querySelector('#empty')
let empty = dom.empty(ul)
console.log(empty);

dom.attr(test, 'title', 'hi, I am frank')
let attrValue = dom.attr(test, 'title')
console.log(attrValue);

let spanTag = document.querySelector('#span-tag')
dom.text(spanTag, 'hi')
console.log(dom.text(spanTag))

dom.html(spanTag, 'html inner')
console.log(dom.html(spanTag))

dom.style(spanTag, {border: '10px solid red', color: 'blue'})
console.log( dom.style(spanTag, 'border'))
dom.style(spanTag, 'border', '10px solid pink')

dom.class.add(test, 'red')
console.log(dom.class.has(test, 'blue'))

const fn = () => {
    console.log('点击了');
}

dom.on(test, 'click', fn)

dom.off(test, 'click', fn)

console.log(dom.find('#test'));
console.log(dom.find('.test', test));

console.log(dom.parent(spanTag));
console.log(dom.children(dom.find('#test')));

console.log(dom.siblings(spanTag));
console.log(dom.next(spanTag));
console.log(dom.previous(spanTag));

let travel = dom.find('#travel')
dom.each(dom.children(travel), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(document.querySelector('#li-3')));




























