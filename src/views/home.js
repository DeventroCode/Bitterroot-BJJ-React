import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bitterroot BJJ</title>
        <meta property="og:title" content="Bitterroot BJJ" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-navbar">
          <div className="home-banner">
            <a href="#landing" className="home-link">
              <img
                alt="image"
                src="/playground_assets/logo_large-200w.png"
                className="home-logo"
              />
            </a>
          </div>
          <div className="home-banner1">
            <a href="#landing">
              <img
                alt="image"
                src="/playground_assets/logo_large-200w.png"
                className="home-logo1"
              />
            </a>
          </div>
          <div className="home-links-container">
            <a href="#experience" className="home-link02 navbar-Link">
              Experience
            </a>
            <a href="#about" className="home-link03 navbar-Link">
              About
            </a>
            <a href="#location" className="home-link04 navbar-Link">
              Location
            </a>
            <a href="#join" className="home-link05">
              <span className="navbar-Link">JOIN</span>
              <br></br>
            </a>
          </div>
          <a href="#join" className="home-link06">
            <span className="navbar-Link">JOIN</span>
            <br></br>
          </a>
        </div>
      </header>
      <div id="landing" className="home-landing">
        <div className="home-main">
          <div className="home-hero">
            <h1 className="home-heading title">
              <span className="title home-text04">
                BITTERROOT BRAZILIAN JIU-JITSU
              </span>
              <br></br>
            </h1>
            <h1 className="home-heading1">BITTERROOT BRAZILIAN JIU-JITSU</h1>
            <a
              href="https://www.biblegateway.com/passage/?search=philipians4:13&amp;version=NIV"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07"
            >
              Philipians 4:13
            </a>
            <a
              href="https://www.biblegateway.com/passage/?search=philipians4:13&amp;version=NIV"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              Philipians 4:13
            </a>
          </div>
          <div className="home-image">
            <span className="home-text06 card-Heading">OUR MISSION</span>
            <span className="home-text07">OUR MISSION</span>
            <span className="home-text08 section-Text">
              <span className="section-Text">
                We are committed to offering accessible and personalized
                Brazilian Jiu-Jitsu lessons for adults and children alike. We
                are a family-oriented business that values God and community
                above all.
              </span>
              <br className="section-Text"></br>
            </span>
            <span className="home-text11">
              <span className="section-Text">
                We are committed to offering accessible and personalized
                Brazilian Jiu-Jitsu lessons for adults and children alike. We
                are a family-oriented business that values God and community
                above all.
              </span>
              <br className="section-Text"></br>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/photo_underline-031.svg"
            className="home-image1"
          />
        </div>
      </div>
      <div id="instructor" className="home-instructor">
        <img
          alt="image"
          src="/playground_assets/anthonyfinal-400w.png"
          className="home-image2"
        />
        <div className="home-text-container">
          <span className="section-Heading">MEET YOUR INSTRUCTOR</span>
          <span className="home-heading3">Coach Anthony Colagrosso</span>
          <span className="home-content">
            <span className="section-Text">
              Coach Anthony is a veteran of the United States Air Force and a
              retired law enforcement officer. During his career as a police
              officer, he began training and fell in love with Brazilian Jiu
              Jitsu, and after 15 years, he earned his black belt under
              Professors Scott Layton and Ted Malone of Mountain State Jiu-Jitsu
              in his hometown of Charleston, WV. Our academy lineage comes
              directly from Jiu-Jitsu legends and multiple-time world champions
              Saulo Riberio, Xande Riberio, and Chris Blanke.
            </span>
            <br className="section-Text"></br>
            <br className="section-Text"></br>
            <span className="section-Text">
              Anthony retired from law enforcement in 2018 to join his wife,
              Aime
            </span>
            <span className="section-Text">é in traveling </span>
            <span className="section-Text">
              the country as she worked as a neo-natal ICU nurse. During their
              travels, he had the privilege of training with some of the best
              BJJ practitioners in the world. After arriving in Montana’s
              Bitterroot Valley, they found the charming town of Stevensville
              and decided to call it home!
            </span>
            <br className="section-Text"></br>
            <br className="section-Text"></br>
            <span className="section-Text">
              Coach Anthony and Aimeé have a strong sense of community, a belief
              in the investment of local businesses, and a love for local
              people. Their desire is to serve the local community by
              incorporating their passion for BJJ with their ever-growing love
              of the bitterroot.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="section-Text"></br>
            <br className="section-Text"></br>
          </span>
        </div>
      </div>
      <div id="experience" className="home-experience">
        <div className="home-max-content-width-container">
          <div className="home-heading-container">
            <h1 className="home-text25 section-Heading">THE EXPERIENCE</h1>
          </div>
          <div className="home-row">
            <img
              alt="Anthony graduating to Black Belt"
              src="/playground_assets/rsz_blackbelt-700w.jpg"
              className="home-image3"
            />
            <img
              alt="Anthony with Saulo and Xandre Ribeiro"
              src="/playground_assets/saulo%26xanderibeiro-700w.jpg"
              className="home-image4"
            />
            <img
              alt="Anthony with Wade Barden"
              src="/playground_assets/wadebarden%20-700w.jpg"
              className="home-image5"
            />
          </div>
          <div className="home-row1">
            <img
              alt="Anthony posing with Carlos Farias"
              src="/playground_assets/rsz_carlos_farias-700w.jpg"
              className="home-image6"
            />
            <img
              alt=" Chris Blankie, Saulo Ribeiro, Scott Layton, and Xande Ribeiro"
              src="/playground_assets/rsz_chrisblankiesauloribeiroscottlaytonxanderibeiro-800w.jpg"
              className="home-image7"
            />
            <img
              alt="Anthony and Relson Gracie showing the shaka"
              src="/playground_assets/relsongracie_downscale-800w.jpg"
              className="home-image8"
            />
          </div>
        </div>
      </div>
      <div id="about" className="home-information">
        <div className="home-content1">
          <h1 className="home-text26">INFORMATION</h1>
          <span className="home-text27">
            <span className="section-Text">•</span>
            <span className="section-Text">
              {' '}
              We offer classes for beginners as well as seasoned BJJ
              practitioners, bully-proofing, and self-defense. Private
              instruction is also available
            </span>
            <br className="section-Text"></br>
            <br className="section-Text"></br>
            <span className="section-Text">•</span>
            <span className="section-Text"> </span>
            <span className="section-Text">
              We are located at 3901 US-Highway 93N in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="section-Text">
              Stevensville (see the map below)
            </span>
            <br className="section-Text"></br>
            <br className="section-Text"></br>
            <span className="section-Text">•</span>
            <span className="section-Text">
              {' '}
              We also offer sport Jiu-Jitsu training for beginners and seasoned
              BJJ practitioners alike!
            </span>
            <br className="section-Text"></br>
            <br className="section-Text"></br>
            <span className="section-Text">•</span>
            <span className="section-Text">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="section-Text">A</span>
            <span className="section-Text">
              nyone who wants to improve their health through exercise and gain
              valuable skills that translate to everyday life is welcome. No
              experience necessary.
            </span>
            <br className="section-Text"></br>
            <br className="section-Text"></br>
            <span className="section-Text home-text48">•</span>
            <span className="section-Text home-text49">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="section-Text home-text50">
              The first class is always free!
            </span>
            <br className="section-Text"></br>
          </span>
        </div>
      </div>
      <div id="location" className="home-location">
        <div className="home-map">
          <h2 className="home-heading4 section-Heading">FIND US</h2>
          <div className="home-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<div style="width: 100%"><iframe width="100%" height="700" frameborder="0" scrolling="no" marginheight="0"\r\n        marginwidth="0"\r\n        src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=Bitterroot%20BJJ,%203901%20US%20Hwy%2093%20N,%20Stevensville,%20MT%2059870&t=&z=13&ie=UTF8&iwloc=&output=embed"><a\r\n            href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>',
              }}
            />
          </div>
        </div>
      </div>
      <div id="join" className="home-join">
        <div className="home-content2">
          <div className="home-heading-container1">
            <h1 className="home-text52 section-Heading">JOIN US!</h1>
            <span className="home-text53 section-Text">
              <span>
                Below are a few ways to contact our head coach, Anthony. Spots
                for training are limited, so it&apos;s best for all scheduling
                to be done individually to best meet the needs of each gym
                member!
              </span>
              <br></br>
            </span>
          </div>
          <a
            href="mailto:bitterrootbjj@yahoo.com?subject=Class Sign-Up"
            className="home-link09 navbar-Link"
          >
            <span>EMAIL: b</span>
            <span>itterrootbjj@yahoo.com</span>
          </a>
          <a href="tel:3045500783" className="home-link10 navbar-Link">
            <span className="navbar-Link">PHONE: (</span>
            <span>304) 550-0783</span>
          </a>
        </div>
      </div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://www.instagram.com/bitterrootbjj/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sixbladesbjjaustin/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
            >
              <span>SIX BLADES</span>
              <br></br>
            </a>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon4">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="home-link14 anchor">
              Copyright, Deventro Ltd. 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
