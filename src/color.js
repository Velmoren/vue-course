export default {
  //вызывается однократно, при первичном связывании директивы с элементом. Здесь можно поместить код инициализации.
  bind(el, bindings, vnode) {
    //аргумент атрибута (тот что после двоеточия) достаем из bindings.arg

    //достаем модификатор font (указывается после аргумента через точку) можно передать сколько угодно
    const fontModifier = bindings.modifiers['font']

    if(fontModifier) {
      el.style.fontSize = '30px'
    }

    const arg = bindings.arg
    const delayModifier = bindings.modifiers['delay']
    let delay = 0

    if(delayModifier) {
      delay = 2000
    }

    setTimeout(() => {
      //передавая строку, например 'red' как значение атрибута мы можем указать его из bindings.value
      el.style[arg] = bindings.value
    }, delay)
  },
  //вызывается после вставки связанного элемента внутрь элемента родителя
  inserted(el, bindings, vnode) {
    console.log('inserted')
  },
  //вызывается после обновления VNode компонента-контейнера, но, возможно, до обновления дочерних элементов.
  //начение директивы к этому моменту может измениться, а может и нет. Сравнивая текущее и прошлое значения,
  //вы можете избежать избыточных операций
  update(el, bindings, vnode, oldVnode) {
    console.log('update')
  },
  //ызывается после обновления как VNode компонента-контейнера, так и VNode его потомков.
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('componentUpdated')
  },
  //вызывается однократно, при отвязывании директивы от элемента.
  unbind() {
    console.log('unbind')
  }
}
