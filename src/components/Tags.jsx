import React from 'react'
import css from '../styles/tags.module.css'
import { Tag } from './Tag.jsx'

export const Tags = ({ tags, onClickRemove }) => {
  return (
    <div className={css.tags}>
      {tags.map((tag, idx) => (
        <Tag key={`${idx}`} text={tag} onClickRemove={() => onClickRemove(idx)} addClass={css.tag}/>
      ))}
    </div>
  )
}