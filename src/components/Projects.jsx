import { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '日月神 汽车工作灯',
    category: '电商 / 产品渲染',
    desc: '汽车工作灯产品渲染与电商视觉设计，使用 Keyshot 打造高品质光影表现。',
    tags: ['电商', 'Keyshot', '产品渲染'],
    color: '#6c5ce7',
    cover: 'https://img.zcool.cn/community/6943b5100e7d1mn8y8jx1g8310.png',
    link: 'https://www.zcool.com.cn/work/ZNzI5MzUzMjQ=.html',
  },
  {
    id: 2,
    title: '太阳灯项目第二版',
    category: '产品渲染',
    desc: '太阳灯产品渲染方案，通过 Keyshot 精细材质与灯光表现产品质感。',
    tags: ['渲染', 'Keyshot'],
    color: '#fdcb6e',
    cover: 'https://img.zcool.cn/community/68db3ff1e511374s46rmjf2090.png',
    link: 'https://www.zcool.com.cn/work/ZNzI1OTczNzI=.html',
  },
  {
    id: 3,
    title: '摩托车灯-蜂巢大灯',
    category: '建模 / 渲染',
    desc: '摩托车蜂巢大灯三维建模与渲染，精准还原产品结构与材质细节。',
    tags: ['建模', '渲染'],
    color: '#00cec9',
    cover: 'https://img.zcool.cn/community/68835dab7dbfe6i9kj3uju4716.png',
    link: 'https://www.zcool.com.cn/work/ZNzIyOTM5MzY=.html',
  },
  {
    id: 4,
    title: '雪佛兰大灯',
    category: '亚马逊 / 汽车车灯',
    desc: '亚马逊汽车车灯产品，雪佛兰大灯的建模渲染与A+页面视觉设计。',
    tags: ['建模', '渲染', 'Keyshot', '汽车'],
    color: '#fd79a8',
    cover: 'https://img.zcool.cn/community/68835d1282343pwqxvpw0i2114.png',
    link: 'https://www.zcool.com.cn/work/ZNzIyOTM5MTY=.html',
  },
  {
    id: 5,
    title: '摩托车尾灯、信号灯',
    category: '亚马逊 / 汽车配件',
    desc: '摩托车尾灯及信号灯产品渲染，为亚马逊电商平台打造专业产品视觉。',
    tags: ['汽车', '建模', '渲染'],
    color: '#e17055',
    cover: 'https://img.zcool.cn/community/6882e2010f396xfzop5wga3402.png',
    link: 'https://www.zcool.com.cn/work/ZNzIyOTAyODA=.html',
  },
  {
    id: 6,
    title: '汽车尾灯01',
    category: '产品渲染',
    desc: '汽车尾灯产品渲染展示，突出灯光效果与产品质感。',
    tags: ['渲染', '汽车'],
    color: '#a29bfe',
    cover: 'https://img.zcool.cn/community/6882e47287a15eeiyg51n56824.png',
    link: 'https://www.zcool.com.cn/work/ZNzEzMzA5MjA=.html',
  },
  {
    id: 7,
    title: '汽车太阳灯',
    category: '产品渲染',
    desc: '汽车太阳灯产品视觉设计，通过渲染表现产品功能与设计美感。',
    tags: ['渲染', '汽车'],
    color: '#ffeaa7',
    cover: 'https://img.zcool.cn/community/6882e4c8955e41mykaplbb8240.png',
    link: 'https://www.zcool.com.cn/work/ZNzEzMzA5MTI=.html',
  },
  {
    id: 8,
    title: '摩托车车灯',
    category: '产品渲染',
    desc: '摩托车车灯产品渲染，多角度展示产品设计与灯光效果。',
    tags: ['渲染', '摩托车'],
    color: '#55efc4',
    cover: 'https://img.zcool.cn/community/67a494477de942ykm6jr524338.png',
    link: 'https://www.zcool.com.cn/work/ZNzEzMzA5MDA=.html',
  },
  {
    id: 9,
    title: '汽车车灯01',
    category: '产品渲染',
    desc: '汽车车灯产品渲染，高品质视觉呈现产品细节与光影。',
    tags: ['渲染', '汽车'],
    color: '#74b9ff',
    cover: 'https://img.zcool.cn/community/67a4917ae089a0m56ulexo2712.png',
    link: 'https://www.zcool.com.cn/work/ZNzEzMzA4NTI=.html',
  },
  {
    id: 10,
    title: '清洁器 — 2023作品',
    category: '产品渲染 / 电商',
    desc: '清洁器产品渲染与电商视觉设计，2023年度精选作品之一。',
    tags: ['2023', '渲染'],
    color: '#dfe6e9',
    cover: 'https://img.zcool.cn/community/031jam95lachdph6cy4atnu3738.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU4NzI=.html',
  },
  {
    id: 11,
    title: '拍摄精修类 — 2023作品',
    category: '摄影 / 精修',
    desc: '2023年度产品拍摄与精修作品合集，涵盖布光方案与色彩校正全流程。',
    tags: ['摄影', '精修'],
    color: '#fab1a0',
    cover: 'https://img.zcool.cn/community/031cgikibtpqdtzfz2ffqlz3137.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU5MTI=.html',
  },
  {
    id: 12,
    title: '种植床 — 2023作品',
    category: '产品渲染',
    desc: '种植床产品三维渲染，精准呈现产品结构、材质与使用场景。',
    tags: ['渲染', '建模'],
    color: '#81ecec',
    cover: 'https://img.zcool.cn/community/031kdlp8jvjdhszvpaysyjt3838.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU4OTI=.html',
  },
  {
    id: 13,
    title: '洗耳机 — 2023作品',
    category: '产品渲染',
    desc: '洗耳机产品渲染方案，通过精细材质表现产品工业设计之美。',
    tags: ['渲染', '建模'],
    color: '#a29bfe',
    cover: 'https://img.zcool.cn/community/031bsjser0n0w4yqqq2ies43633.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU4NDQ=.html',
  },
  {
    id: 14,
    title: '花盆架 — 2023作品',
    category: '产品渲染 / 家居',
    desc: '花盆架产品渲染，融合家居美学与产品功能的视觉表达。',
    tags: ['渲染', '家居'],
    color: '#55efc4',
    cover: 'https://img.zcool.cn/community/031rytjrkcjbuccw1kt4dwq3438.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU4MjQ=.html',
  },
  {
    id: 15,
    title: '电视柜 — 2023作品',
    category: '产品渲染 / 家居',
    desc: '电视柜产品三维渲染，展现家具产品的材质纹理与空间搭配。',
    tags: ['渲染', '家居'],
    color: '#e17055',
    cover: 'https://img.zcool.cn/community/031jq56mtbvyxvd7u37aima3238.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU4MzI=.html',
  },
  {
    id: 16,
    title: '便携清洁器 — 2023作品',
    category: '产品渲染 / 小家电',
    desc: '便携清洁器产品渲染，突出产品便携特性与现代设计语言。',
    tags: ['渲染', '小家电'],
    color: '#74b9ff',
    cover: 'https://img.zcool.cn/community/031clefqr3gvexfjdegs4be3538.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU4NjQ=.html',
  },
  {
    id: 17,
    title: '电视柜02款 — 2023作品',
    category: '产品渲染 / 家居',
    desc: '电视柜第二款设计方案，不同风格与材质的家具产品渲染。',
    tags: ['渲染', '家居'],
    color: '#fd79a8',
    cover: 'https://img.zcool.cn/community/031in3tvlaqq2l30ldwoc4a3138.png',
    link: 'https://www.zcool.com.cn/work/ZNjY5MjU4NDA=.html',
  },
  {
    id: 18,
    title: '日常工作拍摄',
    category: '摄影 / 精修',
    desc: '日常商业摄影与精修作品，涵盖静物摄影与数码产品拍摄。',
    tags: ['静物摄影', '数码产品拍摄'],
    color: '#ffeaa7',
    cover: 'https://img.zcool.cn/community/031rwnqm3tgjlhxosgixiao3538.png',
    link: 'https://www.zcool.com.cn/work/ZNjI1NjcyNDg=.html',
  },
  {
    id: 19,
    title: '海报设计',
    category: '平面 / 版式设计',
    desc: '商业海报设计作品，结合品牌调性与视觉冲击力的版式创作。',
    tags: ['海报', '版式'],
    color: '#6c5ce7',
    cover: 'https://img.zcool.cn/community/014b99622a2aa011013f785b97168f.jpg',
    link: 'https://www.zcool.com.cn/work/ZNTg0NzAzMDA=.html',
  },
  {
    id: 20,
    title: '2021奔驰系列',
    category: '电商 / 详情页设计',
    desc: '奔驰系列产品详情页设计，高端汽车配件的电商视觉呈现。',
    tags: ['详情页', '电商'],
    color: '#00cec9',
    cover: 'https://img.zcool.cn/community/01214c61c3e6da11013f01cdbabfa7.jpg',
    link: 'https://www.zcool.com.cn/work/ZNTcxMDkwNDQ=.html',
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
            20+个精选作品，涵盖产品渲染、电商视觉、摄影精修与品牌设计，
            每个项目都是对视觉语言的深度探索。
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card${hoveredId === project.id ? ' hovered' : ''}${hoveredId !== null && hoveredId !== project.id ? ' dimmed' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Image Area */}
              <div className="project-card-image">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="project-card-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="project-card-fallback"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
                    borderColor: `${project.color}22`,
                    display: 'none',
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
            </a>
          ))}
        </div>

        {/* View all CTA */}
        <div className="projects-cta">
          <a href="https://www.zcool.com.cn/u/16312940" target="_blank" rel="noopener noreferrer" className="btn">
            <span>在站酷查看全部作品</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
