class QuestionsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QuestionsError';
  }
}

export default QuestionsError;
