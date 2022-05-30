import React from 'react'
import Article from './Article'
import blogData from '../data/blog'

function ArticleList() {
  const articlePosts = blogData.posts.map(element => {
    // console.log(element)
    return (
      <Article
        key={element.id}
        title={element.title}
        date={element.date}
        preview={element.preview}
      />
    )
  })

  return <main>{articlePosts}</main>
}

export default ArticleList
