import Image from "next/image";

function About() {
  return (
    <div className='container flex flex-col my-10 px-10'>
      {/* about header */}
      <div className='my-5'>
        <h1 className='text-gray-100 font-body font-bold text-2xl'>
          <span className='text-[#64ffda]'>1.</span>About Me
        </h1>
      </div>
      {/* about main section */}
      <div className='flex flex-row'>
        <div className='text-gray-400 text-lg'>
          <p className='mb-3'>
            Hello, John here. I am a software developer based in Nairobi, Kenya.
          </p>
          <p className='mb-3'>
            I enjoy coding and bringing to life ideas and making them into
            reality, shaping the web with new and exciting products that are
            built to enhance ones experiences while using the internet.
          </p>
          <p className='mb-3'>
            Currently I am working on some very exciting freelance projects
          </p>
          <p className='mb-3'>
            Here are some of the few technologies I have been working with
          </p>
          <div>
            <ul className='flex flex-row flex-wrap text-[#64ffda] text-2xl font-heading'>
              <li className='mr-3 font-heading'>
                <h3>html&css</h3>
              </li>
              <li className='mr-3'>
                <h3>JavaScript</h3>
              </li>
              <li className='mr-3'>
                <h3>React.js</h3>
              </li>
              <li className='mr-3'>
                <h3>Node.js</h3>
              </li>
              <li className='mr-3'>
                <h3>Next.js</h3>
              </li>
              <li className='mr-3'>
                <h3>Postgresql</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className='max-h-96'>
          {/* <Image
            className='contain'
            alt='john thiongo'
            src='https://res.cloudinary.com/johnte/image/upload/v1615448063/profilep_zkj1dr.jpg'
            width={1080}
            height={1350}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
