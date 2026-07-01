import {FC, memo} from 'react';

import {useLanguage} from '../../../context/LanguageContext';
import {SectionId, useData} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const {education, experience, skills} = useData();
  const {language} = useLanguage();
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={language === 'ja' ? '学歴' : 'Education'}>
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={language === 'ja' ? '職歴' : 'Work'}>
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={language === 'ja' ? 'スキル' : 'Skills'}>
          <p className="pb-8">
            {language === 'ja'
              ? '習得している技術スタックおよびスキルの一覧です。'
              : 'Here you can show a snapshot of your skills to show off to employers'}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
