import React from 'react'
import blog1 from '../../src/assets/blog-1.jpg'
import blog2 from '../../src/assets/blog-2.jpg'
import blog3 from '../../src/assets/blog-3.jpg'
import blog4 from '../../src/assets/blog-4.jpg'
import blog5 from '../../src/assets/blog-5.jpg'
import blog6 from '../../src/assets/blog-6.jpg'
function BlogCard() {
  let blogData =[
    {
      image: blog1,
      date: 'Fab 23, 2022',
      title: 'Design conferences in 2022',
      para: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      image: blog2,
      date: 'Fab 23, 2022',
      title: 'Best fonts every designer',
      para: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
      image: blog3,
      date: 'Fab 23, 2022',
      title: 'Design digest #80',
      para: ' Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
      image: blog4,
      date: 'Fab 23, 2022',
      title: 'UI interection of the week.',
      para: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
      image: blog5,
      date: 'Fab 23, 2022',
      title: 'The forgotten art of spacing',
      para: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      image: blog6,
      date: 'Fab 23, 2022',
      title: 'Design digest #79',
      para: 'loremm et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
  ]
  return (
    <>
    <ul className="blog-posts-list">
      {
        blogData.map((val, index)=>{
          return(
            <li className="blog-post-item" key={index}>
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={val.image} alt="Design conferences in 2022" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">{val.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{val.title}</h3>

                  <p className="blog-text">{val.para}</p>

                </div>

              </a>
            </li>
          )
        })
      }
            

           

          </ul>
    </>
  )
}

export default BlogCard
