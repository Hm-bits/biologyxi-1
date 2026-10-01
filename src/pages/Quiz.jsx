import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  ArrowLeft 
} from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { QUIZ_QUESTIONS } from '../data/quizData';
import confetti from 'canvas-confetti';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionKey, setSelectedOptionKey] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // { qId, selectedKey, isCorrect }
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const progressPercent = Math.round(((currentIndex) / QUIZ_QUESTIONS.length) * 100);

  const handleSelectOption = (key) => {
    if (isAnswerSubmitted) return; // Prevent changing after submission
    setSelectedOptionKey(key);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionKey || isAnswerSubmitted) return;

    const isCorrect = selectedOptionKey === currentQ.correctAnswer;
    setIsAnswerSubmitted(true);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        selectedKey: selectedOptionKey,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionKey(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOptionKey(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setIsQuizCompleted(false);
  };

  return (
    <div style={{ padding: '48px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-secondary-text)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-secondary-text)' }}>Beranda</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Kuis Biologi</span>
        </div>

        {/* 1. QUIZ COMPLETED VIEW */}
        {isQuizCompleted ? (
          <div className="med-card" style={{ padding: '48px 32px', textAlign: 'center' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '24px',
              backgroundColor: 'var(--color-soft-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              margin: '0 auto 20px'
            }}>
              <Award size={36} />
            </div>

            <span className="badge-pill badge-green" style={{ marginBottom: '12px' }}>
              Kuis Selesai!
            </span>

            <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
              Hasil Evaluasi Pemahaman
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--color-secondary-text)', marginBottom: '32px' }}>
              Anda telah menyelesaikan seluruh {QUIZ_QUESTIONS.length} pertanyaan seputar Sistem Peredaran Darah Manusia.
            </p>

            {/* Score Card Banner */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1.5px solid var(--color-border)',
              padding: '28px',
              maxWidth: '460px',
              margin: '0 auto 32px'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary-text)', marginBottom: '4px' }}>
                Total Skor Anda
              </div>
              <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>
                {Math.round((score / QUIZ_QUESTIONS.length) * 100)}
                <span style={{ fontSize: '20px', color: 'var(--color-secondary-text)', fontWeight: 500 }}> / 100</span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-dark)', fontWeight: 600, marginTop: '8px' }}>
                {score} dari {QUIZ_QUESTIONS.length} Soal Dijawab Benar
              </div>

              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <span className="badge-pill badge-red">
                  {score >= 7 ? '🌟 Luar Biasa: Ahli Kardiovaskular Muda' : score >= 5 ? '👍 Bagus: Pemahaman Fondasi Kuat' : '📖 Perlu Membaca Kembali Materi Dasar'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={handleRestartQuiz}
                className="btn-primary"
                style={{ padding: '0 24px' }}
              >
                <RotateCcw size={16} />
                <span>Ulangi Kuis</span>
              </button>
              <Link to="/material" className="btn-secondary" style={{ padding: '0 24px' }}>
                <span>Pelajari Kembali Materi</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          /* 2. ACTIVE QUIZ QUESTION VIEW */
          <div className="med-card" style={{ padding: '36px 32px' }}>
            
            {/* Top Status & Progress Bar */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="badge-pill badge-red">
                  Pertanyaan {currentIndex + 1} dari {QUIZ_QUESTIONS.length}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-secondary-text)' }}>
                  Skor Sementara: {score}
                </span>
              </div>

              {/* Clean Progress track */}
              <div style={{ width: '100%', height: '8px', backgroundColor: '#F1F5F9', borderRadius: '4px', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    height: '100%', 
                    width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`, 
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }} 
                />
              </div>
            </div>

            {/* Question Text */}
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-dark)', lineHeight: 1.4, marginBottom: '24px' }}>
              {currentQ.question}
            </h2>

            {/* Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionKey === opt.key;
                const isCorrect = opt.key === currentQ.correctAnswer;
                
                let borderColor = 'var(--color-border)';
                let bgColor = '#FFFFFF';
                let textColor = 'var(--color-dark)';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    borderColor = 'var(--color-success)';
                    bgColor = 'var(--color-success-bg)';
                    textColor = '#166534';
                  } else if (isSelected && !isCorrect) {
                    borderColor = 'var(--color-primary)';
                    bgColor = 'var(--color-soft-red)';
                    textColor = 'var(--color-primary)';
                  }
                } else if (isSelected) {
                  borderColor = 'var(--color-primary)';
                  bgColor = 'var(--color-soft-red)';
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    disabled={isAnswerSubmitted}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      border: `2px solid ${borderColor}`,
                      backgroundColor: bgColor,
                      color: textColor,
                      textAlign: 'left',
                      cursor: isAnswerSubmitted ? 'default' : 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: isSelected ? 'var(--color-primary)' : '#F1F5F9',
                      color: isSelected ? '#FFFFFF' : 'var(--color-dark)',
                      fontWeight: 700,
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {opt.key}
                    </span>

                    <span style={{ fontSize: '15px', fontWeight: 600, flex: 1 }}>
                      {opt.text}
                    </span>

                    {/* Feedback Icons on submitted */}
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0 }} />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Feedback Explanation Box */}
            {isAnswerSubmitted && (
              <div style={{
                backgroundColor: selectedOptionKey === currentQ.correctAnswer ? 'var(--color-success-bg)' : 'var(--color-soft-red)',
                border: `1.5px solid ${selectedOptionKey === currentQ.correctAnswer ? '#86EFAC' : 'var(--color-soft-red-border)'}`,
                borderRadius: '14px',
                padding: '18px 20px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  {selectedOptionKey === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 size={18} color="var(--color-success)" />
                      <span style={{ fontWeight: 800, fontSize: '15px', color: '#166534' }}>
                        Jawaban Benar!
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle size={18} color="var(--color-primary)" />
                      <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--color-primary)' }}>
                        Belum tepat! Jawaban benar adalah opsi ({currentQ.correctAnswer}).
                      </span>
                    </>
                  )}
                </div>

                <p style={{ fontSize: '13px', color: 'var(--color-dark)', lineHeight: 1.6, margin: 0 }}>
                  <strong>Penjelasan Ilmiah:</strong> {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Action Bar */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOptionKey}
                  className="btn-primary"
                  style={{
                    padding: '0 24px',
                    opacity: selectedOptionKey ? 1 : 0.5,
                    cursor: selectedOptionKey ? 'pointer' : 'not-allowed'
                  }}
                >
                  <span>Kirim Jawaban</span>
                  <CheckCircle2 size={16} />
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="btn-primary"
                  style={{ padding: '0 24px' }}
                >
                  <span>{currentIndex + 1 < QUIZ_QUESTIONS.length ? 'Pertanyaan Berikutnya' : 'Lihat Hasil Akhir'}</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

