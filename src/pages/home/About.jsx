import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero ">
            <div className=" flex lg:flex-row-reverse">
                <div className="w-1/2 text-center lg:text-left">
          <div className='w-3/4'>
          <p className='text-orange-300 font-bold'>About</p>
                    <h1 className="text-3xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                    </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className='btn btn-primary'>Get More Info</button>
          </div>
                </div>
                <div className="w-1/2 relative shadow-2xl">
                   <img className='w-[460px] h-[470px]' src={person} alt="" />
                   <img className='w-[330px] absolute border-8 border-orange-400 right-5 rounded-lg top-1/2' src={parts} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;