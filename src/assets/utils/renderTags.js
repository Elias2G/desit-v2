import React from 'react';

import { Tag } from '../../ui';

export const renderTags = (data) => {
  let tagList = ['technologie', 'wissenswertes', 'design'];

  if(data === '' || data === null || data === undefined || data === false) {
    return
  }

  if(!Array.isArray(data)) {
    data = [data];
  }

  return data.map((data, i) => {
    switch(data.toLowerCase()) {
      case tagList[0]:
      return <Tag key={i} bgColor="primary" color="fontSecondary">{data}</Tag>
      case tagList[1]:
      return <Tag key={i} bgColor="secondary" color="fontSecondary">{data}</Tag>
      case tagList[2]:
      return <Tag key={i} bgColor="tertiary" color="fontSecondary">{data}</Tag>
      default:
      return <Tag key={i} style={{background: '#ebebeb', color: '#2b2b2b'}}>{data}</Tag>
    }
  })
}
