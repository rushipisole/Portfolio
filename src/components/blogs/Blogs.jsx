import React from 'react'
import './Blogs.css'

const Blogs = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section__title">Latest</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"> <span className="blog__category">Reviews</span> </a>
            <a href="https://learningkatta.netlify.app/" target='_blank'><img src="/image/learningKatta.png" alt="" className='blog__img' /></a>
          </div>
          <div className="blog__details">
            <a href="https://learningkatta.netlify.app/" className="blog__title">Learning Katta</a>
            <div className="blog__meta">
              <span>Feb 3</span>
              <span className="blog__dot">.</span>
              <span>Rushi</span>
            </div>
          </div>
        </div>

        {/* <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"> <span className="blog__category">Reviews</span> </a>
            <a href=""><img src="./src/assets/blog-1.svg" alt="" className='blog__img' /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Best app development</h3>
            <div className="blog__meta">
              <span>jun 10</span>
              <span className="blog__dot">.</span>
              <span>Rushi</span>
            </div>
          </div>
        </div> */}

        {/* <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"> <span className="blog__category">Reviews</span> </a>
            <a href=""><img src="./src/assets/blog-1.svg" alt="" className='blog__img' /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Best app development</h3>
            <div className="blog__meta">
              <span>jun 10</span>
              <span className="blog__dot">.</span>
              <span>Rushi</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Blogs
