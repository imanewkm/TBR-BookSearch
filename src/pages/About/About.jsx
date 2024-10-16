import React from 'react';
import "./About.css";
import aboutImg from "../../images/books.jpeg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About TBR: The Book Search Engine</h2>
            <p className='fs-17'>Welcome to TBR, your ultimate companion for discovering and exploring the world of literature. Whether you’re a seasoned bibliophile or a casual reader, TBR is designed to make your book search experience seamless and enjoyable. With our user-friendly interface and powerful search capabilities, you can easily find the perfect book that suits your interests and reading preferences.</p>
            <p className='fs-17'>Join our growing community of book lovers and take the first step towards your next great read with TBR.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About