import React from 'react'
import BlogCard from '../../components/cards/BlogCard'

function Blog() {
  return (
    <>
    <article className="blog" data-page="blog" style={{display: 'block'}}>

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <BlogCard/>

        </section>

      </article>
    </>
  )
}

export default Blog