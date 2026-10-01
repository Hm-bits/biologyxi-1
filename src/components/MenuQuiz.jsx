import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award, Sparkles, Send } from 'lucide-react';

export default function MenuQuiz({ 
  menuTitle = 'Menu Materi', 
  menuBadge = 'Mini Quiz Pemahaman',
  questions = [] 
}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (questionIndex, optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount += 1;
      }
    });
    return correctCount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(selectedAnswers).length < questions.length) {
      alert('Harap jawab semua 3 pertanyaan kuis sebelum memeriksa jawaban ya gng!');
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const score = isSubmitted ? calculateScore() : 0;

  // Grade evaluations strictly matching user requirement:
  // 3: "haker gng"
  // 2: "not bad gng"
  // 1: "try again gng"
  // 0: "GNG 💔 🥀"
  const getGradeInfo = (scoreVal) => {
    if (scoreVal === 3) {
      return {
        title: 'haker gng',
        badge: 'SKOR 3/3 SEMPURNA',
        color: '#059669',
        bgColor: '#ECFDF5',
        borderColor: '#A7F3D0',
        subtitle: 'Gokil! 3/3 Soal Terjawab Sempurna! Pemahaman biologimu di menu ini setara hacker sistem vaskular! 🔥💻',
        emoji: '🏆'
      };
    }
    if (scoreVal === 2) {
      return {
        title: 'not bad gng',
        badge: 'SKOR 2/3 MANTAP',
        color: '#2563EB',
        bgColor: '#EFF6FF',
        borderColor: '#BFDBFE',
        subtitle: 'Mantap! 2/3 Soal Terjawab Benar. Dikit lagi sempurna, tinggal asah 1 konsep materi lagi! 👍',
        emoji: '⚡'
      };
    }
    if (scoreVal === 1) {
      return {
        title: 'try again gng',
        badge: 'SKOR 1/3 COBA LAGI',
        color: '#D97706',
        bgColor: '#FFFBEB',
        borderColor: '#FDE68A',
        subtitle: 'Baru 1/3 soal benar. Jangan menyerah, baca kembali rangkuman materi di atas lalu coba lagi! 🔄',
        emoji: '🧠'
      };
    }
    return {
      title: 'GNG 💔 🥀',
      badge: 'SKOR 0/3 JANTUNG PATAH',
      color: '#DC2626',
      bgColor: '#FEF2F2',
      borderColor: '#FECACA',
      subtitle: 'Yah 0/3... Jantungmu patah gng 💔🥀. Jangan patah semangat, pelajari kembali diagram di atas dan buktikan kamu bisa!',
      emoji: '🥀'
    };
  };

  const gradeInfo = getGradeInfo(score);

  return (
    <div className="med-card" style={{ padding: '36px 32px', marginBottom: '48px', border: '2px solid var(--color-border)' }}>
      {/* Quiz Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
        <div>
          <span className="badge-pill badge-red" style={{ marginBottom: '8px' }}>
            {menuBadge}
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-dark)', margin: 0 }}>
            Uji Pemahaman: {menuTitle}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)', marginTop: '4px' }}>
            Jawab 3 pertanyaan interaktif di bawah ini untuk menguji penguasaan materimu:
          </p>
        </div>

        {isSubmitted && (
          <button
            onClick={handleReset}
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', height: '40px', fontSize: '13px' }}
          >
            <RotateCcw size={14} />
            <span>Ulangi Kuis</span>
          </button>
        )}
      </div>

      {/* Result Rating Banner (Appears after submission) */}
      {isSubmitted && (
        <div style={{
          backgroundColor: gradeInfo.bgColor,
          border: `2px solid ${gradeInfo.borderColor}`,
          borderRadius: '18px',
          padding: '24px',
          marginBottom: '28px',
          textAlign: 'center',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '4px' }}>
            {gradeInfo.emoji}
          </div>
          <span className="badge-pill" style={{
            backgroundColor: '#FFFFFF',
            color: gradeInfo.color,
            borderColor: gradeInfo.borderColor,
            fontSize: '11px',
            fontWeight: 800,
            marginBottom: '8px'
          }}>
            {gradeInfo.badge}
          </span>
          <h3 style={{
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: 900,
            color: gradeInfo.color,
            margin: '6px 0 8px',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }}>
            "{gradeInfo.title}"
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--color-dark)', maxWidth: '580px', margin: '0 auto 16px', lineHeight: 1.6, fontWeight: 600 }}>
            {gradeInfo.subtitle}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: gradeInfo.color }}>
              Skor Akhir: {score} dari {questions.length} Soal Benar ({Math.round((score / questions.length) * 100)}%)
            </span>
          </div>
        </div>
      )}

      {/* Questions Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '28px' }}>
          {questions.map((q, qIdx) => {
            const selectedOpt = selectedAnswers[qIdx];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = isSubmitted && selectedOpt === q.correctIndex;
            const isWrong = isSubmitted && isAnswered && selectedOpt !== q.correctIndex;

            return (
              <div 
                key={q.id || qIdx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '18px',
                  border: `1.5px solid ${isSubmitted ? (isCorrect ? '#86EFAC' : '#FECACA') : 'var(--color-border)'}`,
                  padding: '24px'
                }}
              >
                {/* Question Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    backgroundColor: isSubmitted 
                      ? (isCorrect ? 'var(--color-success)' : '#DC2626') 
                      : 'var(--color-primary)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    {qIdx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-dark)', margin: 0, lineHeight: 1.5 }}>
                      {q.question}
                    </h4>
                  </div>
                </div>

                {/* Option Choices */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    let optBg = '#FFFFFF';
                    let optBorder = 'var(--color-border)';
                    let optTextColor = 'var(--color-dark)';

                    if (isSubmitted) {
                      if (optIdx === q.correctIndex) {
                        optBg = '#DCFCE7';
                        optBorder = '#22C55E';
                        optTextColor = '#15803D';
                      } else if (isSelected && optIdx !== q.correctIndex) {
                        optBg = '#FEE2E2';
                        optBorder = '#EF4444';
                        optTextColor = '#B91C1C';
                      }
                    } else if (isSelected) {
                      optBg = 'var(--color-soft-red)';
                      optBorder = 'var(--color-primary)';
                      optTextColor = 'var(--color-primary)';
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(qIdx, optIdx)}
                        style={{
                          backgroundColor: optBg,
                          border: `1.5px solid ${optBorder}`,
                          borderRadius: '12px',
                          padding: '12px 16px',
                          cursor: isSubmitted ? 'default' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? 'var(--color-primary)' : '#CBD5E1'}`,
                          backgroundColor: isSelected ? 'var(--color-primary)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFFFFF' }} />}
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: isSelected ? 700 : 500, color: optTextColor, lineHeight: 1.5 }}>
                          {opt}
                        </span>
                        {isSubmitted && optIdx === q.correctIndex && (
                          <CheckCircle2 size={16} color="#15803D" style={{ marginLeft: 'auto', flexShrink: 0 }} />
                        )}
                        {isSubmitted && isSelected && optIdx !== q.correctIndex && (
                          <XCircle size={16} color="#B91C1C" style={{ marginLeft: 'auto', flexShrink: 0 }} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box (Visible after submit) */}
                {isSubmitted && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: isCorrect ? '#F0FDF4' : '#FFFBEB',
                    border: `1px solid ${isCorrect ? '#BBF7D0' : '#FDE68A'}`,
                    fontSize: '13px',
                    color: isCorrect ? '#166534' : '#92400E',
                    lineHeight: 1.5,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px'
                  }}>
                    <HelpCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Pembahasan:</strong> {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Actions */}
        {!isSubmitted ? (
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className="btn-primary"
              style={{
                height: '48px',
                padding: '0 32px',
                fontSize: '15px',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Send size={16} />
              <span>Periksa Jawaban Kuis</span>
            </button>
            <div style={{ fontSize: '12px', color: 'var(--color-secondary-text)', marginTop: '8px' }}>
              {Object.keys(selectedAnswers).length} dari {questions.length} soal telah dipilih
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
              style={{
                height: '46px',
                padding: '0 28px',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <RotateCcw size={16} />
              <span>Ulangi Kuis (Coba Lagi)</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

