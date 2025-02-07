import React from 'react'

function ReadingTime({ content }) {
    const wordsCount = content.match(/\b\w+\b/gi).length
    const time = Math.ceil(wordsCount / 200)

  return (
    <p className="time">{time} MINS READ</p>
  )
}

export default ReadingTime