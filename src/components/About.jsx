import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Download, ChevronRight } from 'lucide-react';

const experiences = [
  {
    period: '2024.06 - 2026.03',
    company: '三个三科技',
    role: '视觉设计师',
    desc: '负责产品渲染、亚马逊主图A+图片制作、广告视频制作，为无人机品牌打造高品质视觉内容。',
    tags: ['产品渲染', 'A+页面', '视频制作'],
  },
  {
    period: '2022.03 - 2024.05',
    company: '益镓华科技',
    role: '视觉设计师',
    desc: '负责产品建模、亚马逊主图A+图片制作、广告视频制作，为风机及配件品牌提供全套视觉解决方案。',
    tags: ['三维建模', 'A+页面', '广告视频'],
  },
  {
    period: '2016.04 - 2021.12',
    company: '聚光影像',
    role: '设计组长',
    desc: '负责公司拍摄、精修、建模渲染及视频拍摄辅助。半年内晋升组长，管理和指导新人工作。',
    tags: ['摄影精修', '建模渲染', '团队管理'],
  },
];

const projectStats = [
  { num: '200+', label: '完成项目' },
  { num: '50+', label: '服务品牌' },
  { num: '8+', label: '年行业深耕' },
  { num: '3', label: '核心技能方向' },
];

export default function About() {
  const [activeExp, setActiveExp] = useState(0);
  const avatarRef = useRef(null);

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">About</span>
          <h2 className="section-title">关于我</h2>
          <p className="section-desc">
            待人真诚，积极乐观，谦虚稳重。有较强的自我学习能力和团队协作精神，
            具备无私奉献精神，始终追求设计的极致表达。
          </p>
        </div>

        <div className="about-grid">
          {/* Left - Avatar & Quick Info */}
          <div className="about-visual">
            <div className="about-avatar-wrap" ref={avatarRef}>
              <div className="about-avatar">
                <div className="about-avatar-inner">
                  <span className="about-avatar-initials">LWM</span>
                </div>
                <div className="about-avatar-ring" />
              </div>
              <div className="about-avatar-glow" />
            </div>

            <div className="about-quick-info">
              <div className="about-info-item">
                <Mail size={16} />
                <span>630419017@qq.com</span>
              </div>
              <div className="about-info-item">
                <Phone size={16} />
                <span>13425147177</span>
              </div>
              <div className="about-info-item">
                <MapPin size={16} />
                <span>广东省汕尾市</span>
              </div>
            </div>

            <a href="#" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
              <Download size={16} />
              <span>下载简历</span>
            </a>
          </div>

          {/* Right - Experience Timeline */}
          <div className="about-content">
            <div className="about-intro">
              <h3 className="about-name">罗伟明</h3>
              <p className="about-role">视觉设计师 · AI设计师 · 品牌设计师</p>
              <p className="about-bio">
                毕业于广东开放大学管理学专业，2019年初于白无常三维培训机构进修C4D建模渲染，
                掌握前沿三维视觉技术。深耕电商视觉设计领域近10年，
                专注于亚马逊品牌视觉、产品三维渲染、广告视频制作等方向。
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="exp-timeline">
              <h4 className="exp-title">工作经历</h4>
              <div className="exp-tabs">
                {experiences.map((exp, i) => (
                  <button
                    key={i}
                    className={`exp-tab${i === activeExp ? ' active' : ''}`}
                    onClick={() => setActiveExp(i)}
                  >
                    <span className="exp-tab-dot" />
                    {exp.company}
                  </button>
                ))}
              </div>

              <div className="exp-detail" key={activeExp}>
                <div className="exp-detail-header">
                  <span className="exp-detail-period">{experiences[activeExp].period}</span>
                  <span className="exp-detail-role">{experiences[activeExp].role}</span>
                </div>
                <p className="exp-detail-desc">{experiences[activeExp].desc}</p>
                <div className="exp-detail-tags">
                  {experiences[activeExp].tags.map((tag) => (
                    <span key={tag} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="about-stats">
              {projectStats.map((stat) => (
                <div className="about-stat-card" key={stat.label}>
                  <span className="about-stat-num">{stat.num}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
