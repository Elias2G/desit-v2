import React from 'react';

import { Tag } from '../../ui';

export const renderTags = (data) => {
  let tagList = ['technologie', 'wissenswertes', 'design'];
  return data.map((data, i) => {
    switch(data.toLowerCase()) {
      case tagList[0]:
      return <Tag key={i} bgColor="primaryDark" color="fontSecondary">{data}</Tag>
      case tagList[1]:
      return <Tag key={i} bgColor="secondaryDark" color="fontSecondary">{data}</Tag>
      case tagList[2]:
      return <Tag key={i} bgColor="tertiaryDark" color="fontSecondary">{data}</Tag>
      default:
      return <Tag key={i} style={{background: '#2b2b2b', color: 'white'}}>{data}</Tag>
    }
  })
}
