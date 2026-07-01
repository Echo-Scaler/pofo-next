import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import blogImage1 from '../images/blog/blog-1.png';
import blogImage2 from '../images/blog/blog-2.png';
import blogImage3 from '../images/blog/blog-3.png';
import heroImage from '../images/header-background.webp';
import porfolioImage5 from '../images/portfolio/hokkaido-custom.png';
import porfolioImage4 from '../images/portfolio/inance-custom.png';
import porfolioImage2 from '../images/portfolio/kirawai-custom.png';
import porfolioImage1 from '../images/portfolio/miura-custom.png';
import porfolioImage3 from '../images/portfolio/otto-custom.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/pro-pic.jpg';
import {
  About,
  BlogSection,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "K.Wai Yan's Portfolio",
  description: 'K.Wai Yan - Full Stack Developer',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Blog: 'blog',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `K.Wai Yan です`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        日本を拠点に活動する<strong className="text-stone-100">フルスタック Web エンジニア</strong>です。現在、
        <strong className="text-stone-100">株式会社アウトワード (Outward, Inc.)</strong> にて、モダンな Web
        技術を活用し、スケーラブルで保守性の高い Web アプリケーションの開発を行っています。
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        プライベートでは、<strong className="text-stone-100">サッカー</strong>をしたり、
        <strong className="text-stone-100">UFC</strong>の試合を観賞したり、
        <strong className="text-stone-100">読書</strong>を楽しんでいます。
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: '職務経歴書',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'お問い合わせ',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `PHP (Laravel)、Java、MySQL、React、Next.js を用いた、スケーラブルで保守性の高い Web アプリケーションの構築を専門としています。クリーンで高品質なコードの記述、継続的な技術習得、そしてテクノロジーを通じてビジネス上の課題を解決することに情熱を注いでいます。`,
  aboutItems: [
    {label: '所在地', text: '千葉県', Icon: MapIcon},
    {label: '年齢', text: '31歳', Icon: CalendarIcon},
    {label: '国籍', text: 'ミャンマー', Icon: FlagIcon},
    {label: '趣味', text: 'サッカー、UFC観戦、読書', Icon: SparklesIcon},
    {label: '学歴', text: 'ヤンゴン大学', Icon: AcademicCapIcon},
    {label: '所属', text: '株式会社アウトワード', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '語学 (Spoken languages)',
    skills: [
      {
        name: '英語 (English)',
        level: 8,
      },
      {
        name: '日本語 (Japanese)',
        level: 9,
      },
      {
        name: 'ミャンマー語 (Burmese)',
        level: 10,
      },
    ],
  },
  {
    name: 'フロントエンド開発',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 5,
      },
    ],
  },
  {
    name: 'バックエンド開発',
    skills: [
      {
        name: 'PHP (Laravel)',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'インフラ & DevOps',
    skills: [
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'AWS',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ゴルフクラブフィッティング管理システム',
    description:
      'PHP (Laravel) と MySQL を用いて、顧客管理、フィッティング履歴、認証、検索機能を開発。国際的な開発チームと連携してプロジェクトを推進しました。',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Kirawai オンラインストア',
    description:
      'Laravel、Next.js、MySQL を用いたフルスタック E コマースプラットフォームの開発。ユーザー認証、RBAC（ロールベースアクセス制御）、コンテンツ管理、およびロイヤリティ＆リワード機能の複雑なビジネスロジックを実装。',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Nishispo-CMS',
    description:
      'PHP、jQuery、MySQL を活用し、画像アップロード、AJAX フォーム、CSV エクスポート機能などの主要な CMS 機能を開発。',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: '従業員管理システム',
    description:
      'セキュリティに重点を置き、PHP および Bootstrap を用いて、スケジュール管理、勤怠管理、タスク割り当て、レポート機能を構築。',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Hokkaido-CMS',
    description: 'PHP、jQuery、MySQL を用いて、広告管理、メディアアップロード、エディタツールなどの CMS 機能を開発。',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'プロジェクト 6',
    description: 'プロジェクトの概要をここに記述します。',
    url: '#',
    image: porfolioImage6,
  },
  {
    title: 'プロジェクト 7',
    description: 'プロジェクトの概要をここに記述します。',
    url: '#',
    image: porfolioImage7,
  },
  {
    title: 'プロジェクト 8',
    description: 'プロジェクトの概要をここに記述します。',
    url: '#',
    image: porfolioImage8,
  },
  {
    title: 'プロジェクト 9',
    description: 'プロジェクトの概要をここに記述します。',
    url: '#',
    image: porfolioImage9,
  },
  {
    title: 'プロジェクト 10',
    description: 'プロジェクトの概要をここに記述します。',
    url: '#',
    image: porfolioImage10,
  },
  {
    title: 'プロジェクト 11',
    description: 'プロジェクトの概要をここに記述します。',
    url: '#',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2010年12月 - 2017年3月',
    location: 'ヤンゴン大学',
    title: '動物学 修士課程',
    content: (
      <p>
        科学的研究および実験室での実務経験を積みました。修士論文では、魚類における天然水銀の毒性学を研究し、分析思考と研究スキルを強化しました。
      </p>
    ),
  },
  {
    date: '2022年4月 - 2024年3月',
    location: '中央情報専門学校',
    title: 'IT・Web 学科',
    content: (
      <p>
        Java、HTML、CSS、JavaScript、SQL を用いた実践的なプロジェクトを通じて、Web
        開発の堅固な基礎を構築しました。また、Python や AI
        の基礎概念も学び、問題解決能力とソフトウェア開発スキルを高めました。
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024年4月 - 現在',
    location: '株式会社アウトワード',
    title: 'ジュニア Web エンジニア',
    content: (
      <p>
        主に PHP (Laravel) を使用して、スケーラブルな Web
        アプリケーションの構築と保守を担当。シニアエンジニアや国際的なチームメンバーと協業し、新機能の開発、課題解決、およびアプリケーションの品質・パフォーマンスの継続的な改善に取り組んでいます。
      </p>
    ),
  },
];

/**
 * Blog section
 */
export const blogSection: BlogSection = {
  blogs: [
    {
      title: 'PHPにおけるクッキーとセッション — 開発者のための完全ガイド',
      description:
        'PHP におけるクッキーとセッションの違いを学び、ユーザー認証や状態管理を効果的に行うための実践的なコード例を紹介します。',
      date: '2026年3月23日',
      url: 'https://medium.com/@waiyan.toshima12',
      image: blogImage1,
      tags: ['php', 'web dev'],
    },
    {
      title: '完全ガイド: Laravel での AWS 機能の活用 (初級から上級まで)',
      description:
        'Laravel アプリケーションで Amazon Web Services (AWS) を活用する方法を解説。基本的なセットアップから高度な統合までを網羅しています。',
      date: '2026年3月24日',
      url: 'https://medium.com/@waiyan.toshima12',
      image: blogImage2,
      tags: ['laravel', 'aws'],
    },
    {
      title: 'すべての開発者が知っておくべき 10 の便利な PHP 関数（実践例付き）',
      description:
        '開発ワークフローを効率化する必須の PHP 関数トップ 10 を紹介。文字列操作や配列操作などの実践的なコード例を掲載しています。',
      date: '2026年3月15日',
      url: 'https://medium.com/@waiyan.toshima12',
      image: blogImage3,
      tags: ['php', 'code'],
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'お問い合わせ',
  description: 'ご質問やご相談がございましたら、メールにてお気軽にご連絡ください。',
  items: [
    {
      type: ContactType.Email,
      text: 'waiyan.toshima12@gmail.com',
      href: 'mailto:waiyan.toshima12@gmail.com',
    },
    {
      type: ContactType.Location,
      text: '日本、千葉県',
      href: 'https://www.google.com/maps/place/Chiba,+Japan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [];
