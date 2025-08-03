'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Brain } from 'lucide-react';
import { UserAnswer } from '@/types/quiz';
import { calculateResult } from '@/utils/quiz';
import quizData from '@/data/quiz.json';

interface QuizClientProps {
  locale: string;
}

export default function QuizClient({ locale }: QuizClientProps) {
  const t = useTranslations('Quiz');
  const tQuestions = useTranslations('Questions');
  const router = useRouter();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalQuestions = quizData.questions.length;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const canProceed = selectedOption !== null;

  const handleOptionSelect = useCallback((optionIndex: number) => {
    setSelectedOption(optionIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (!canProceed) return;

    const newAnswer: UserAnswer = {
      questionId: quizData.questions[currentQuestion].id,
      optionIndex: selectedOption!,
      optionKey: quizData.questions[currentQuestion].options[selectedOption!].key,
    };

    const updatedAnswers = [...answers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      a => a.questionId === newAnswer.questionId
    );

    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    setAnswers(updatedAnswers);

    if (isLastQuestion) {
      handleSubmit(updatedAnswers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  }, [canProceed, selectedOption, currentQuestion, answers, isLastQuestion]);

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Restore previous answer if exists
      const previousAnswer = answers.find(
        a => a.questionId === quizData.questions[currentQuestion - 1].id
      );
      setSelectedOption(previousAnswer?.optionIndex ?? null);
    }
  }, [currentQuestion, answers]);

  const handleSubmit = useCallback(async (finalAnswers: UserAnswer[]) => {
    setIsSubmitting(true);
    
    try {
      const resultType = calculateResult(finalAnswers);
      
      // Store answers in localStorage for potential sharing
      localStorage.setItem('brainrot-quiz-answers', JSON.stringify(finalAnswers));
      localStorage.setItem('brainrot-quiz-result', resultType);
      
      // Navigate to result page
      router.push(`/${locale}/result/${resultType}`);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      setIsSubmitting(false);
    }
  }, [locale, router]);

  const question = quizData.questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">
            {t('progress', { current: currentQuestion + 1, total: totalQuestions })}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          {tQuestions(`${question.key}.question`)}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                selectedOption === index
                  ? 'border-purple-500 bg-purple-500/20 transform scale-[1.02]'
                  : 'border-gray-600 hover:border-gray-500 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === index ? 'border-purple-500' : 'border-gray-500'
                }`}>
                  {selectedOption === index && (
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  )}
                </div>
                <span className="text-lg">
                  {tQuestions(`${question.key}.options.${option.key}`)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
            currentQuestion === 0
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-white hover:bg-white/10'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>{t('previousButton')}</span>
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed || isSubmitting}
          className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all ${
            canProceed && !isSubmitting
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>{isLastQuestion ? t('finishButton') : t('nextButton')}</span>
              {isLastQuestion ? (
                <Brain className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
}