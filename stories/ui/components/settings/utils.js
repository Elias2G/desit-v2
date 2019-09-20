// NOTE: in the refactoring process all styles that arent needed in the default styling
// should be set when a prop with true is passed down.





// Padding & Margin Style funtions
export const setMargin = (props, object) => {
  return props.nom ? "0" : props.margin ? props.margin : object;
};

export const setPadding = (props, object) => {
  return props.nop ? "0" : props.padding ? props.padding : object;
};

// Font Style Funtions
export const setFontSize = (props, object) => {
  return props.size ? object[props.size] : null;
};

export const setFontWeight = (props, object) => {
  return props.weight ? props.weight : object;
};

export const setFontFamily = (props, object) => {
  return props.family ? props.family : object;
};

// Color Funtions
export const setColors = (props, object) => {
  return props.color ? object[props.color] : null;
};

export const setBgColors = (props, object) => {
  return props.bgColor ? object[props.bgColor] : null;
};

export const setGradientBg = (props, object) => {
  return props.withGradient === "tertiary" ? object.tertiary.first + ',' + object.tertiary.second :
  props.withGradient === "secondary" ? object.secondary.first + ',' + object.secondary.second :
  object.primary.first + ',' + object.primary.second;
}

// GRID FUNCTIONS
export const setAlignGrid = (props) => {
  return props.align ? props.align : "inherit";
}

export const setJustifyGrid = (props) => {
  return props.justify ? props.justify : "inherit";
}

// Single Element Styles like disabled button
export const disabled = (props) => {
  return props.disabled ? "opacity: 0.3; pointer-events: none;" : "inherit";
}
export const setShadow = (props, object) => {
  return props.shadow === "small" ? object.small : props.shadow === "medium" ? object.medium : props.shadow === "large" ? object.large : null;
}
