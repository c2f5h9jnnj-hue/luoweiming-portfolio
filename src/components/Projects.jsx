import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const projects = [
  {
    id: 1, title: '日月神 汽车工作灯', category: '电商 / 产品渲染',
    desc: '汽车工作灯产品渲染与电商视觉设计，使用 Keyshot 打造高品质光影表现。',
    tags: ['电商', 'Keyshot', '产品渲染'], color: '#6c5ce7',
  },
  {
    id: 2, title: '太阳灯项目第二版', category: '产品渲染',
    desc: '太阳灯产品渲染方案，通过 Keyshot 精细材质与灯光表现产品质感。',
    tags: ['渲染', 'Keyshot'], color: '#fdcb6e',
  },
  {
    id: 3, title: '摩托车灯-蜂巢大灯', category: '建模 / 渲染',
    desc: '摩托车蜂巢大灯三维建模与渲染，精准还原产品结构与材质细节。',
    tags: ['建模', '渲染'], color: '#00cec9',
  },
  {
    id: 4, title: '雪佛兰大灯', category: '亚马逊 / 汽车车灯',
    desc: '亚马逊汽车车灯产品，雪佛兰大灯的建模渲染与A+页面视觉设计。',
    tags: ['建模', '渲染', 'Keyshot', '汽车'], color: '#fd79a8',
  },
  {
    id: 5, title: '摩托车尾灯、信号灯', category: '亚马逊 / 汽车配件',
    desc: '摩托车尾灯及信号灯产品渲染，为亚马逊电商平台打造专业产品视觉。',
    tags: ['汽车', '建模', '渲染'], color: '#e17055',
  },
  {
    id: 6, title: '汽车尾灯01', category: '产品渲染',
    desc: '汽车尾灯产品渲染展示，突出灯光效果与产品质感。',
    tags: ['渲染', '汽车'], color: '#a29bfe',
  },
  {
    id: 7, title: '汽车太阳灯', category: '产品渲染',
    desc: '汽车太阳灯产品视觉设计，通过渲染表现产品功能与设计美感。',
    tags: ['渲染', '汽车'], color: '#ffeaa7',
  },
  {
    id: 8, title: '摩托车车灯', category: '产品渲染',
    desc: '摩托车车灯产品渲染，多角度展示产品设计与灯光效果。',
    tags: ['渲染', '摩托车'], color: '#55efc4',
  },
  {
    id: 9, title: '汽车车灯01', category: '产品渲染',
    desc: '汽车车灯产品渲染，高品质视觉呈现产品细节与光影。',
    tags: ['渲染', '汽车'], color: '#74b9ff',
  },
  {
    id: 10, title: '清洁器 — 2023作品', category: '产品渲染 / 电商',
    desc: '清洁器产品渲染与电商视觉设计，2023年度精选作品之一。',
    tags: ['2023', '渲染'], color: '#dfe6e9',
  },
  {
    id: 11, title: '拍摄精修类 — 2023作品', category: '摄影 / 精修',
    desc: '2023年度产品拍摄与精修作品合集，涵盖布光方案与色彩校正全流程。',
    tags: ['摄影', '精修'], color: '#fab1a0',
  },
  {
    id: 12, title: '种植床 — 2023作品', category: '产品渲染',
    desc: '种植床产品三维渲染，精准呈现产品结构、材质与使用场景。',
    tags: ['渲染', '建模'], color: '#81ecec',
  },
  {
    id: 13, title: '洗耳机 — 2023作品', category: '产品渲染',
    desc: '洗耳机产品渲染方案，通过精细材质表现产品工业设计之美。',
    tags: ['渲染', '建模'], color: '#a29bfe',
  },
  {
    id: 14, title: '花盆架 — 2023作品', category: '产品渲染 / 家居',
    desc: '花盆架产品渲染，融合家居美学与产品功能的视觉表达。',
    tags: ['渲染', '家居'], color: '#55efc4',
  },
  {
    id: 15, title: '电视柜 — 2023作品', category: '产品渲染 / 家居',
    desc: '电视柜产品三维渲染，展现家具产品的材质纹理与空间搭配。',
    tags: ['渲染', '家居'], color: '#e17055',
  },
  {
    id: 16, title: '便携清洁器 — 2023作品', category: '产品渲染 / 小家电',
    desc: '便携清洁器产品渲染，突出产品便携特性与现代设计语言。',
    tags: ['渲染', '小家电'], color: '#74b9ff',
  },
  {
    id: 17, title: '电视柜02款 — 2023作品', category: '产品渲染 / 家居',
    desc: '电视柜第二款设计方案，不同风格与材质的家具产品渲染。',
    tags: ['渲染', '家居'], color: '#fd79a8',
  },
  {
    id: 18, title: '日常工作拍摄', category: '摄影 / 精修',
    desc: '日常商业摄影与精修作品，涵盖静物摄影与数码产品拍摄。',
    tags: ['静物摄影', '数码产品拍摄'], color: '#ffeaa7',
  },
  {
    id: 19, title: '海报设计', category: '平面 / 版式设计',
    desc: '商业海报设计作品，结合品牌调性与视觉冲击力的版式创作。',
    tags: ['海报', '版式'], color: '#6c5ce7',
  },
  {
    id: 20, title: '2021奔驰系列', category: '电商 / 详情页设计',
    desc: '奔驰系列产品详情页设计，高端汽车配件的电商视觉呈现。',
    tags: ['详情页', '电商'], color: '#00cec9',
  },
];

// Get cover image URL - use local file, first image in work folder
function getCoverUrl(projectId) {
  const base = import.meta.env.BASE_URL;
  return `${base}works/${projectId}/0.jpg`;
}

// Get all images for a project
function getProjectImages(projectId, count = 6) {
  const base = import.meta.env.BASE_URL;
  const imgs = [];
  for (let i = 0; i < count; i++) {
    imgs.push(`${base}works/${projectId}/${i}.jpg`);
  }
  return imgs;
}

// Lightbox Modal
function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>
        <X size={24} />
      </button>
      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        <ChevronLeft size={28} />
      </button>
      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        <ChevronRight size={28} />
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`作品图片 ${currentIndex + 1}`}
          className="lightbox-img"
        />
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <div className="lightbox-thumbs">
        {images.map((img, i) => (
          <button
            key={i}
            className={`lightbox-thumb${i === currentIndex ? ' active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              const diff = i - currentIndex;
              if (diff > 0) for (let j = 0; j < diff; j++) onNext();
              else for (let j = 0; j < -diff; j++) onPrev();
            }}
          >
            <img src={img} alt={`缩略图 ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, projectId: null, index: 0 });

  const openLightbox = useCallback((projectId, index = 0) => {
    setLightbox({ open: true, projectId, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, projectId: null, index: 0 });
  }, []);

  const lightboxImages = lightbox.projectId
    ? getProjectImages(lightbox.projectId)
    : [];

  const handlePrev = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index > 0 ? prev.index - 1 : lightboxImages.length - 1,
    }));
  }, [lightboxImages.length]);

  const handleNext = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index < lightboxImages.length - 1 ? prev.index + 1 : 0,
    }));
  }, [lightboxImages.length]);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">精选项目</h2>
          <p className="section-desc">
            20+个精选作品，涵盖产品渲染、电商视觉、摄影精修与品牌设计，
            点击卡片即可浏览完整作品集。
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card${hoveredId === project.id ? ' hovered' : ''}${hoveredId !== null && hoveredId !== project.id ? ' dimmed' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(project.id, 0)}
            >
              {/* Card Image Area */}
              <div className="project-card-image">
                <img
                  src={getCoverUrl(project.id)}
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
                    <ZoomIn size={18} />
                    查看作品
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

        <div className="projects-cta">
          <a href="https://www.zcool.com.cn/u/16312940" target="_blank" rel="noopener noreferrer" className="btn">
            <span>在站酷查看全部作品</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
