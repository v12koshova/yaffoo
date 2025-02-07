import { format } from 'date-fns'
import React from 'react'

function PostDate({ date }) {
    const postDate = format(date, "MMMM d, y").toLocaleUpperCase()
  return (
    <p className="date">{ postDate }</p>
  )
}

export default PostDate