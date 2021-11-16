import { Image } from "next/image";

function About() {
  return (
    <div>
      <div>
        {/* about header */}
        <div>
          <h1>About Me</h1>
        </div>
        {/* about main section */}
        <div>
          <div>
            <p>
              Hello, John here. I am a software developer based in Nairobi,
              Kenya.
            </p>
            <p>
              I enjoy coding and bringing to life ideas and making them into
              reality, shaping the web with new and exciting products that are
              built to enhance ones experiences while using the internet.
            </p>
            <p>
              Currently I am working on some very exciting freelance projects
            </p>
            <p>
              Here are some of the few technologies I have been working with
            </p>
            <div>
              <h3>html&css</h3>
              <h3>JavaScript</h3>
              <h3>React.js</h3>
              <h3>Next.js</h3>
              <h3>Node.js</h3>
              <h3>Firebase Backend</h3>
            </div>
          </div>
          <div className=''>
            {/* <Image
              alt='...'
              src='https://res.cloudinary.com/johnte/image/upload/v1615448063/profilep_zkj1dr.jpg'
              width={1200}
              height={400}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
