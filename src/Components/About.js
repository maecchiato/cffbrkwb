import React from 'react';
import '../App.css';

const About = () => (
  <div id = "about-section" className = "pt-5">
    <span className = "about-section-line">
    </span>
    <div className = "row mx-0 mt-5">

      <div className = "col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">

      </div>
      <div className = "col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
        <div className = "text-right">
          <p className = "display-1 mb-5">
            Our Coffee Story
          </p>
          <p className = "blockquote text-right mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              rhoncus neque magna, at luctus risus luctus ac. Fusce nisi nisi,
              mollis in risus sed, ornare vestibulum ipsum. Nunc ultricies tortor
              elit, ut placerat est euismod sit amet. Nullam vel sodales mi, ac
              blandit augue. Nulla eget posuere ex, interdum vehicula lorem. Ut
              feugiat fringilla mi non pellentesque. Quisque vel tristique mi.
              Suspendisse dapibus diam metus, eu molestie nulla elementum ut.
              Curabitur sed augue egestas mauris gravida blandit. Suspendisse
              fringilla, tellus feugiat ornare aliquam, eros elit accumsan sem,
              quis iaculis dui tellus interdum sapien. Etiam mi lectus, scelerisque
              et vestibulum ac, aliquet eget metus. Quisque a elit est. Morbi
              consectetur et purus sed eleifend. Praesent maximus luctus tellus
              et hendrerit. Donec eu nisi purus. Aliquam efficitur eu lectus quis tempus.
          </p>

          <blockquote className="blockquote mt-5">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
)

export default About;
