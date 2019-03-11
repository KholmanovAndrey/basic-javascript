"use strict";

/*
 На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать миллионером?».
 Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь методы,
 например метод run, возможно метод init и т.д.
 В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
 Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать
 варианты ответов в виде теста, например:

 Сколько букв в слове "привет":
 a. Пять.
 b. Шесть.
 c. Семь.
 d. Куда я попал?

 Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
 По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить сыграть снова.
 Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
 */

/**
 * @type {object[]} Массив с объектами вопросов.
 */
const questions = [
    {
        text: 'Столица России',
        variants: {
            'a': 'Москва',
            'b': 'Санкт-Петербург',
            'c': 'Киев',
            'd': 'Минск',
        },
        correctAnswerIndex: 'a',
    },
    {
        text: 'Столица Российской империи перев Первой Мировой войной',
        variants: {
            'a': 'Москва',
            'b': 'Санкт-Петербург',
            'c': 'Киев',
            'd': 'Минск',
        },
        correctAnswerIndex: 'b',
    },
    {
        text: 'Столица Руси при Ярославе Мудром',
        variants: {
            'a': 'Москва',
            'b': 'Санкт-Петербург',
            'c': 'Киев',
            'd': 'Минск',
        },
        correctAnswerIndex: 'c',
    },
    {
        text: 'Столица Белоруссии',
        variants: {
            'a': 'Москва',
            'b': 'Санкт-Петербург',
            'c': 'Киев',
            'd': 'Минск',
        },
        correctAnswerIndex: 'd',
    },
    {
        text: 'Столица Украйны',
        variants: {
            'a': 'Москва',
            'b': 'Санкт-Петербург',
            'c': 'Киев',
            'd': 'Минск',
        },
        correctAnswerIndex: 'c',
    },
];

/**
 * @property {questions} questions Массив с объектами вопросов.
 * @property {int} scoreCount Счетчик правильных ответов.
 * @property {int} questionIndex Индекс текущего вопроса.
 */
const game = {
    questions,
    scoreCount: 0,
    questionIndex: 0,
    answer: [0, 0],

    /**
     * Инициализация игры.
     */
    init() {},

    /**
     * Запуск игры.
     */
    run() {
        this.init();

        while (true) {
            this.scoreCount++;

            let userAnswer = this.getAnswer();

            if (this.isAnswerCorrect(userAnswer)) {
                this.answer[0]++;
                alert('Верно');
            } else {
                this.answer[1]++;
                alert('Не верно');
            }

            if (this.userWantExit(userAnswer)) {
                alert('До свидания');
                return;
            }
            if (!this.isGameOver()) {
                alert(`Конец игры: Отвечено правильно на ${this.answer[0]} вопроса.`);
                return;
            }

            this.questionIndex++;
        }
    },

    /**
     * Получаем ответ от пользователя.
     * @returns {string} Строка ответа пользователя.
     */
    getAnswer() {
        let question = this.getCurrentQuestionString();

        let userAnswer = prompt(question);

        if (!this.validateAnswer(userAnswer)){
            alert('Введите корректный ответ на вопрос!!!');
            return this.getAnswer();
        }

        return userAnswer;
    },

    /**
     * Возвращает строку с текущим вопросом и вариантами ответов.
     * @returns {string} Строку с текущим вопросом и вариантами ответов.
     */
    getCurrentQuestionString() {
        let question = `Вопрос ${this.scoreCount}: ${this.questions[this.questionIndex].text}\nВарианты ответов:\n`;
        for (const key in this.questions[this.questionIndex].variants) {
            question += `${key}: ${this.questions[this.questionIndex].variants[key]}\n`;
        }

        return question;
    },

    /**
     * Проверяем ответ пользователя на корректность ввода.
     * @param {string} userAnswer Ответ пользователя.
     * @returns {boolean} true если пользователь ввел корректные данные, иначе false.
     */
    validateAnswer(userAnswer) {
        if (userAnswer === '-1' || userAnswer === 'a' || userAnswer === 'b' || userAnswer === 'c' || userAnswer === 'd') {
            return true;
        }

        return false;
    },

    /**
     * Проверяет ввел ли пользователь вместо ответа информацию для выхода из игры.
     * @param {string} userAnswer Ответ пользователя.
     * @returns {boolean} true, если пользователь хотел выйти, false если нет.
     */
    userWantExit(userAnswer) {
        if (userAnswer !== '-1') {
            return false;
        }

        return true;
    },

    /**
     * Проверяет является ли ответ, переданный в функцию верным.
     * @param {string} userAnswer Ответ пользователя.
     * @returns {boolean} true, если ответ пользователя верный, false если нет.
     */
    isAnswerCorrect(userAnswer) {
        if (userAnswer !== this.questions[this.questionIndex].correctAnswerIndex) {
            return false;
        }

        return true;
    },

    /**
     * Проверяет закончилась ли игра.
     * @returns {boolean} true, если было задано 5 вопросов, иначе false.
     */
    isGameOver() {
        if (this.scoreCount === 5) {
            return false;
        }

        return true;
    }
};


alert('Игра "Кто хочет стать милионером" приветствует Вас. Поехали');
// Запускаем игру.
game.run();
