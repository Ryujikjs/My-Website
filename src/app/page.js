import Image from 'next/image'
import Head from 'next/head'
import ryuji from 'public/ryuji.jpg'
import nuslogo from 'public/nuslogo1.png'
import jclogo from 'public/logo.png'
import feeveologo from 'public/feeveo_logo.jpg'
import halogo from 'public/highachievers_logo.jpg'
import autocare from 'public/autocare.png'
import bigpp from 'public/bigpp.png'
import oio from 'public/ioio.233.jpg'
import oio1 from 'public/oio2.png'
import oio3 from 'public/oio3.png'
import fpga1 from 'public/fpga1.jpg'
import fpga2 from 'public/fpga2.jpg'
import fpga3 from 'public/fpga3.jpg'
import fpga4 from 'public/fpga4.jpg'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryuji's Site</title>
        <meta name="Ryuji's portfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex pt-10 font-sans'>
        
        <main className='bg-white px-20'>
          <section className="min-h-screen pb-52">
            <div>
              <Image src={ryuji} alt="Ryuji Kow" width={300} height={300} className='rounded-3xl mb-10 border-4 border-black' />
              <h1 className='text-8xl font-bold pb-3'>Ryuji</h1>
              <h1 className='text-8xl font-bold pb-3'>Kow Jie Si</h1>
              <h2>Computer Engineering Student</h2>
            </div>
          </section>

          <section id="about" className='break-after-page pb-20'>
            <div>
            <h1 className='text-6xl font-bold pb-20'>About Me</h1>
            <p>
              As an aspiring Computer Engineering (CE) student, I am enthusiastic about delving 
              into the dynamic and ever-evolving world of technology. With a passion for problem-solving 
              and a strong foundation in mathematics and science, I am eager to apply my skills and 
              knowledge to contribute to the development of innovative solutions.
            </p>
            <br></br>
            <p>
              With a keen interest in both hardware and software aspects, I aim to gain a comprehensive 
              understanding of computer systems, networks, and embedded systems. I aspire to acquire expertise in 
              programming languages, digital logic design, data structures, and algorithms, as well as exploring 
              emerging technologies such as artificial intelligence, Internet of Things (IoT).
            </p>
            </div>
          </section>

          <section id="education" className='break-after-page pb-20'>
            <h1 className='text-6xl font-bold mt-11'>Education</h1>
            <div className='flex items-start pt-20 pb-10'>
              <Image src={nuslogo} alt="NUS Logo" width={90} height={90} className=' mb-10 pr-5' />
              <div className=''>
                <h2 className='text-2xl font-bold'>National University of Singapore</h2>
                <p>Bachelor of Engineering - Computer Engineering(Hons.) With Second Major in Innovation and Design</p>
                <p>2021 - 2025</p>
              </div>
            </div>

            <div className='flex items-start'>
              <Image src={jclogo} alt="JC Logo" width={90} height={90} className=' mb-10 pr-5' />
              <div className=''>
                <h2 className='text-2xl font-bold'>St Andrew's Junior College</h2>
                <p>GCE A Levels,Science</p>
                <p>2017 - 2028</p>
              </div>
            </div>
          </section>

          <section id="work-experience" className='break-after-page pb-20'>
            <h1 className='text-6xl font-bold mt-11'>Work Experience</h1>
            <div className='pb-10'>
              <div className='flex items-start pt-20'>
                <Image src={feeveologo} alt="Feevio Logo" className=' mb-10 rounded-xl mr-5 w-20' />
                <div className=''>
                  <h2 className='text-2xl font-bold'>Feevio</h2>
                  <p>Engineer Intern</p>
                  <p>Febuary 2023 - April 2023</p>
                </div>
              </div>
              <p>A Singapore technology & automation start up aiming to solve neglected problems with 
                efficient robots and automation products.</p>
                <br></br>
                <p>Contributed to the development of an Automated Guided Vehicle (AGV) prototype, focusing 
                  on the enhancement of its functionality and performance. Collaborated with the team to 
                  develop and fine-tune the direction control system, utilizing modbus communication to interface 
                  with stepper motors for precise wheel rotation based on user input.</p>
            </div>

            <div className='pb-10'>
              <div className='flex items-start pt-20'>
                <Image src={nuslogo} alt="nus logo" className=' mb-10 rounded-xl mr-5 w-20' />
                <div className=''>
                  <h2 className='text-2xl font-bold'>Teaching Asisstant</h2>
                  <p>National University of Singapore, Module Code - CG2111A Engineering Principles and Practice II</p>
                  <p>January 2023 - April 2023</p>
                </div>
              </div>
                <p>This module will be for the students who have completed EPP I(pre-requisite module) and the project scope 
                  extends to handle challenges in large-scale systems. Students will first learn the fundamental principles on 
                  certain advanced concepts and then design and programme a real-world system. The module involves designing a 
                  complex computer engineering system that facilitates information processing, real-world interfacing, and 
                  understanding the effects of certain useful metrics such as, scaling, safety, security, sustainability, societal 
                  impact, fault-tolerant design, etc.</p>
            </div>
            <div className='pb-10'>
              <div className='flex items-start pt-20'>
                <Image src={halogo} alt="High Achievers Logo" className=' mb-10 rounded-xl mr-5 w-20' />
                <div className=''>
                  <h2 className='text-2xl font-bold'>High Achievers Education Centre</h2>
                  <p>Mathematics Tutor</p>
                  <p>Febuary 2021 - April 2021</p>
                </div>
              </div>
              <p>A tuition centre that provides quality education to students from primary to junior college levels.</p>
            </div>
          </section>

          <section id="projects" className='break-after-page pb-20'>
            <h1 className='text-6xl font-bold mt-11'>Projects</h1>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h2 className='text-2xl font-bold'>Autocare</h2>
              <p className='italic'>NUS EG3301R Ideas to Proof-of-Concept</p>
              <p className='italic'>January 2023 - Present</p>
              <p> Autonomous Solution for Transport of Blood Components Within a Hospital Environment</p>
            
              <Image src={autocare} alt="Autocare" width={500} height={300} className='rounded-xl justify-center mx-auto my-8' />
              <p>Our project partners with Singapore General Hospital (SGH) to address the shortage of porters, leading to uncertain delivery times for blood components. 
                We are developing an autonomous solution to streamline blood transportation, reducing wait times and ensuring efficient and secure delivery. By integrating 
                advanced technologies, our system navigates the hospital environment, adheres to safety protocols, and frees up porters for essential patient care. Our goal 
                is to improve patient outcomes and enhance the quality of care at SGH.</p>
              <ul className=" mt-6 pb-10 list-inside ">
                <h3 className="font-bold">Key Highlights:</h3>
                <li className="list-disc">Autonomous solution to transport blood components, reducing reliance on human labor.</li>
                <li className="list-disc">Multi-storage cooler box for efficient and secure transportation of blood products.</li>
                <li className="list-disc">Advanced mapping and localization features for smooth navigation in the hospital environment.</li>
                <li className="list-disc">Compliance with hospital policies, ensuring data security and blood product confirmation.</li>
                <li className="list-disc">Improving patient care by allowing hospital porters to focus on critical tasks.</li>
              </ul>
              <p>Our project is driven by the vision of transforming blood transportation, enhancing patient safety, and contributing to the advancement of healthcare services at SGH.
                This is an ongoing project and we are currently in the prototyping phase.</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h2 className='text-2xl font-bold'>Big PC-Partpicker</h2>
              <p>Cli Pc Partpicker Application</p>
              <p>January 2023 - April 2023 </p>
              <p> A Command Line Interface (CLI) application that streamlines the process of managing computer builds while
              verifying the compatibility of selected components.</p>
              <br></br>
              <Image src={bigpp} alt="Big PC-Partpicker" width={500} height={300} className='rounded-xl justify-center mx-auto' />
            </div>


            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h2 className='text-2xl font-bold'>OIO</h2>
              <p className='italic'>NUS EG2606B Independent Project</p>
              <p className='italic'>August 2022 - November 2022</p>
              <p className='italic'>A new way to experience and play music</p>

              <Image src={oio} alt="OIO" width={500} height={300} className='rounded-xl justify-center mx-auto my-8' />
              <p>The aim of studio, "Shape of Sound", was to explore innovative methods of playing instruments. OIO is a unique musical instrument that utilizes physical discs containing music layers, allowing for the mixing of various tracks. By introducing this novel approach, OIO revolutionizes the way we experience and engage with music, offering a fresh and immersive musical experience.</p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Key Highlights:</h3>
                <ul className="list-inside mt-2">
                  <li className="list-disc">Interactive sound-playing prototype </li>
                  <li className="list-disc">Integrated PN532 RFID reader, NTAG 213 tags, mouse micro switches, Raspberry Pi 3B+, and breadboard.</li>
                  <li className="list-disc">Local storage of sound files (WAV, MP3, OGG) on Raspberry Pi using pygame library.</li>
                  <li className="list-disc">Optimized button design for rapid response and reliable NFC tag readings.</li>
                </ul>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h2 className='text-2xl font-bold'>FPGA Project</h2>
              <p className='italic'>NUS EE2026 Digital Design</p>
              <p className='italic'>August 2022 - November 2022</p>
              <p className='italic'>Creative application of concepts covered in module: Typeracer game</p>
              <Image src={fpga4} alt="FPGA Project" width={500} height={300} className='rounded-xl justify-center mx-auto my-8' />
            </div>
          </section> 

          <section id="skills" className='break-after-page pb-20'>
            <h1 className='text-6xl font-bold mt-11 pb-20'>Skills</h1>
            <div className='pb-10'>
              <h2 className='text-2xl font-bold'>Programming Languages</h2>
              <p>C++, C, Python, Verilog, R, Java, Javascript, HTML, CSS</p>
            </div>
            <div className='pb-10'>
              <h2 className='text-2xl font-bold'>Hardware</h2>
              <p>Arduino, Raspberry Pi, FPGA, Esp32, RFID, Stepper Motors(Modbus) </p>
            </div>
            <div className='pb-10'>
              <h2 className='text-2xl font-bold'>Others</h2>
              <p>Git, Linux, Microsoft Office, Fusion360, Autodesk Eagle</p>
              <p>Languages: English, Chinese, Japanese</p>
            </div>

          </section>

         

        </main>


        <nav className="pt-20 pr-16 h-screen sticky top-0">
          <ul className='items-center'>
            <li className='pb-10 font-bold text-2xl hover:text-blue-500'><a href="#about">About Me</a></li>
            <li className='pb-10 font-bold text-2xl hover:text-blue-500'><a href="#education">Education</a></li>
            <li className='pb-10 font-bold text-2xl hover:text-blue-500'><a href="#work-experience">Work</a></li>
            <li className='pb-10 font-bold text-2xl hover:text-blue-500'><a href="#projects">Projects</a></li>
            <li className='pb-24 font-bold text-2xl hover:text-blue-500'><a href="#skills">Skills</a></li>
          </ul>
          <p>ryujikjs@gmail.com</p>
          <p className='pb-3'>+65 9727 8031</p>

          <div className='items-center justify-center'>
          <a href="https://www.linkedin.com/in/ryuji-kow-224894227/" role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="#0077b5"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <br></br>
          <a href="https://github.com/Ryujikjs" role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="#333"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          </div>
        </nav>

      </div>

    </div>
  )
}

