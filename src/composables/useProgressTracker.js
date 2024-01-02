import { useHistoryTracker } from "@/composables/useHistoryTracker";

const { history } = useHistoryTracker();

class RandomModeProgressTracker {
    constructor(questionBank, currentQuestionNumber) {
        this.questionBank = questionBank;
        this.currentQuestionNumber = currentQuestionNumber;
        if (this.currentQuestionNumber.value === undefined) {
            this.currentQuestionNumber.value = Math.floor(
                Math.random() * this.questionBank.length
            );
        }
    }
    setQuestion(q) {
        if (q >= 0 && q < this.questionBank.length) {
            this.currentQuestionNumber = q;
            return true;
        }
        return false;
    }
    nextQuestion() {
        let k = Math.floor(Math.random() * this.questionBank.length);
        const draws = new Set([])
        while (history.indexOf(k) >= 0) {
            if (draws.size === this.questionBank.length) return false
            k = Math.floor(Math.random() * this.questionBank.length);
            draws.add(k)
        }
        this.currentQuestionNumber = k;
        return true
    }
}

class OrderedModeProgressTracker {
    constructor(questionBank, currentQuestionNumber) {
        this.questionBank = questionBank;
        this.currentQuestionNumber = currentQuestionNumber;
        if (!this.currentQuestionNumber.value) {
            this.currentQuestionNumber.value = 0;
        }
    }
    nextQuestion() {
        const nextQ = this.currentQuestionNumber + 1;
        if (nextQ < this.questionBank.length) {
            this.currentQuestionNumber = nextQ;
            return true;
        }
        return false;
    }
    setQuestion(q) {
        if (q >= 0 && q < this.questionBank.length) {
            this.currentQuestionNumber = q;
            return true;
        }
        return false;
    }
}

export function useProgressTracker() {
    return {
        RandomModeProgressTracker,
        OrderedModeProgressTracker,
    };
}
