import React from 'react';
import { Play, Sparkles, Clock, ExternalLink } from 'lucide-react';

export default function VideoPlayer({ 
  videoId, 
  title, 
  duration, 
  whyFit,
  videoUrl 
}) {
  if (!videoId) return null;

  return (
    <div className="med-card" style={{
      backgroundColor: '#FFFFFF',
      border: '1.5px solid var(--color-border)',
      borderRadius: '20px',
      padding: '24px',
      marginBottom: '32px',
      boxShadow: 'var(--shadow-md)'
    }}>
      {/* Video Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge-pill badge-red" style={{ fontSize: '11px' }}>
              <Play size={11} fill="var(--color-primary)" />
              Video Animasi YouTube Langsung
            </span>
            {duration && (
              <span style={{ fontSize: '12px', color: 'var(--color-secondary-text)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> {duration}
              </span>
            )}
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
            {title}
          </h3>
        </div>

        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '12px',
              color: 'var(--color-secondary-text)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
              backgroundColor: '#F8FAFC'
            }}
          >
            <span>Buka di YouTube</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>

      {/* 16:9 Responsive YouTube Iframe Embed */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#000000',
        marginBottom: '16px'
      }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      </div>

      {/* Why Fit / Educational Focus */}
      {whyFit && (
        <div style={{
          backgroundColor: '#F8FAFC',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid var(--color-border)',
          fontSize: '13px',
          color: 'var(--color-dark)',
          lineHeight: 1.5,
          marginBottom: '12px'
        }}>
          <strong style={{ color: 'var(--color-primary)' }}>🎯 Fokus Animasi:</strong> {whyFit}
        </div>
      )}

      {/* Presentation Speaker Tip */}
      <div style={{
        backgroundColor: 'var(--color-soft-red)',
        borderRadius: '12px',
        padding: '10px 14px',
        border: '1px solid var(--color-soft-red-border)',
        fontSize: '12px',
        color: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px'
      }}>
        <Sparkles size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>💡 Tips Presentasi Kelompok:</strong> Putar video animasi berdurasi 20–40 detik saja tepat saat beralih/membuka menu ini sebagai pembuka menarik sebelum kelompok menjelaskan materi detail di bawah!
        </div>
      </div>
    </div>
  );
}
