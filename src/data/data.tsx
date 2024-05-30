// image && icon
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/Background.png';
import profilepic from '../images/coloured-co-logo.png'
import Portfolioimage6 from '../images/portfolio/modify-公牛-柔道v1.jpg';
import portfolioimage2 from '../images/portfolio/modify-北极熊-拳击v1.jpg';
import Portfolioimage12 from '../images/portfolio/modify-圣贝尔纳狗-滑板v1.jpg';
import portfolioimage3 from '../images/portfolio/modify-大象-足球v1.jpg';
import Portfolioimage20 from '../images/portfolio/modify-孟加拉虎-橄榄球v1.jpg';
import Portfolioimage19 from '../images/portfolio/modify-朱鹮-帆船v1.jpg';
import Portfolioimage5 from '../images/portfolio/modify-梵猫-排球v1.jpg';
import Portfolioimage7 from '../images/portfolio/modify-海狸-游泳v1.jpg';
import Portfolioimage10 from '../images/portfolio/modify-灰熊-举重v1.jpg';
import Portfolioimage14 from '../images/portfolio/modify-熊猫-乒乓球v1.jpg';
import Portfolioimage9 from '../images/portfolio/modify-狐猴-击剑v1.jpg';
import portfolioimage1 from '../images/portfolio/modify-白头海雕-篮球v1.jpg';
import Portfolioimage16 from '../images/portfolio/modify-眼镜猴-射击v1.jpg';
import Portfolioimage18 from '../images/portfolio/modify-知更鸟-射箭v1.jpg';
import Portfolioimage17 from '../images/portfolio/modify-羊驼-网球v1.jpg';
import Portfolioimage11 from '../images/portfolio/modify-考拉-高尔夫v1.jpg';
import portfolioimage4 from '../images/portfolio/modify-袋鼠-曲棍球v1.jpg';
import Portfolioimage15 from '../images/portfolio/modify-雪豹-羽毛球v1.jpg';
import Portfolioimage13 from '../images/portfolio/modify-驼鹿-田径v1.jpg';
import Portfolioimage8 from '../images/portfolio/modify-黑颈鹿-体操v1.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

// Page meta data
export const homePageMeta: HomepageMeta = {
  title: 'Olympic Together - Paris 2024',
  description: "Olympic Together - Paris 2024 - AIArtFinalProject",
};

// Section definition
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Discussions: 'discussions',
  Home: 'home',
  Poster: 'poster',

} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

// Hero section
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Paris 2024!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {/* I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder. */}
        这个夏天，共享体育盛宴，讲述巴黎浪漫！
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {/* In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>. */}
        巴黎奥运会将在 2024 年 7 月 26 日至 8 月 11 日举行，届时将有 32 个体育项目，将有 329 个金牌产生。
      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
        现在距离奥运会开幕还有  {Math.ceil((new Date('2024-07-26').getTime() - Date.now()) / (1000 * 60 * 60 * 24))} 天。
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.About}`,
      text: '精彩一览',
      primary: true,
    },
    {
      href: 'https://olympics.com/zh/paris-2024',
      text: '查看更多',
      primary: false,
    },
  ],
};

// About section
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `我们是北京大学《视觉艺术与计算美学》的 Olympic Together 小组，致力于通过结合计算美学与技术手段，呈现各国文化特色与奥运会体育项目的融合。
  我们使用AI绘图技术制作了一系列结合各国代表动物与奥运会体育项目的创意海报，旨在通过动物这一文化符号，体现各国在奥运会中的独特风采与竞技精神。
  同时，还为想要了解奥运会相关项目的朋友们提供便利。`,
  aboutItems: [
    // {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

// Portfolio section
export const portfolioItems: PortfolioItem[] = [
  {
    title: '白头海雕-篮球',
    description: '白头海雕-篮球',
    url: 'https://olympics.com/zh/paris-2024/schedule/basketball',
    image: portfolioimage1,
  },
  {
    title: '北极熊-拳击',
    description: '北极熊-拳击',
    url: 'https://olympics.com/zh/paris-2024/schedule/boxing',
    image: portfolioimage2,
  },
  {
    title: '大象-足球',
    description: '大象-足球',
    url: 'https://olympics.com/zh/paris-2024/schedule/football',
    image: portfolioimage3,
  },
  {
    title: '袋鼠-曲棍球',
    description: '袋鼠-曲棍球',
    url: 'https://olympics.com/zh/paris-2024/schedule/hockey',
    image: portfolioimage4,
  },
  {
    title: '梵猫-排球',
    description: '梵猫-排球',
    url: 'https://olympics.com/zh/paris-2024/schedule/volleyball',
    image: Portfolioimage5,
  },
  {
    title: '公牛-柔道',
    description: '公牛-柔道',
    url: 'https://olympics.com/zh/paris-2024/schedule/judo',
    image: Portfolioimage6,
  },
  {
    title: '海狸-游泳',
    description: '海狸-游泳',
    url: 'https://olympics.com/zh/paris-2024/schedule/swimming',
    image: Portfolioimage7,
  },
  {
    title: '黑颈鹿-体操',
    description: '黑颈鹿-体操',
    url: 'https://olympics.com/zh/paris-2024/schedule/artistic-gymnastics',
    image: Portfolioimage8,
  },
  {
    title: '狐猴-击剑',
    description: '狐猴-击剑',
    url: 'https://olympics.com/zh/paris-2024/schedule/fencing',
    image: Portfolioimage9,
  },
  {
    title: '灰熊-举重',
    description: '灰熊-举重',
    url: 'https://olympics.com/zh/paris-2024/schedule/weightlifting',
    image: Portfolioimage10,
  },
  {
    title: '考拉-高尔夫',
    description: '考拉-高尔夫',
    url: 'https://olympics.com/zh/paris-2024/schedule/golf',
    image: Portfolioimage11,
  },
  {
    title: '圣贝尔纳狗-滑板',
    description: '圣贝尔纳狗-滑板',
    url: 'https://olympics.com/zh/paris-2024/schedule/skateboarding',
    image: Portfolioimage12,
  },
  {
    title: '驼鹿-田径',
    description: '驼鹿-田径',
    url: 'https://olympics.com/zh/paris-2024/schedule/athletics',
    image: Portfolioimage13,
  },
  {
    title: '熊猫-乒乓球',
    description: '熊猫-乒乓球',
    url: 'https://olympics.com/zh/paris-2024/schedule/table-tennis',
    image: Portfolioimage14,
  },
  {
    title: '雪豹-羽毛球',
    description: '雪豹-羽毛球',
    url: 'https://olympics.com/zh/paris-2024/schedule/badminton',
    image: Portfolioimage15,
  },
  {
    title: '眼镜猴-射击',
    description: '眼镜猴-射击',
    url: 'https://olympics.com/zh/paris-2024/schedule/shooting',
    image: Portfolioimage16,
  },
  {
    title: '羊驼-网球',
    description: '羊驼-网球',
    url: 'https://olympics.com/zh/paris-2024/schedule/tennis',
    image: Portfolioimage17,
  },
  {
    title: '知更鸟-射箭',
    description: '知更鸟-射箭',
    url: 'https://olympics.com/zh/paris-2024/schedule/archery',
    image: Portfolioimage18,
  },
  {
    title: '朱鹮-帆船',
    description: '朱鹮-帆船',
    url: 'https://olympics.com/zh/paris-2024/schedule/sailing',
    image: Portfolioimage19,
  },
  {
    title: '孟加拉虎-橄榄球',
    description: '孟加拉虎-橄榄球',
    url: 'https://olympics.com/zh/paris-2024/schedule/rugby-sevens',
    image: Portfolioimage20,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/PaperCrane-ovo/AIArtDiscussion'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'FaceBook',Icon: FacebookIcon,href: 'https://www.facebook.com/Paris2024'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/company/paris-2024-olympic-and-paralympic-games-bid'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/paris2024'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/Paris2024'},
];
