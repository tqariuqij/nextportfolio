import { Link } from "react-scroll";

function Intro() {
  return (
    <div>
      <div className='container pl-10 '>
        <div className=''>
          <h1 className='font-heading text-[#64ffda] text-l'>Hi, my name is</h1>
        </div>
        <div className='my-10'>
          <h1 className='font-body text-gray-100 font-bold text-3xl sm:text-7xl lg:text-8xl tracking-wide'>
            John K Thiong'o
          </h1>
        </div>
        <div className='mb-10'>
          <h2 className='font-body text-gray-400 font-bold text-2xl sm:text-6xl lg:text-7xl'>
            I build things for the web
          </h2>
        </div>
        <div className='mb-10'>
          <p className='font-body text-gray-500 font-semibold'>
            I am a software developer based in Nairobi, Kenya who loves coding
            and building things for the web and anything in between.
          </p>
        </div>
        <div className='p-50 cursor-pointer  outline-green mb-20 p-5'>
          <Link
            activeClass=''
            to='contacts'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h1 className='font-heading font-200 cursor-pointer text-[#64ffda] text-center '>
              Contacts
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
