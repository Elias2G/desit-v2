import React from 'react';
import styled from 'styled-components';

import {
  color, gradients, buttonColor,
  setFontFamily,
  font, padding, margin, shadow,
  setFontWeight,
  setFontSize, setMargin,
  setPadding, setBgColors, setGradientBg,
  disabled, setShadow
} from './settings';

//Set REAPEATING STYLES FOR EVERY BUTTON ELEMENT
const DefaultButtonStyle = styled.button`
  max-width: auto;
  cursor: pointer;
  transition: 200ms;
  font-family: ${props => setFontFamily(props, font.family.button)};
  font-weight: ${props => setFontWeight(props, font.weight.button)};
  font-size: ${props => setFontSize(props, font.size.button)};
  padding: ${props => setPadding(props, padding.button)};
  margin: ${props => setMargin(props, margin.button)};
  ${props => setShadow(props, shadow)};
  ${props => disabled(props)};
`;

//Someone pls clean this mess up

const PrimaryButton = styled(DefaultButtonStyle)`
  border-radius: 50px;
  border: 2px solid ${props => props.bgColor === "secondary" ? buttonColor.secondary : props.bgColor === "tertiary" ? buttonColor.tertiary : buttonColor.primary};
  background-color: ${props => props.bgColor === "secondary" ? buttonColor.secondary : props.bgColor === "tertiary" ? buttonColor.tertiary : buttonColor.primary};
  color: ${props => props.bgColor === "secondary" ? buttonColor.primaryToogle : props.bgColor === "tertiary" ? buttonColor.tertiaryToogle : buttonColor.primaryToogle};
  text-transform: ${props =>
    props.toUppercase ? "uppercase" : "inherit"
  };
  :hover {
    background-color: ${props => props.bgColor === "secondary" ? buttonColor.primaryToogle : props.bgColor === "tertiary" ? buttonColor.tertiaryToogle : buttonColor.primaryToogle};
    color: ${props => props.bgColor === "secondary" ? buttonColor.secondary : props.bgColor === "tertiary" ? buttonColor.tertiary : buttonColor.primary};
  };
`;

const PrimaryReversedButton = styled(PrimaryButton)`
  background-color: ${props => props.bgColor === "secondary" ? buttonColor.primaryToogle : props.bgColor === "tertiary" ? buttonColor.tertiaryToogle : buttonColor.primaryToogle};
  color: ${props => props.bgColor === "secondary" ? buttonColor.secondary : props.bgColor === "tertiary" ? buttonColor.tertiary : buttonColor.primary};
  :hover {
    border: 2px solid ${props => props.bgColor === "secondary" ? buttonColor.secondary : props.bgColor === "tertiary" ? buttonColor.tertiary : buttonColor.primary};
    background-color: ${props => props.bgColor === "secondary" ? buttonColor.secondary : props.bgColor === "tertiary" ? buttonColor.tertiary : buttonColor.primary};
    color: ${props => props.bgColor === "secondary" ? buttonColor.primaryToogle : props.bgColor === "tertiary" ? buttonColor.tertiaryToogle : buttonColor.primaryToogle};
  }
`;

const SecondaryButton = styled(DefaultButtonStyle)`
  border: 0;
  background-color: ${props => props.bgColor === "secondary" ? buttonColor.secondaryDark : props.bgColor === "tertiary" ? buttonColor.tertiaryDark : buttonColor.primaryDark};
  color: ${props => props.bgColor === "secondary" ? buttonColor.primaryDarkToogle : props.bgColor === "tertiary" ? buttonColor.tertiaryDarkToogle : buttonColor.primaryDarkToogle};
  text-transform: ${props =>
    props.toUppercase ? "uppercase" : "inherit"
  };
  :hover {
    background-color: ${props => props.bgColor === "secondary" ? buttonColor.primaryDarkToogle : props.bgColor === "tertiary" ? buttonColor.tertiaryDarkToogle : buttonColor.primaryDarkToogle};
    color: ${props => props.bgColor === "secondary" ? buttonColor.secondaryDark : props.bgColor === "tertiary" ? buttonColor.tertiaryDark : buttonColor.primaryDark};
  };
`;

const GradientButton = styled(DefaultButtonStyle)`
  border: 0;
  border-radius: 50px;
  color: ${props => props.bgColor === "secondary" ? buttonColor.primaryToogle : props.bgColor === "tertiary" ? buttonColor.tertiaryToogle : buttonColor.primaryToogle};
  text-transform: ${props =>
    props.toUppercase ? "uppercase" : "inherit"
  };
  background: linear-gradient(90deg, ${props => setGradientBg(props, gradients)});
  :hover {
    opacity: 0.8;
  }
`;

export const Button = (props) => {
  switch(props.variant) {
    case "primary":
    return <PrimaryButton {...props}>{props.children}</PrimaryButton>
    case "primaryReversed":
    return <PrimaryReversedButton {...props}>{props.children}</PrimaryReversedButton>
    case "secondary":
    return <SecondaryButton {...props}>{props.children}</SecondaryButton>
    case "gradient":
    return <GradientButton {...props}>{props.children}</GradientButton>
    default:
    return null;
  }
};
