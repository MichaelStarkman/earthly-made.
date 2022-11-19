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
    url: 'https://i.imgur.com/xYMyI8L.png',
    blurb: 'I am a full-stack engineer, with a passion for creating efficient, scalable, highly usable web interfaces.',
    github: 'https://github.com/MichaelStarkman',
    linkedin: 'https://www.linkedin.com/in/michaelstarkman/',
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
    url: 'https://i.imgur.com/eOauaEa.png',
    blurb: 'I’m a New York based Full Stack Developer looking for great problems to solve. With 10 years of IT experience, I can plug right into any team environment and hit the ground running.',
    github: 'https://github.com/LaffSteven',
    linkedin: 'https://www.linkedin.com/in/steven-laff',
    portfolio: 'https://github.com/LaffSteven'
  }

]

const designers = [
  {
    name: 'Dan Elliget',
    url: 'https://i.imgur.com/zHDAl3t.png',
    blurb: ['UX Designer thats all about sports, superheroes, and food! (Not necessarily in that order). Based in Seattle, I love my rain, coffee, and seafood ', <span>	
    &#128521;</span>,
    ' Always looking to connect and collaborate to make awesome designs and experiences. Message me to collab or just to chat too!'],
    github: null,
    linkedin: 'www.linkedin.com/in/dan-elliget',
    portfolio: 'https://danelliget.squarespace.com/'
  },
  {
    name: 'Maurcell Melton',
    url: 'https://i.imgur.com/cE1r5qx.jpg',
    blurb: ['Product Designer with a passion for helping others achieve their goals one component at a time. I enjoy adventures to the beach, conversations about tech/gaming, and I never shy away from a good challenge. My only happy place is Disneyland, but you can find me smiling at my desk building a nice Minecraft home. I believe that minimal design is not about removing everything, rather it’s about removing the unnecessary in order to focus on what really matters. ', <span>&#10084;</span>],
    github: null,
    linkedin: 'https://www.linkedin.com/in/cellmelton/',
    portfolio: 'cellmelton.com'
  },
  {
    name: 'Sally Yang',
    url: 'https://i.imgur.com/u8rPRoE.png',
    blurb: "UX Designer with a background in psychology and clinical research, I enjoy immersing myself in all the moving parts of an experience — from the tiny details that play at our subconscious biases to the larger flows of systems and the way they harmonize with one another. in my down time, i am usually at a coffee shop on figma practicing and sharpening my design skills! feel free to reach out for coffee recommendations, collaborate on design projects, and/or ask me on any projects I've worked on!",
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
          <div className='linkHold'>
            <a href={dev.linkedin}>Linkedin</a>
            <a href={dev.github}>Github</a>
            <a href={dev.portfolio}>Portfolio</a>
          </div>
      </div>
      <div className='aboutPageInner container'>
        <div className='row'>
          <div className='col-xl'>
            <div className='imageHold'>
              <img className='left' src={dev.url} alt={dev.name} />
            </div>
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
        <div className='linkHold'>
          <a href={dev.linkedin}>Linkedin</a>
          <a href={dev.portfolio}>Portfolio</a>
        </div>
      </div>
      <div className='aboutPageInner container'>
        <div className='row'>
          <div className='col-xl holder'>
            <div className='imageHold'>
              <img className='left' src={dev.url} alt={dev.name} />
            </div>
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