import { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '无人机品牌视觉',
    category: '产品渲染 / A+页面',
    desc: '为亚马逊无人机品牌打造全套A+页面与产品渲染视觉，包含场景搭建、光影设计和后期精修。',
    tags: ['C4D', 'Octane', 'Photoshop'],
    color: '#6c5ce7',
    image: null, // 占位 — 后续替换为实际图片
  },
  {
    id: 2,
    title: '风机产品三维展示',
    category: '三维建模 / 广告视频',
    desc: '风机及配件产品的完整三维建模与展示动画，涵盖结构建模、材质表现和动态演示。',
    tags: ['Rhino', 'Keyshot', 'AE'],
    color: '#00cec9',
    image: null,
  },
  {
    id: 3,
    title: '品牌视觉升级',
    category: '品牌设计 / 视觉系统',
    desc: '为多个电商品牌提供统一的视觉升级方案，包括品牌色调、版式规范和营销物料体系。',
    tags: ['Photoshop', 'AI', '品牌策略'],
    color: '#fd79a8',
    image: null,
  },
  {
    id: 4,
    title: '产品精修与摄影',
    category: '摄影 / 后期精修',
    desc: '高品质产品摄影与精修服务，涵盖布光方案、色彩校正和细节优化，提升产品视觉质感。',
    tags: ['摄影', '精修', 'Lightroom'],
    color: '#fdcb6e',
    image: null,
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">精选项目</h2>
          <p className="section-desc">
            每个项目都是一次对视觉语言的深度探索，从产品渲染到品牌视觉，追求商业与美学的平衡。
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card${hoveredId === project.id ? ' hovered' : ''}${hoveredId !== null && hoveredId !== project.id ? ' dimmed' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Image Area */}
              <div className="project-card-image">
                <div
                  className="project-card-placeholder"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
                    borderColor: `${project.color}22`,
                  }}
                >
                  <div className="project-card-icon" style={{ color: project.color }}>
                    <div className="project-card-icon-shape" style={{ background: project.color }} />
                  </div>
                  <span className="project-card-label" style={{ color: project.color }}>
                    {project.category.split(' / ')[0]}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="project-card-overlay">
                  <span className="project-card-view">
                    查看详情 <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="project-card-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-category">{project.category}</p>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="projects-cta">
          <a href="#contact" className="btn">
            <span>查看更多项目</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
