import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' width='90%' height='400vh'/>
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' className="head1" />
                <p className="para1">{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className='primaryBtn'>View CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}