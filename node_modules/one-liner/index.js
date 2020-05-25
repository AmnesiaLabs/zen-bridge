module.exports = function oneliner(strings, ...values) {
  const str = strings.raw ? processTemplateLiterals(strings, values) : strings
  return str.replace(/[\r\n\t ]+/g, ' ')
}

function processTemplateLiterals(strings, values) {
  return strings.reduce((res, v, i) => res + v + (values[i] || ''), '')
}
