import React from 'react'
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
   return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
       <rect x="21" y="32" rx="0" ry="0" width="256" height="228" /> 
      <rect x="20" y="281" rx="0" ry="0" width="258" height="27" /> 
      <rect x="89" y="328" rx="0" ry="0" width="127" height="27" /> 
      <rect x="18" y="375" rx="0" ry="0" width="273" height="31" />
    </ContentLoader>
  )
}

export {LoadingBlock}