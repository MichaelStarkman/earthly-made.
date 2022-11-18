import React from 'react'
import '../App.css'

const programmers = [
  {
      name: 'Brandon Wu',
      url: 'https://media-exp1.licdn.com/dms/image/D4E03AQG1Aa9OqPkwmQ/profile-displayphoto-shrink_800_800/0/1667144996437?e=1672876800&v=beta&t=-ez8ZLIGE9DwLa7T0EKbiOCCxKfCenMQSa3q78k20v0',
      blurb: "Full-Stack Developer that enjoys a freshly-brewed cup of coffee in the morning. I'm always looking to connect with others and love making humorous/unique programs with great teams. Message me at my links below and other places on the internet :)",
      github: 'https://github.com/brandon-w1205',
      linkedin: 'https://www.linkedin.com/in/brandonjwu/',
      portfolio: 'https://brandonw.vercel.app'

  }, 
  {
    name: 'Michael Starkman',
    url: 'photo',
    blurb: '',
    github: 'https://github.com/MichaelStarkman',
    linkedin: '',
    portfolio: 'https://www.michaelstarkman.dev/'
  },
  {
      name: 'Sebastian Manion',
      url: 'https://media-exp1.licdn.com/dms/image/C5603AQFKVY3ljseKuQ/profile-displayphoto-shrink_800_800/0/1660083494530?e=1671667200&v=beta&t=v-Znxg-d_QXgopWPvjNme3ivOvzE_3ezREUD5R0F0j0',
      blurb: 'I am a web developer from Seattle Washington, I love rainy days, and puzzles. if you want to get to get into contact with me feel free to connect with me on Linkedin.',
      github: 'https://github.com/Manion-sebastian',
      linkedin: 'https://www.linkedin.com/in/sebastianmanion/',
      portfolio: 'https://sebastian-manion.vercel.app/'

  }, 
  {
    name: 'Steven Laff',
    url: 'photo',
    blurb: '',
    github: '',
    linkedin: 'https://www.linkedin.com/in/steven-laff',
    portfolio: 'https://github.com/LaffSteven'
  }

]

const designers = [
  {
    name: 'Dan Elliget',
    url: 'photo',
    blurb: 'about',
    github: null,
    linkedin: 'www.linkedin.com/in/dan-elliget',
    portfolio: 'https://danelliget.squarespace.com/'
  },
  {
    name: 'Maurcell Melton',
    url: 'photo',
    blurb: 'about',
    github: null,
    linkedin: 'https://www.linkedin.com/in/cellmelton/',
    portfolio: 'cellmelton.com'
  },
  {
    name: 'Sally Yang',
    url: 'photo',
    blurb: 'about',
    github: null,
    linkedin: 'https://www.linkedin.com/in/sallyjyang/',
    portfolio: 'https://www.sallyjyang.design/'
  },
  
]

const mapDevs = programmers.map((dev) => {
  return (
    <div key={`${dev.name}`} className='aboutPageDev'>
      <div>
        <h1>{dev.name} - Engineer</h1>
          <div>
            <a href={dev.linkedin}>Linkedin</a>
            <a href={dev.github}>Github</a>
            <a href={dev.portfolio}>Portfolio</a>
          </div>
      </div>
      <div className='aboutPageInner container'>
        <div className='row'>
          <div className='col-xl'>
            <img src={dev.url} alt={dev.name} />
          </div>
          <div className='col-xl'>
            <p>{dev.blurb}</p>
          </div>
        </div>
      </div>
    </div>
  )
})
const mapDesign = designers.map((dev) => {
  return (
    <div key={`${dev.name}`} className='aboutPageDev'>
      <div>
        <h1>{dev.name} - Designer</h1>
        <div>
          <a href={dev.linkedin}>Linkedin</a>
          <a href={dev.portfolio}>Portfolio</a>
        </div>
      </div>
      <div className='aboutPageInner container'>
        <div className='row'>
          <div className='col-xl'>
            <img src={dev.url} alt={dev.name} />
          </div>
          <div className='col-xl'>
            <p>{dev.blurb}</p>
          </div>
        </div>
      </div>
    </div>
  )
})

const About = () => {
  return (
    <div className='aboutPage container'>
      <div className='row'>
        <div className='col-xxl'>
          {mapDesign}
        </div>
        <div className='col-xxl'>
          {mapDevs}
        </div>
        
      </div>
    </div>
  )
}



export default About