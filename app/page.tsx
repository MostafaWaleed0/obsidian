"use client";

import { Form } from "app/components/form";
import {
  Backend,
  Frontend,
  GraphicDesign,
  Hero,
  UIUXDesign,
} from "app/components/icons";
import { Button, Rating } from "app/components/ui";
import Image from "next/image";
import frame from "public/images/Frame-212.png";
import book from "public/images/book.png";
import cup from "public/images/cup.png";
import face1 from "public/images/face-1.png";
import face2 from "public/images/face-2.png";
import face3 from "public/images/face-3.png";
import lamp from "public/images/lamp.png";
import CountUp from "react-countup";

function Headline({ title, description }) {
  return (
    <header className="text-center space-y-4">
      <h2>{title}</h2>
      <p className="w-fit mx-auto">{description}</p>
    </header>
  );
}

function EducationItem({ title, description, image, alt }) {
  return (
    <li className="py-20 mx-4">
      <article className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start items-center space-y-3 lg:space-y-0">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={image}
            width={250}
            height={250}
            alt={alt}
            className="h-40 w-40 md:h-auto md:w-auto"
          />
          <h3 className="text-4xl">{title}</h3>
        </div>
        <p className="text-2xl lg:text-5xl leading-relaxed text-center lg:text-start">
          {description}
        </p>
      </article>
    </li>
  );
}

function CourseCard({ title, description, href, icon }) {
  return (
    <li className="bg-gray-100 dark:bg-gray-800 pb-10 pt-36 px-8 md:px-16 md:pb-20 relative rounded-lg">
      <article>
        <div>
          <h3 className="leading-tight text-3xl md:text-4xl">{title}</h3>
          <p className="leading-tight text-2xl md:text-4xl mt-4 max-w-md">
            {description}
          </p>
          <div className="mt-16">
            <Button type="link" href={href}>
              learn more
            </Button>
          </div>
        </div>
      </article>
      <div className="absolute left-16 -top-11">{icon}</div>
    </li>
  );
}

function TestimonyCard({ title, description, image, rating }) {
  return (
    <li className="bg-gray-100 dark:bg-gray-800 p-8 md:p-12 rounded-lg">
      <article className="space-y-4">
        <div className="flex justify-between items-center">
          <Image
            src={image}
            width={112}
            height={112}
            alt=""
            className="rounded-full w-24 h-24 object-cover"
          />
          <Rating value={rating} />
        </div>
        <div>
          <h3 className="leading-tight text-3xl">{title}</h3>
          <p className="mt-4 max-w-md">{description}</p>
        </div>
      </article>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <section className="py-20 md:py-32" id="home">
        <div className="container flex justify-between items-center gap-5 flex-col-reverse lg:flex-row">
          <div className="space-y-8 text-2xl">
            <p className="uppercase text-gray-400 font-medium">
              for better future
            </p>
            <h1>best learning opportunities</h1>
            <p className="leading-8 md:leading-10 tex-xl md:text-2xl">
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
      <section className="py-20 md:py-28 !mt-0 bg-gray-100 dark:bg-gray-800 rounded-2xl relative">
        <div className="absolute -top-28 right-5 md:right-auto md:left-0 -rotate-12">
          <Image
            src={cup}
            alt={""}
            className="animate-[wiggle_1s_ease-in-out_infinite] w-36 h-36 md:w-48 md:h-48"
          />
        </div>
        <div className="container flex justify-between items-center gap-5 flex-col-reverse lg:flex-row">
          <ul
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 justify-between w-full text-5xl font-medium capitalize"
            role="list"
          >
            <li className="space-y-2">
              <div>
                <CountUp start={0} end={15} enableScrollSpy={true} />k
              </div>
              <div className="text-3xl">happy customers</div>
            </li>
            <li className="space-y-2">
              <div>
                <CountUp start={0} end={150} enableScrollSpy={true} />k
              </div>
              <div className="text-3xl">monthly visitors</div>
            </li>
            <li className="space-y-2">
              <div>
                <CountUp start={0} end={15} enableScrollSpy={true} />
              </div>
              <div className="text-3xl">countries worldwide</div>
            </li>
            <li className="space-y-2">
              <div>
                <CountUp start={0} end={100} enableScrollSpy={true} />+
              </div>
              <div className="text-3xl">top partners</div>
            </li>
          </ul>
        </div>
      </section>
      <article id="methods">
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
                image={lamp}
                alt="Illustration of Desk Lamp"
              />
              <EducationItem
                title="books library"
                description="The gradual accumulation of information about"
                image={book}
                alt="Illustration of Books"
              />
              <EducationItem
                title="market analysis"
                description="The gradual accumulation of information about"
                image={frame}
                alt="Illustration of Up Arrow"
              />
            </ul>
          </div>
        </div>
      </article>
      <article id="course">
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
      <article id="testimony">
        <div className="container space-y-20">
          <Headline
            title="What our customers are saying."
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
          />
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-5" role="list">
            <TestimonyCard
              title="floyd miles"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
              image={face1}
              rating={5}
            />
            <TestimonyCard
              title="ronald richards"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
              image={face2}
              rating={4}
            />
            <TestimonyCard
              title="kristin watson"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
              image={face3}
              rating={5}
            />
          </ol>
        </div>
      </article>
      <article id="contact">
        <div className="container space-y-20">
          <Headline
            title="Contact us if you need."
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci dolore asperiores pariatur?"
          />
          <Form />
        </div>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d953.6856622475748!2d22.559797904069026!3d38.70830834486954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1669305753759!5m2!1sen!2seg"
        width="550"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full mt-48"
      />
    </>
  );
}
