import React from "react";

const AboutMe = () => {
  return (
    <div>
      <section className="bg-[#F2F2F2] py-8 px-8">
        <div className="max-w-5xl mx-auto min-h-44 ">
          <div className=" flex justify-center items-center gap-2">
            <div className="flex grow border-b border-gray-500"></div>
            <div className="text-2xl">About me</div>
            <div className="flex grow border-b border-gray-500"></div>
          </div>

          <div className="flex justify-between gap-3 mt-20">
            <div className="">
              <p className="">
                I am a recent graduate from the American International
                University-Bangladesh (AIUB) with a strong foundation in web
                development and hands-on experience in React. During my studies,
                I focused on front-end development, particularly building
                responsive and dynamic web applications. I completed several
                projects where I designed and implemented user interfaces,
                enhancing user experience and optimizing performance. These
                projects strengthened my skills in JavaScript, HTML, CSS, and
                the React ecosystem
                <br />
                Beyond academics, I was an active member of the AIUB Computer
                Club, where I contributed to organizing science and gaming
                fests. My role involved managing guests and participants,
                ensuring their needs were met, and collaborating with teams to
                deliver successful events. These experiences refined my ability
                to handle clients, communicate effectively, and work efficiently
                in team settings. <br />
                I am also passionate about competitive coding, having solved
                over 100 problems on Codeforces, which sharpened my
                problem-solving skills and deepened my understanding of
                algorithms and data structures. <br />
                With a strong work ethic, attention to detail, and a passion for
                continuous learning, I thrive in collaborative environments and
                am eager to contribute to innovative projects. I am confident
                that I can bring value to your development team.
              </p>
            </div>

            <div className="">
              <img src="/public/taba.jpg" alt="taba" className="rounded-sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
