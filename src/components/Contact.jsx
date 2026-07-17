import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-bg">
        <div className="glow-orb contact-orb-1" />
        <div className="glow-orb contact-orb-2" />
      </div>

      <div className="container contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="section-label">Contact</span>
          <h2 className="contact-title">
            开启合作<span className="contact-title-accent">.</span>
          </h2>
          <p className="contact-desc">
            如果您正在寻找一位能将创意与技术完美结合的视觉设计师，<br />
            欢迎随时联系。期待与您一起创造令人心动的视觉作品。
          </p>

          <div className="contact-info-grid">
            <a href="mailto:630419017@qq.com" className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">邮箱</span>
                <span className="contact-info-value">630419017@qq.com</span>
              </div>
            </a>

            <a href="tel:13425147177" className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">电话</span>
                <span className="contact-info-value">134 2514 7177</span>
              </div>
            </a>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">所在地</span>
                <span className="contact-info-value">广东省汕尾市</span>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <a href="mailto:630419017@qq.com" className="btn btn-primary contact-btn-large">
              <Send size={18} />
              <span>发送邮件</span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <a href="#" className="footer-logo">
              <span className="logo-dot" />
              LUO<span className="logo-thin">WEIMING</span>
            </a>
            <div className="footer-links">
              <a href="#about">关于</a>
              <a href="#projects">项目</a>
              <a href="#skills">能力</a>
              <a href="#contact">联系</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2024 LUOWEIMING. All rights reserved.</span>
            <button className="footer-back-top" onClick={scrollToTop}>
              <ArrowUp size={14} />
              <span>回到顶部</span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
