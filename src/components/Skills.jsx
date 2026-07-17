import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Box, Camera, Video, Wand2 } from 'lucide-react';

const skills = [
  {
    icon: <Box size={28} />,
    title: '三维建模',
    desc: '精通 Rhino 犀牛进行工业级产品建模，精准还原产品结构与细节，确保模型精度满足商业渲染需求。',
    tags: ['Rhino', 'C4D'],
    level: 95,
  },
  {
    icon: <Sparkles size={28} />,
    title: '产品渲染',
    desc: '熟练使用 Keyshot 和 C4D/Octane 进行高质量产品渲染，擅长材质表现、光影氛围营造和场景搭建。',
    tags: ['Keyshot', 'C4D/OC'],
    level: 92,
  },
  {
    icon: <Palette size={28} />,
    title: '视觉设计',
    desc: '精通 Photoshop 进行图片精修、合成与版式设计，为亚马逊A+页面打造高品质视觉内容。',
    tags: ['Photoshop', 'A+页面'],
    level: 90,
  },
  {
    icon: <Video size={28} />,
    title: '视频制作',
    desc: '熟练使用 AE 和 PR 进行广告视频制作，涵盖产品动画、宣传片剪辑和后期特效处理。',
    tags: ['AE', 'PR'],
    level: 85,
  },
  {
    icon: <Camera size={28} />,
    title: '摄影精修',
    desc: '具备专业的商业摄影与后期精修能力，掌握布光方案、色彩校正和产品细节优化全流程。',
    tags: ['摄影', '精修'],
    level: 88,
  },
  {
    icon: <Wand2 size={28} />,
    title: 'AI设计',
    desc: '探索AI生成与设计工作流的融合，运用前沿AI工具辅助创意构思、素材生成和效率优化。',
    tags: ['AI工具', '创意探索'],
    level: 80,
  },
];

function SkillCard({ skill, index }) {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="skill-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="skill-card-header">
        <div className="skill-icon-wrap">
          {skill.icon}
        </div>
        <div className="skill-level">
          <svg className="skill-level-ring" viewBox="0 0 40 40">
            <circle
              cx="20" cy="20" r="17"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />
            <circle
              cx="20" cy="20" r="17"
              fill="none"
              stroke="url(#skillGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${(skill.level / 100) * 107} 107`}
              strokeDashoffset="0"
              transform="rotate(-90 20 20)"
              style={{ transition: 'stroke-dasharray 1.5s ease' }}
            />
          </svg>
          <span className="skill-level-text">{skill.level}%</span>
        </div>
      </div>

      <h3 className="skill-card-title">{skill.title}</h3>
      <p className="skill-card-desc">{skill.desc}</p>

      <div className="skill-card-tags">
        {skill.tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6c5ce7" />
            <stop offset="100%" stopColor="#a29bfe" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">个人优势</h2>
          <p className="section-desc">
            近10年设计生涯积累的多维技能体系，从三维建模到视频制作，形成完整的设计交付能力链。
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
