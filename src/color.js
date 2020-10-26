export default {
  //вызывается однократно, при первичном связывании директивы с элементом. Здесь можно поместить код инициализации.
  bind(el, bindings, vnode) {
    console.log('bind')
    el.style.color = 'blue'
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
