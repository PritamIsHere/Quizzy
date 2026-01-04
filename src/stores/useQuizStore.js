import { create } from "zustand";

export const useQuizStore = create((set) => ({
  currentUser: { name: "", isHost: false },
  roomCode: null,
  roomName: "",
  players: [],
  questions: [],

  // Results tracking
  results: null, // { leaderboard: [], userAnswers: [], totalQuestions: 0 }
  userScore: 0,
  userAnswers: [], // Array of { question, selectedAnswer, correctAnswer, isCorrect }

  setUser: (user) => set({ currentUser: user }),
  setRoomInfo: (code, name) => set({ roomCode: code, roomName: name }),
  addQuestion: (question) =>
    set((state) => ({
      questions: [...state.questions, question],
    })),
  setQuestions: (questions) => set({ questions }),
  setPlayers: (players) => set({ players }),
  addPlayer: (player) =>
    set((state) => ({
      players: [...state.players, player],
    })),
  removePlayer: (playerId) =>
    set((state) => ({
      players: state.players.filter((p) => p.id !== playerId),
    })),

  // Results management
  setResults: (results) => set({ results }),
  setUserScore: (score) => set({ userScore: score }),
  addUserAnswer: (answer) =>
    set((state) => ({
      userAnswers: [...state.userAnswers, answer],
    })),
  resetQuiz: () =>
    set({
      results: null,
      userScore: 0,
      userAnswers: [],
    }),
}));
