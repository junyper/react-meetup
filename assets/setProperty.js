const setNodeProperties = function (node, properties) {
  Object.keys(properties).forEach(function (propertyName) {
    const value = properties[propertyName]
    if (value) {
      node.style.setProperty(propertyName, value)
    }
  })
}
