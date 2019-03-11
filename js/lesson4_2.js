"use strict";

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 * @property {int} startPositionX Начальная позиция игрока по X координате.
 * @property {int} startPositionY Начальная позиция игрока по Y координате.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10,
    startPositionX: 4,
    startPositionY: 7,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: null,
    y: null,

    /**
     * Инициализация игрока и его метоположения.
     */
    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    /**
     * Двигает игрока по переданному направлению.
     * @param {object} nextPoint Направление, в котором будет движение.
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 1:
                return {x: this.x - 1, y: this.y + 1};
            case 2:
                return {x: this.x, y: this.y + 1};
            case 3:
                return {x: this.x + 1, y: this.y + 1};
            case 4:
                return {x: this.x - 1, y: this.y};
            case 6:
                return {x: this.x + 1, y: this.y};
            case 7:
                return {x: this.x - 1, y: this.y - 1};
            case 8:
                return {x: this.x, y: this.y - 1};
            case 9:
                return {x: this.x + 1, y: this.y - 1};
        }
    }
};

/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {settings} settings Настройки игры.
 * @property {player} player Игрок, участвующий в игре.
 */
const game = {
    settings,
    player,

    /**
     * Запускает игру.
     */
    run() {
        // Инициализируем игрока, ставим его начальное местоположение
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        // Бесконечный цикл
        while (true) {
            // Отображаем нашу игру.
            this.render();

            // Получаем направление от игрока.
            const direction = this.getDirection();

            // Если игрок сказал что хочет выйти (набрал -1), значит выходим.
            if (direction === -1) {
                alert('До свидания.');
                return;
            }

            // Двигаем игрока.
            //this.player.move(direction);

            // Получаем следующую точку пользователя в зависимости от направления.
            const nextPoint = this.player.getNextPosition(direction);

            // Если пользователь может пройти на новую точку, то двигаем игрока.
            if (this.canPlayerMakeStep(nextPoint)) {
                this.player.move(nextPoint);
            }

        }
    },

    /**
     * Проверяет может ли пользователь перейти на точку.
     * @param {{x: int, y: int}} nextPoint Точка, которую проверяем.
     * @returns {boolean} true если пользователь может перейти в направлении, false если нет.
     */
    canPlayerMakeStep(nextPoint) {
        if (nextPoint.x > 9 || nextPoint.x < 0 || nextPoint.y > 9 || nextPoint.y < 0){
            return false;
        }

        return true;
    },

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Сюда запишем все что надо отобразить.
        let map = "";

        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < this.settings.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < this.settings.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                } else {
                    map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            map += '\n';
        }

        // Чистим консоль.
        console.clear();
        // Выводим все что надо отобразить в игре.
        console.log(map);
    },

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [-1, 1, 2, 3, 4, 6, 7, 8, 9];

        while (true) {
            // Получаем от пользователя направление.
            const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, -1 для выхода.'));

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },
};

// Запускаем игру.
game.run();