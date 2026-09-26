export interface QuizQuestion {
  id: number;
  question: string;
  correctAnswer: boolean;
  explanation: string;
}

export interface WifeSummary {
  name: string;
  order: number;
  fate: 'Divorced' | 'Beheaded' | 'Died' | 'Survived';
  detail: string;
}
