import Giscus from '@giscus/react';
import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

// export default function Discussion(){
//     return (
//         <Giscus
//         repo="PaperCrane-ovo/AIArtDiscussion"
//         repoId="R_kgDOMBAU-Q"
//         category="Announcements"
//         categoryId="DIC_kwDOMBAU-c4CfoSu"
//         mapping="pathname"
//         strict="0"
//         reactionsEnabled="1"
//         emitMetadata="0"
//         inputPosition="top"
//         theme="preferred_color_scheme"
//         lang="zh-CN"
//         loading="lazy"
//         // crossOrigin="anonymous"
//         // async
//         />
//     )
// }
// const Discussion = () => {
//     return (
//         <div>
//             <Giscus
//                 repo="PaperCrane-ovo/AIArtDiscussion"
//                 repoId="R_kgDOMBAU-Q"
//                 category="Announcements"
//                 categoryId="DIC_kwDOMBAU-c4CfoSu"
//                 mapping="pathname"
//                 strict="0"
//                 reactionsEnabled="1"
//                 emitMetadata="0"
//                 theme="noborder_dark"
//                 lang="zh-CN"
//                 loading="lazy"
//             />
//         </div>
//     )
// }
// Discussion.displayName = 'discussion';
// export default Discussion;
const Discussion: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Discussions}>
      <Giscus
        category="Announcements"
        categoryId="DIC_kwDOMBAU-c4CfoSu"
        emitMetadata="0"
        lang="zh-CN"
        loading="lazy"
        mapping="pathname"
        reactionsEnabled="1"
        repo="PaperCrane-ovo/AIArtDiscussion"
        repoId="R_kgDOMBAU-Q"
        strict="0"
        theme="noborder_dark"
      />
    </Section>
  );
});
Discussion.displayName = 'Discussion';
export default Discussion;
