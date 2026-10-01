import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

// Pages
import Home from './pages/Home';
import Menu1Platter from './pages/menu/Menu1Platter';
import Menu2Soup from './pages/menu/Menu2Soup';
import Menu3Heart from './pages/menu/Menu3Heart';
import Menu4Vessels from './pages/menu/Menu4Vessels';
import Menu5Drinks from './pages/menu/Menu5Drinks';
import Materials from './pages/Materials';
import Heart from './pages/Heart';
import Blood from './pages/Blood';
import Vessels from './pages/Vessels';
import Circulation from './pages/Circulation';
import Explore from './pages/Explore';
import Quiz from './pages/Quiz';
import Access from './pages/Access';
import SpecialArea from './pages/SpecialArea';
import OperatorDashboard from './pages/OperatorDashboard';
import About from './pages/About';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// 404 Not Found Page
function NotFound() {
  return (
    <div className="container" style={{ padding: '80px 16px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <div style={{ fontSize: '72px', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '12px' }}>
          404
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
          Halaman Tidak Ditemukan
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--color-secondary-text)', maxWidth: '440px', margin: '0 auto 24px' }}>
          Jalur sirkulasi halaman yang Anda tuju tidak ditemukan dalam sistem peredaran darah CIRCULA.
        </p>
        <Link to="/" className="btn-primary">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <ScrollToTop />
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 5 Menu Tematik Kuliner Biologi (Sistem Peredaran Darah) */}
          <Route path="/menu/1" element={<Menu1Platter />} />
          <Route path="/menu/2" element={<Menu2Soup />} />
          <Route path="/menu/3" element={<Menu3Heart />} />
          <Route path="/menu/4" element={<Menu4Vessels />} />
          <Route path="/menu/5" element={<Menu5Drinks />} />

          {/* Direct Compatibility Aliases */}
          <Route path="/material" element={<Menu1Platter />} />
          <Route path="/heart" element={<Menu3Heart />} />
          <Route path="/blood" element={<Menu2Soup />} />
          <Route path="/vessels" element={<Menu4Vessels />} />
          <Route path="/circulation" element={<Menu5Drinks />} />
          <Route path="/special-area" element={<Menu5Drinks />} />

          <Route path="/explore" element={<Explore />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/access" element={<Access />} />
          <Route path="/operator" element={<OperatorDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}

