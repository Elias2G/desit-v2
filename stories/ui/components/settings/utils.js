

// Padding & Margin Style funtions
export const setMargin = (props, object) => {
  return props.nom ? "0" : props.margin === "" ? props.margin : object;
};

export const setPadding = (props, object) => {
  return props.nop ? "0" : props.padding === "" ? props.padding : object;
};

// Font Style Funtions
export const setFontSize = (props, object) => {
  return props.size === "small" ? object.small :
  props.size === "large" ? object.large :
  props.size === "medium" ? object.medium :
  "inherit"
};

export const setFontWeight = (props, object) => {
  return props.weight === "" ? props.weight : object;
};

// Color Funtions
export const setColors = (props, object) => {
  return props.color === "primary" ? object.primary :
  props.color === "secondary" ? object.secondary :
  props.color === "tertiary" ? object.tertiary :
  props.color === "accent" ? object.accent :
  props.color === "fontColorSecondary" ? object.fontSecondary:
  object.fontPrimary
};
