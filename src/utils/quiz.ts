import { UserAnswer, QuizScores } from '@/types/quiz';
import quizData from '@/data/quiz.json';

export function calculateResult(answers: UserAnswer[]): string {
  const scores: QuizScores = {};
  
  // Initialize scores
  Object.keys(quizData.results).forEach(resultType => {
    scores[resultType] = 0;
  });
  
  // Calculate scores based on answers
  answers.forEach(answer => {
    const question = quizData.questions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options[answer.optionIndex];
      if (option) {
        Object.entries(option.points).forEach(([resultType, points]) => {
          scores[resultType] = (scores[resultType] || 0) + points;
        });
      }
    }
  });
  
  // Find the result type with the highest score
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type] === maxScore);
  
  return resultType || 'chaotic';
}

export function getResultData(resultType: string) {
  return quizData.results[resultType as keyof typeof quizData.results];
}

export function generateShareText(resultType: string, locale: string): string {
  const emoji = quizData.results[resultType as keyof typeof quizData.results]?.emoji || '🧠';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  if (locale === 'zh') {
    return `我做了脑腐测试，结果是：${emoji} ${resultType}型脑腐！\n\n来看看你是哪种类型：${baseUrl}/${locale}\n\n#脑腐测试 #人格测试`;
  } else {
    return `I took the Brainrot Test and got: ${emoji} ${resultType} Brainrot!\n\nTake the test and find your type: ${baseUrl}/${locale}\n\n#BrainrotTest #PersonalityTest`;
  }
}