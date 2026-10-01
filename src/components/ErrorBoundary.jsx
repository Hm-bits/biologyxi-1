import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container" style={{ padding: '60px 16px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="med-card" style={{ maxWidth: '520px', padding: '36px 28px', border: '1.5px solid #FECACA', backgroundColor: '#FEF2F2' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#FEE2E2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              color: '#DC2626'
            }}>
              <AlertTriangle size={28} />
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#991B1B', marginBottom: '8px' }}>
              Gagal Memuat Halaman Materi
            </h2>
            <p style={{ fontSize: '14px', color: '#7F1D1D', marginBottom: '20px', lineHeight: 1.6 }}>
              {this.state.error?.message || 'Terjadi kendala saat merender komponen visual.'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <RefreshCw size={15} />
                <span>Muat Ulang Halaman</span>
              </button>
              <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Home size={15} />
                <span>Ke Beranda</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
