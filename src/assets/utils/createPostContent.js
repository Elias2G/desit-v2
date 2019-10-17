import React from 'react';
import { Title, Text, Image, Button } from '../../ui';

export const createPostContent = function(data) {
  console.log(data);
  return data.map((data, i) => {
    return checkDataType(data);
  })
}

const checkDataType = (data) => {
  switch(data.component) {
    case "heading":
    return headingComponent(data.settings);
    case "text":
    return textComponent(data.settings);
    case "image":
    return imageComponent(data.settings);
    case "divider":
    return dividerComponent(data.settings);
    case "button":
    return buttonComponent(data.settings);
    default:
    return null;
  }
}

const headingComponent = (data) => {
  const { tag, text, style, id } = data;
  return (
    <Title variant={data.tag} size="medium">
      {text}
    </Title>
  );
}
const textComponent = (data) => {
  const { tag, text, style, id } = data;
  return (
    <div className="singlePostStyle" dangerouslySetInnerHTML={{__html: text}}></div>
  );
}
const imageComponent = (data) => {
  const { tag, text, style, id, image } = data;
  return (
    <Image src={"http://127.0.0.1" + image.path} />
  );
}
const dividerComponent = (data) => {
  const { tag, text, style, id } = data;
  return (
    <hr className="singlePostStyle" />
  );
}
const buttonComponent = (data) => {
  const { tag, text, style, id } = data;
  return (
    <Button size="small" variant="primary">{text}</Button>
  );
}
