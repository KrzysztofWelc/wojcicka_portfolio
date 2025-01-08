'use client';

import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Message from '@/components/Message';
import MoodBoard from '@/components/MoodBoard';
import useLightbox, { LightboxItem } from '@/hooks/useLightbox';
import Image from 'next/image';

import Header from '@/public/guardgo/apple_watch_mockup.png'
import Icon1 from '@/public/guardgo/icon_1.svg'
import Icon2 from '@/public/guardgo/icon_2.svg'
import Icon3 from '@/public/guardgo/icon_3.svg'
import Icon4 from '@/public/guardgo/icon_4.svg'
import Table from '@/public/guardgo/tabela.png'
import Watch from '@/public/guardgo/icon_smartwatch.svg'
import Arrow from '@/public/guardgo/icon_arrow.svg'
import Wireframes from '@/public/guardgo/early_wireframes.jpg'
import UserFlow from '@/public/guardgo/user_flow.png'
import FinalDesign1 from '@/public/guardgo/final_design_1.png'
import FinalDesign2 from '@/public/guardgo/final_design_2.png'
import FinalDesign3 from '@/public/guardgo/final_design_3.png'
import FinalDesign4 from '@/public/guardgo/final_design_4.png'
import FinalDesign5 from '@/public/guardgo/final_design_5.png'
import ProjectsBtn from '@/components/ProjectsBtn';
import SectionAnchor from '@/components/SectionAnchor';
import ExploreBtn from '@/components/ExploreBtn';




export default function GuardGo() {
  const containerId = 'containerId';
  const lightBoxItemClass = 'lightboxItem';
  useLightbox({ slideSelector: `#${containerId} .${lightBoxItemClass}` });

  return (
    <div id={containerId}>
      <main>
        <header className='flex flex-col py-10 pt-24 md:flex-row md:pt-0'>
          <div className='flex h-screen flex-1 flex-col items-start justify-center'>
            <div className='mb-8 flex align-middle'>
              <h1 className='inline text-5xl font-semibold tracking-wider'>
                GuardGo
              </h1>
            </div>

            <p className='mb-8'>
              A wearable application to increase the users&apos; sense of
              security.
            </p>
            <ExploreBtn text='Explore case study' sectionId='ux-research' />
          </div>
          <div className='flex flex-1 flex-col'>
            <Image
              src={Header}
              placeholder='blur'
              width='0'
              height='0'
              sizes='100%'
              className='my-auto w-full'
              alt='Abstract 3D pastel-colored shapes flowing out from a computer screen with keyboard and stylus on the desk, representing digital creativity.'
            />
          </div>
        </header>
        <section className='mb-10 grid grid-cols-1 gap-4 py-5 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <h2 className='mb-4 text-4xl font-semibold'>Overview</h2>
            <p className='mb-4'>
              Security is one of the basic human needs, it is often classified
              also as an existential need. Providing it is essential for the
              human organism to develop properly. Guardgo is an app designed for
              smartwatches and aims to provide a quick and efficient way to call
              for help in emergency situations.
            </p>
            <p>
              {' '}
              GuardgGo was developed as part of my bachelor project and I was
              responsible for every stage of it.
            </p>
          </div>
          <div className='flex flex-row gap-8 lg:flex-col'>
            <div className='mb-10'>
              <h3 className='mb-4 font-semibold'>Role</h3>
              <p>UX Researcher, UX/UI Designer</p>
            </div>
            <div>
              <h3 className='mb-4 font-semibold'>Toolkit</h3>
              <p>Figma, FigJam, Pencil and paper</p>
            </div>
          </div>
        </section>
        <section>
          <SectionAnchor id='ux-research' />
          <h2 className='text-4xl'>UX Research</h2>
          <section className='mx-10'>
            <div className='my-24 flex justify-center'>
              <Message text='text me when you get home' />
            </div>
            <div>
              <h3 className='h3'>Initial Observations</h3>
              <p>
                During my studies and interactions with fellow students, I
                noticed a concern regarding personal safety, especially during
                late hours. Many students shared stories of feeling vulnerable
                while walking home or navigating poorly lit areas. These
                conversations highlighted a significant gap in available
                solutions for real-time, accessible safety measures.
              </p>
            </div>

            <div className='highlightedCard'>
              <h3 className='h3'>Research goals</h3>
              <ul className='list-disc pl-9'>
                <li>
                  Understand the safety concerns and behaviors of Krakow&apos;s
                  young adults population.
                </li>
                <li>
                  Identify factors that influence their sense of security.
                </li>
                <li>
                  Explore the usability and effectiveness of wearable technology
                  in enhancing personal safety.
                </li>
              </ul>
            </div>

            <div className='mb-20'>
              <h3 className='h3'>Methodologies</h3>
              <ul className='list-disc pl-9'>
                <li>
                  <mark className='bg-transparent font-semibold tracking-widest text-primary'>
                    Literature Review
                  </mark>{' '}
                  on psychological and biological reactions to stress and fear
                </li>
                <li>
                  <mark className='bg-transparent font-semibold tracking-widest text-primary'>
                    Qualitative interviews
                  </mark>{' '}
                  with students to gather insights into their safety concerns
                  and behaviors.
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-4xl'>UX Reasearch</h2>
              <div className='mx-2 flex-col py-10 md:mx-10'>
                <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                  <Image
                    src={Icon1}
                    width={70}
                    height={70}
                    alt='a man figure'
                  />
                  <p>
                    There are two responses to stress in the body: either by
                    elevating or lowering physiological indicators such as heart
                    rate or blood pressure.
                  </p>
                </div>
                <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                  <Image
                    src={Icon2}
                    width={70}
                    height={70}
                    alt='a clock'
                  />
                  <p>
                    Real-time updates give a sense of easier help in case of
                    need.
                  </p>
                </div>

                <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                  <Image
                    src={Icon3}
                    width={70}
                    height={70}
                    alt='a pocation pin'
                  />
                  <p>
                    Updates about location are important for young people and
                    help them feel secure.
                  </p>
                </div>
                <div className='flex flex-col items-center gap-7 md:flex-row'>
                  <Image src={Icon4} width={70} height={70} alt='a hand' />
                  <p>
                    A disadvantage of using a phone is that hands are not free
                    and might be needed for self-defense.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center p-16'>
              <Image
                src={Arrow}
                width={70}
                height={70}
                alt='a dow arrow'
              />
            </div>

            <div className='mb-20'>
              <h3 className='h3'>Mission Statement</h3>
              <p>
                To enhance personal safety through innovative technology, ensure
                that users can move around the city with confidence and peace of
                mind.
              </p>
            </div>

            <div className='mb-20'>
              <h3 className='h3'>Attributes</h3>
              <p>Reliable, Intuitive, Discreet, Simple, Glanceable</p>
            </div>
          </section>
        </section>
        <section>
          <h2 className='text-4xl'>UX Design</h2>
          <div className='mx-10 py-10'>
            <div className='mb-10'>
              <h3 className='h3'>Prioritization</h3>
              <p>
                The design focused on features that directly impact user safety
                and ease of use. Prioritizing quick access to emergency features
                and ensuring the app is intuitive for all users.
              </p>
            </div>

            <LightboxItem
              width={7296} height={8264}
              className={lightBoxItemClass}
              url='/guardgo/tabela.png'
            >
              <Image src={Table} width={7296} height={8264} alt='requirements table' />
            </LightboxItem>


            <div className='mb-10 flex flex-col items-center gap-10 md:flex-row'>
              <Image
                width={140}
                height={258}
                src={Watch}
                alt='a watch'
              />
              <div>
                <h3 className='h3'>Device</h3>
                <p>
                  The decision to develop an app for smartwatches stems from the
                  unique advantages and capabilities of smartwatches, which
                  align perfectly with the app&apos;s mission to enhance
                  personal safety and provide quick, reliable emergency
                  assistance by tracking body metrics and enabling hands-free
                  usage.
                </p>
              </div>
            </div>

            <div className='mb-10'>
              <h3 className='h3'>Idea - GuardGo</h3>
              <p>
                GuardGo identifies unsafe situations by using pedometer, motion
                and heart rate sensors and calls for help to the user&apos;s
                current location. The help is called automatically, but it t is
                also possible to send information about the danger to the
                user&apos;s relatives manually.
              </p>
            </div>

            <div className='mb-10'>
              <h3 className='h3'>User Flow</h3>
              <LightboxItem
                width={1050}
                height={1520}
                className={lightBoxItemClass}
                url='/guardgo/user_flow.png'
              >
                <Image
                  className='w-full'
                  width={1050}
                  height={1520}
                  src={UserFlow}
                  alt='a diagram describing user flow'
                />
              </LightboxItem>
            </div>

            <div className='mb-10'>
              <h3 className='h3'>Early wireframes</h3>
              <LightboxItem
                width={Wireframes.width}
                height={Wireframes.height}
                className={lightBoxItemClass}
                url='/guardgo/early_wireframes.jpg'
              >
                <Image
                  className='w-full'
                  width={Wireframes.width}
                  height={Wireframes.height}
                  src={Wireframes}
                  alt='a diagram describing user flow'
                />
              </LightboxItem>
            </div>
          </div>
        </section>
        <section>
          <h2 className='text-4xl'>UI Design</h2>
          <div className='mx-10 py-10'>
            <div className='mb-10'>
              <h3 className='h3'>Design Statements</h3>
              <p>
                The UI design focused on a clean, intuitive interface that
                emphasizes ease of use and quick access to emergency features.
                The color palette and typography were chosen to ensure clarity
                and readability under stress.
              </p>
            </div>
            <div className='mb-10'>
              <h3 className='h3'>Brand identity</h3>
              <MoodBoard />
            </div>

            <div className='mb-10'>
              <h3 className='h3'>Final design</h3>
              <Gallery>
                <Image
                  src={FinalDesign1}
                  width={FinalDesign1.width}
                  height={FinalDesign1.height}
                  alt='a smart watch with guard go welcome screen'
                />
                <Image
                  src={FinalDesign2}
                  width={FinalDesign2.width}
                  height={FinalDesign2.height}
                  alt='a smart watch with guard go welcome screen'
                />
                <Image
                  src={FinalDesign3}
                  width={FinalDesign3.width}
                  height={FinalDesign3.height}
                  alt='a smart watch with guard go welcome screen'
                />
                <Image
                  src={FinalDesign4}
                  width={FinalDesign4.width}
                  height={FinalDesign4.height}
                  alt='a smart watch with guard go welcome screen'
                />
                <Image
                  src={FinalDesign5}
                  width={FinalDesign5.width}
                  height={FinalDesign5.height}
                  alt='a smart watch with guard go welcome screen'
                />
              </Gallery>
            </div>
          </div>
        </section>
        <section>
          <div className='mb-10'>
            <h2 className='mb-8 text-4xl'>Usability Testing</h2>
            <div className='mx-10'>
              <p>
                To ensure the product performs its intended function
                effectively, it is essential to conduct usability testing and
                pursue continuous development. Since the application also takes
                into account body movements and heart rate as indicators of
                safety and potential threats, conducting tests in this case is
                neither straightforward nor simple. Simulating dangerous
                situations might be necessary, but the results could differ
                significantly from actual human reactions and reflexes. One
                potential solution I would suggest is conducting these tests
                using VR technology.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='px-10'>
            <h2 className='mb-4 text-4xl md:mb-8'>Key Takeaways</h2>
            <div className='highlightedCard'>
              <div className='mb-10'>
                <h3 className='h3'>Challenge</h3>
                <ul className='list-disc pl-9'>
                  <li>
                    Balancing the need for quick emergency response with
                    user-friendly design.
                  </li>
                  <li>Ensuring the app was easy to use under stress.</li>
                  <li>
                    Conducting interviews on sensitive and personal topics
                    required a high level of empathy and sensitivity.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='h3'>Lesson Learned</h3>
                <ul className='list-disc pl-9'>
                  <li>
                    Designing for high-stress situations requires a deep
                    understanding of user behavior under pressure.
                  </li>
                  <li>
                    In dangerous situations, a lack of interaction with the
                    device is the most alarming response.
                  </li>
                  <li>
                    Simplifying user interactions and providing immediate, clear
                    feedback are essential for effective emergency response
                    tools.
                  </li>
                  <li>
                    Creating an atmosphere of understanding and calm, along with
                    a well-structured research scenario that includes an
                    introduction/breaking-the-ice phase, helps respondents open
                    up and talk more easily about difficult topics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='mb-20 flex items-center justify-center'>
          <ProjectsBtn />
        </section>
      </main>
      <Footer />
    </div>
  );
}
