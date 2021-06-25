import React, { Component } from 'react';

import './item-list.css'

const ItemList = (props: any) => {

  const { data, onItemSelected, renderLabel } = props


  const items = data.map((item: any) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  })

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  )
}

export default ItemList