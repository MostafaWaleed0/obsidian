import { useEffect, useRef, useState } from 'react';
import { Container } from 'components/common';
import {
  Cup,
  Hero,
  Backend,
  GraphicDesign,
  UIUXDesign,
  Frontend
} from 'components/icons';
import { Button } from 'components/ui';
import CountUp from 'react-countup';
import CourseCard from 'components/CourseCard';
import EducationItem from 'components/EducationItem';
import Headline from 'components/Headline';
import FormView from 'components/form';
import CustomerCard from 'components/CustomerCard';

export default function Home() {
  const ref = useRef<any>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.scrollY <= ref.current.offsetTop) {
      window.onscroll = () => {
        setVisible(true);
      };
    }
  }, [ref]);

  return (
    <Container title="obsidian">
      <section className="py-20 md:py-32" id="home">
        <div className="container flex justify-between items-center gap-5 flex-col-reverse lg:flex-row">
          <div className="space-y-8 text-2xl">
            <p className="uppercase text-gray-400 font-medium">
              for better future
            </p>
            <h1>best learning opportunities</h1>
            <p className="leading-10 text-2xl">
              Education is a process of learning, a means to an end. Education
              is not a product of schooling. It is the process of developing
              one's humanity, of refining one's sense of self. It is the life of
              the mind.
            </p>
            <Button type="link" href="/">
              join us
            </Button>
          </div>
          <div>
            <Hero className="aspect-square w-[60vmin]" />
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-gray-100 dark:bg-gray-800 rounded-2xl relative">
        <div className="absolute -top-28 right-0 md:right-auto md:left-0 -rotate-12">
          <Cup className="animate-[wiggle_1s_ease-in-out_infinite] w-36 h-36 md:w-48 md:h-48" />
        </div>
        <div className="container flex justify-between items-center gap-5 flex-col-reverse lg:flex-row">
          <ul
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 justify-between w-full text-5xl font-medium capitalize"
            role="list"
            ref={ref}
          >
            {visible ? (
              <>
                <li className="space-y-2">
                  <div>
                    <CountUp start={0} end={15} />k
                  </div>
                  <div className="text-3xl">happy customers</div>
                </li>
                <li className="space-y-2">
                  <div>
                    <CountUp start={0} end={150} />k
                  </div>
                  <div className="text-3xl">monthly visitors</div>
                </li>
                <li className="space-y-2">
                  <div>
                    <CountUp start={0} end={15} />
                  </div>
                  <div className="text-3xl">countries worldwide</div>
                </li>
                <li className="space-y-2">
                  <div>
                    <CountUp start={0} end={100} />+
                  </div>
                  <div className="text-3xl">top partners</div>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </section>
      <article className="mt-48" id="methods">
        <div className="container space-y-20">
          <Headline
            title="Make online education accessible."
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
          />
          <div className="bg-gray-100 dark:bg-gray-800 md:py-24 lg:pb-28 lg:pt-28 rounded-lg">
            <ul
              className="grid grid-rows-3 mx-auto max-w-6xl divide-y divide-gray-200 dark:divide-gray-600"
              role="list"
            >
              <EducationItem
                title="training courses"
                description="The gradual accumulation of information about"
                image="/images/lamp.png"
                alt="Illustration of Desk Lamp"
              />
              <EducationItem
                title="books library"
                description="The gradual accumulation of information about"
                image="/images/book.png"
                alt="Illustration of Books"
              />
              <EducationItem
                title="market analysis"
                description="The gradual accumulation of information about"
                image="/images/Frame-212.png"
                alt="Illustration of Up Arrow"
              />
            </ul>
          </div>
        </div>
      </article>
      <article className="mt-48" id="course">
        <div className="container space-y-20">
          <Headline
            title="Choose the course you want to study."
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
          />
          <ol className="grid md:grid-cols-2 gap-x-5 gap-y-20" role="list">
            <CourseCard
              title="graphic design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              href="/blog/graphic-design"
              icon={<GraphicDesign />}
            />
            <CourseCard
              title="back-end development"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              href="/blog/backend-development"
              icon={<Backend />}
            />
            <CourseCard
              title="UI UX design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              href="/blog/ui-ux-design"
              icon={<UIUXDesign />}
            />
            <CourseCard
              title="Front-end development"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              href="/blog/frontend-development"
              icon={<Frontend />}
            />
          </ol>
        </div>
      </article>
      <article className="mt-48" id="testimony">
        <div className="container space-y-20">
          <Headline
            title="What our customers are saying."
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
          />
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-5" role="list">
            <CustomerCard
              title="floyd miles"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
              image="/images/face-1.png"
              rating={5}
            />
            <CustomerCard
              title="ronald richards"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
              image="/images/face-2.png"
              rating={4}
            />
            <CustomerCard
              title="kristin watson"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
              image="/images/face-3.png"
              rating={4.5}
            />
          </ol>
        </div>
      </article>
      <article className="mt-48" id="contact">
        <div className="container space-y-20">
          <Headline
            title="Contact us if you need."
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
          />
          <FormView />
        </div>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d953.6856622475748!2d22.559797904069026!3d38.70830834486954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1669305753759!5m2!1sen!2seg"
        width="550"
        height="450"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full mt-48"
      />
    </Container>
  );
}
