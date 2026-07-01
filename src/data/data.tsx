import {useLanguage} from '../context/LanguageContext';
import * as en from './data_en';
import * as ja from './data_ja';

export const SectionId = en.SectionId;
export type SectionId = en.SectionId;

export const homePageMeta = en.homePageMeta;
export const heroData = en.heroData;
export const aboutData = en.aboutData;
export const skills = en.skills;
export const portfolioItems = en.portfolioItems;
export const education = en.education;
export const experience = en.experience;
export const blogSection = en.blogSection;
export const contact = en.contact;
export const socialLinks = en.socialLinks;

export const useData = () => {
  const {language} = useLanguage();
  return language === 'ja' ? ja : en;
};
