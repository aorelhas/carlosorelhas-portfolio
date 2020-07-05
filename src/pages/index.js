import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Features from "../components/features"
import Projects from "../components/projects"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="intro">
      <div class="intro-text">
        <h2>Full Stack Web Developer</h2>
        <p>
          If you're a business seeking a web presence or are looking to hire,
          contact me.
        </p>
        <h3 class="mb-2" id="things">
          I Love to Make things
          <span
            class="txt-rotate"
            id="rotate"
            data-period="2000"
            data-rotate='[ "simple.", "pretty.", "fun!" ]'
          ></span>
        </h3>
        <a href="#advanced-features" class="btn-get-started scrollto">
          View My Work
        </a>
      </div>

      <div class="product-screens">
        <div
          class="product-screen-1 wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="0.6s"
        >
          <img src="/img/project1.png" alt="" />
        </div>

        <div class="product-screen-3 wow fadeInUp" data-wow-duration="0.6s">
          <img src="/img/project2.png" alt="" />
        </div>
      </div>
    </section>
    <Features />
    <Projects />
  </Layout>
)

export default IndexPage
