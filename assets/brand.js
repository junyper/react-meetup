export default Object.freeze({
  // These need to meet 3:1 contrast requirements when used as text against background
  // colors lightest or when used as a background with text colors lightest
  brand: '#008EE2',
  info: '#008EE2',
  success: '#00AC18',
  action: '#BF32A4',
  danger: '#EE0612',
  warning: '#FC5E13',

  // these need to meet 3:1 contrast as background with text colors light and lightest
  // or as text with background light and lightest
  darkest: '#2D3B45',
  dark: '#394B58',

  // should meet 3:1 contrast as text with background colors light and lightest
  // and as background color with text colors light and lightest
  medium: '#73818C',

  border: '#C7CDD1', // used only for borders (where contrast with text isn't an issue)

  // these need to meet 3:1 contrast as background with text colors dark and darkest
  // and as text with backround colors dark and darkest
  light: '#F5F5F5',
  lightest: '#FFFFFF'
})
