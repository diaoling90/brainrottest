export interface QuizQuestion {
  id: number;
  key: string;
  options: QuizOption[];
}

export interface QuizOption {
  key: string;
  points: Record<string, number>;
}

export interface QuizResult {
  key: string;
  emoji: string;
  color: string;
}

export interface QuizData {
  questions: QuizQuestion[];
  results: Record<string, QuizResult>;
}

export interface UserAnswer {
  questionId: number;
  optionIndex: number;
  optionKey: string;
}

export interface QuizScores {
  [resultType: string]: number;
}