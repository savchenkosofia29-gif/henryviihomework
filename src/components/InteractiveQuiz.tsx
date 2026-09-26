import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThumbsUp, ThumbsDown, ArrowRight, HelpCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data';

export const InteractiveQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const isRight = selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer;

  const handleSelectAnswer = (answer: boolean) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <section
      id="interactive-quiz-section"
      className="w-full mt-12 pt-8 border-t-2 border-[#e8d5e8]"
    >
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div
            id="quiz-icon-badge"
            className="w-10 h-10 rounded-lg bg-[#f8f0f8] border border-[#d6bcd6] flex items-center justify-center text-[#4a154b]"
          >
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h2
              id="quiz-main-heading"
              className="text-2xl sm:text-3xl font-bold text-[#4a154b] tracking-tight"
            >
              Interactive Knowledge Quiz
            </h2>
            <p className="text-sm text-[#5e1c60] mt-0.5">
              Test your knowledge on Henry VIII and the fates of his queens
            </p>
          </div>
        </div>

        {!isCompleted && (
          <div
            id="quiz-progress-badge"
            className="px-3.5 py-1.5 rounded-full border border-[#d6bcd6] bg-[#fdf9fd] text-[#4a154b] text-sm font-semibold whitespace-nowrap"
          >
            Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}
          </div>
        )}
      </div>

      <div
        id="quiz-card-container"
        className="bg-white border-2 border-[#e0cbe0] rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs"
      >
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key={`question-${currentQuestion.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              id={`quiz-question-box-${currentQuestion.id}`}
              className="space-y-5 sm:space-y-6"
            >
              {/* Question Progress Bar */}
              <div
                id="quiz-progress-track"
                className="w-full bg-[#f4eaf4] h-2 rounded-full overflow-hidden"
              >
                <div
                  id="quiz-progress-fill"
                  className="bg-[#4a154b] h-full transition-all duration-300 ease-out"
                  style={{
                    width: `${((currentIndex + (isAnswered ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <div id="question-header">
                <span
                  id={`question-number-tag-${currentQuestion.id}`}
                  className="inline-block text-xs font-bold uppercase tracking-wider text-[#6b216d] mb-1.5"
                >
                  Question {currentQuestion.id}
                </span>
                <p
                  id={`question-text-${currentQuestion.id}`}
                  className="text-base sm:text-lg md:text-xl font-semibold text-[#4a154b] leading-relaxed"
                >
                  {currentQuestion.question}
                </p>
              </div>

              {/* True / False Buttons */}
              <div
                id={`answer-buttons-group-${currentQuestion.id}`}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2"
              >
                <button
                  type="button"
                  id="btn-option-true"
                  disabled={isAnswered}
                  onClick={() => handleSelectAnswer(true)}
                  className={`min-h-[50px] sm:min-h-[54px] py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl font-bold text-base sm:text-lg border-2 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    !isAnswered
                      ? 'border-[#4a154b] text-[#4a154b] bg-white hover:bg-[#fbf4fb] active:scale-[0.99]'
                      : currentQuestion.correctAnswer === true
                      ? 'border-[#4a154b] bg-[#fbf4fb] text-[#4a154b] ring-2 ring-[#4a154b] font-extrabold shadow-xs'
                      : selectedAnswer === true
                      ? 'border-[#8d2a8f] bg-[#fdf5fd] text-[#8d2a8f] opacity-80'
                      : 'border-[#e0cbe0] text-[#a06da0] bg-white opacity-40 cursor-not-allowed'
                  }`}
                >
                  <span>True</span>
                  {isAnswered && currentQuestion.correctAnswer === true && (
                    <span className="text-xs font-semibold bg-[#4a154b] text-white px-2 py-0.5 rounded-md uppercase tracking-wide">
                      Correct Answer
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  id="btn-option-false"
                  disabled={isAnswered}
                  onClick={() => handleSelectAnswer(false)}
                  className={`min-h-[50px] sm:min-h-[54px] py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl font-bold text-base sm:text-lg border-2 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    !isAnswered
                      ? 'border-[#4a154b] text-[#4a154b] bg-white hover:bg-[#fbf4fb] active:scale-[0.99]'
                      : currentQuestion.correctAnswer === false
                      ? 'border-[#4a154b] bg-[#fbf4fb] text-[#4a154b] ring-2 ring-[#4a154b] font-extrabold shadow-xs'
                      : selectedAnswer === false
                      ? 'border-[#8d2a8f] bg-[#fdf5fd] text-[#8d2a8f] opacity-80'
                      : 'border-[#e0cbe0] text-[#a06da0] bg-white opacity-40 cursor-not-allowed'
                  }`}
                >
                  <span>False</span>
                  {isAnswered && currentQuestion.correctAnswer === false && (
                    <span className="text-xs font-semibold bg-[#4a154b] text-white px-2 py-0.5 rounded-md uppercase tracking-wide">
                      Correct Answer
                    </span>
                  )}
                </button>
              </div>

              {/* Feedback Section when an answer is selected */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    key="feedback-container"
                    id="quiz-feedback-box"
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`mt-5 sm:mt-6 p-4 sm:p-5 md:p-6 rounded-xl border-2 ${
                      isRight
                        ? 'bg-[#faf3fa] border-[#4a154b]'
                        : 'bg-[#fdf7fd] border-[#6b216d]'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Thumbs Icon with spring animation */}
                      <motion.div
                        id="feedback-icon-wrapper"
                        initial={{ scale: 0.5, rotate: isRight ? -12 : 12 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                        className={`p-2.5 sm:p-3 rounded-full flex-shrink-0 text-white ${
                          isRight ? 'bg-[#4a154b]' : 'bg-[#6b216d]'
                        }`}
                      >
                        {isRight ? (
                          <ThumbsUp id="icon-thumbs-up" className="w-6 h-6 sm:w-7 sm:h-7" />
                        ) : (
                          <ThumbsDown id="icon-thumbs-down" className="w-6 h-6 sm:w-7 sm:h-7" />
                        )}
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3
                            id="feedback-title"
                            className="text-xl font-bold text-[#4a154b]"
                          >
                            {isRight ? 'Correct!' : 'Incorrect'}
                          </h3>
                        </div>

                        <p
                          id="feedback-explanation"
                          className="mt-1.5 text-base font-medium text-[#4a154b] leading-relaxed"
                        >
                          {!isRight && (
                            <span className="font-bold block mb-1">
                              Correct Answer: {currentQuestion.correctAnswer ? 'True' : 'False'}
                            </span>
                          )}
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </div>

                    {/* Next Button in bottom right */}
                    <div className="mt-5 flex justify-end">
                      <button
                        type="button"
                        id="btn-next-question"
                        onClick={handleNextQuestion}
                        className="py-3 px-6 rounded-xl bg-[#4a154b] text-white hover:bg-[#370d38] font-semibold text-base transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                      >
                        <span>Next</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Quiz Completed View - only display the score */
            <motion.div
              key="quiz-completion"
              id="quiz-completion-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <div
                id="completion-score-text"
                className="text-3xl sm:text-4xl font-bold text-[#4a154b]"
              >
                Score: {score} / {QUIZ_QUESTIONS.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
