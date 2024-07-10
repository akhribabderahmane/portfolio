import React from 'react'
import {articles} from "./../../constant/articls"
import ArticleDetails from "./ArticleDetails"
const Article = () => {
  return (
    <div className=' flex flex-row  gap-6 overflow-x-scroll hide-scrollbar '>
      {articles.map((item,index)=>(<ArticleDetails item={item} key={index} />
    ))}
    </div>
  )
}

export default Article
