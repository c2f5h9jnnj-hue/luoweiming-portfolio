import { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 10;
      const y = (clientY / innerHeight - 0.5) * 10;

      const title = containerRef.current.querySelector('.hero-title');
      if (title) {
        title.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="hero" ref={containerRef}>
      {/* Video Background with Fallback */}
      <div className="hero-bg">
        <div className="hero-bg-overlay" />
        {/* Gradient fallback when no video */}
        <div className="hero-bg-fallback" />
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          {/* User can replace with their own video */}
        </video>
      </div>

      {/* Ambient light effects */}
      <div className="hero-ambient">
        <div className="glow-orb hero-orb-1" />
        <div className="glow-orb hero-orb-2" />
      </div>

      <div className="hero-content container">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          视觉设计师 / AI设计师 / 品牌设计师
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">创造有灵魂的</span>
          <span className="hero-title-line hero-title-accent">
            视觉体验
            <span className="hero-title-cursor">_</span>
          </span>
        </h1>

        <p className="hero-subtitle">
          10+年设计经验 · 专注品牌视觉与三维创意<br />
          用设计驱动品牌增长，以技术探索视觉边界
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>查看作品</span>
          </a>
          <a href="#contact" className="btn">
            <span>联系我</span>
          </a>
        </div>

        <div className="hero-stats">
          {[
            { num: '10+', label: '年经验' },
            { num: '200+', label: '完成项目' },
            { num: '50+', label: '服务品牌' },
          ].map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="hero-stat-num">{stat.num}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>滚动探索</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
