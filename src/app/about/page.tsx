import Image from 'next/image';

import code from '../public/code.png';
import consulting from '../public/consulting.png';
import design from '../public/design.png';
import deved from '../public/dev-ed-wave.png';
import expositores from '../public/expositores.png';
import investimento from '../public/investimento.png';
import palestrantes from '../public/palestrantes.png';

export const metadata = {
  title: 'About',
  description: 'This is about page.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="min-h-screen">
        <div className="p-10 py-10 text-center">
          <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          <h2 className="py-2 text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">
            최지웅
          </h2>
          <h3 className="py-2 text-2xl dark:text-gray-200 md:text-3xl">
            Developer & Education Enthusiast
          </h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
            SW 교육을 통해 긍정적인 변화를 만들고 싶은 교육자입니다.<br></br>
            저에 대해 더 궁금하시다면, 아래 Resume를 참고해주세요!
          </p>
          <nav className="my-8 flex justify-center dark:text-white">
            <ul className="flex items-center">
              <li>
                <a
                  className="rounded-md border-none bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="text-center">
        <div>
          <h3 className="py-1 text-3xl">Career</h3>
          <p className="text-md break-all py-2 leading-8 text-gray-800 dark:text-gray-200">
            비전공자로 개발에 입문하여, 유아 교육을 시작으로 비전공자를 거쳐
            강사 교육까지 어떻게 해야 쉽게 배울 수 있는지, <br></br>동기부여는
            어떻게 해야 꾸준히 성장할 수 있는지 끊임없이 연구했습니다.
          </p>
        </div>
        <div className="gap-10 lg:flex">
          <div className="my-10 flex-1 rounded-xl p-10 text-center shadow-lg dark:bg-white">
            <Image
              src={investimento}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pb-2 pt-8 text-lg font-medium dark:text-gray-800">
              Business Development
            </h3>
          </div>
          <div className="my-10 flex-1 rounded-xl p-10 text-center shadow-lg dark:bg-white">
            <Image src={code} width={100} height={100} className="mx-auto" />
            <h3 className="pb-2 pt-8 text-lg font-medium dark:text-gray-800">
              Full-stack Developer
            </h3>
          </div>
          <div className="my-10 flex-1 rounded-xl p-10 text-center shadow-lg dark:bg-white">
            <Image
              src={expositores}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pb-2 pt-8 text-lg font-medium dark:text-gray-800">
              Team Management
            </h3>
          </div>
          <div className="my-10 flex-1 rounded-xl p-10 text-center shadow-lg dark:bg-white">
            <Image
              src={palestrantes}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="pb-2 pt-8 text-lg font-medium dark:text-gray-800">
              Programming Tutor
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
