import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About us" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum enim nisi ea facere ducimus, hic asperiores iste nesciunt dignissimos dolores.
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere hic tempore quidem deleniti est autem distinctio vero voluptates, cum modi. Doloribus ipsum voluptatesstinctio vero voluptates, cum modi. Doloribus ipsum voluptates asper asperiores.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia officiis neque minus expedita nostrum perspiciatis non porro rem veritatis unde itaque deleniti,expedita nostrum perspiciatis non porro rem veritatis unde itaque deleniti, maiores deserunt?</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About