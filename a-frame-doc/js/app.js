var extendDeep = AFRAME.utils.extendDeep
var meshMixin = AFRAME.primitives.getMeshMixin()

AFRAME.registerPrimitive(
  'a-boxx',
  extendDeep({}, meshMixin, {
    defaultComponents: {
      geometry: { primitive: 'box' },
    },
    mappings: {
      depth: 'geometry.depth',
      height: 'geometry.height',
      width: 'geometry.width',
    },
  })
)

AFRAME.registerComponent('log', {
  schema: { type: 'string' },

  init: function () {
    var stringToLog = this.data
    console.log(stringToLog)
    console.log(this.el.getAttribute('position'))
  },
})

// const scene = document.createElement('a-scene')
// const box = document.createElement('a-box')
// document.body.appendChild(scene)
// box.setAttribute('position', '0 0 -5')
// box.setAttribute('color', '#ff0000')
// scene.appendChild(box)
