"use strict";

/*
 Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
 Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
 Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10
};

const game = {
    settings,
    xKey: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    yKey: [8, 7, 6, 5, 4, 3, 2, 1],
    tagColor: '#505050',
    containerElement: null,
    figures: [
        {name: 'R', color: 'w', pos: 'a1'},
        {name: 'N', color: 'w', pos: 'b1'},
        {name: 'B', color: 'w', pos: 'c1'},
        {name: 'Q', color: 'w', pos: 'd1'},
        {name: 'K', color: 'w', pos: 'e1'},
        {name: 'B', color: 'w', pos: 'f1'},
        {name: 'N', color: 'w', pos: 'g1'},
        {name: 'R', color: 'w', pos: 'h1'},
        {name: 'p', color: 'w', pos: 'a2'},
        {name: 'p', color: 'w', pos: 'b2'},
        {name: 'p', color: 'w', pos: 'c2'},
        {name: 'p', color: 'w', pos: 'd2'},
        {name: 'p', color: 'w', pos: 'e2'},
        {name: 'p', color: 'w', pos: 'f2'},
        {name: 'p', color: 'w', pos: 'g2'},
        {name: 'p', color: 'w', pos: 'h2'},
        {name: 'p', color: 'b', pos: 'a7'},
        {name: 'p', color: 'b', pos: 'b7'},
        {name: 'p', color: 'b', pos: 'c7'},
        {name: 'p', color: 'b', pos: 'd7'},
        {name: 'p', color: 'b', pos: 'e7'},
        {name: 'p', color: 'b', pos: 'f7'},
        {name: 'p', color: 'b', pos: 'g7'},
        {name: 'p', color: 'b', pos: 'h7'},
        {name: 'R', color: 'b', pos: 'a8'},
        {name: 'N', color: 'b', pos: 'b8'},
        {name: 'B', color: 'b', pos: 'c8'},
        {name: 'Q', color: 'b', pos: 'd8'},
        {name: 'K', color: 'b', pos: 'e8'},
        {name: 'B', color: 'b', pos: 'f8'},
        {name: 'N', color: 'b', pos: 'g8'},
        {name: 'R', color: 'b', pos: 'h8'},
    ],
    figureSymbol: {
        Kw: '&#9812;',
        Qw: '&#9813;',
        Rw: '&#9814;',
        Bw: '&#9815;',
        Nw: '&#9816;',
        pw: '&#9817;',
        Kb: '&#9818;',
        Qb: '&#9819;',
        Rb: '&#9820;',
        Bb: '&#9821;',
        Nb: '&#9822;',
        pb: '&#9823;',
        // ...
    },

    /**
     * Инициирует все значения.
     */
    init(){
        this.containerElement = document.getElementById('game');
    },

    /**
     * Запуск.
     */
    run(){
        this.init();
        this.renderTable();
        this.renderFigures();
    },

    /**
     * Отображает в ячейках игровую информацию.
     */
    renderTable(){
        for (let row = 0; row < this.settings.rowsCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            for (let col = 0; col < this.settings.colsCount; col++) {
                const cell = document.createElement('td');
                if (row !== 0  && row !== this.settings.rowsCount - 1 &&
                    col !== 0 && col !== this.settings.colsCount - 1
                ) {
                    cell.dataset.position = this.xKey[col - 1] + this.yKey[row - 1];
                }
                if (col >= 1 && col < 9 && (row === 0 || row === this.settings.rowsCount - 1)) {
                    cell.textContent = this.xKey[col - 1];
                }
                if (row >= 1 && row < 9 && (col === 0 || col === this.settings.colsCount - 1)) {
                    cell.textContent = this.yKey[row - 1];
                }
                if (this.isCellBlack(row, col)) {
                    cell.style.backgroundColor = this.tagColor;
                }
                trElem.appendChild(cell);
            }
        }
    },

    /**
     * Определяет является ли ячейка черная
     * @param {int} row - номер строки
     * @param {int} col - номер колонки
     * @returns {boolean} true если черная
     */
    isCellBlack(row, col) {
        return ((col % 2 === 0 && row % 2 !== 0) ||
            (col % 2 !== 0 && row % 2 === 0)) &&
            row !== 0 && row !== this.settings.rowsCount - 1 &&
            col !== 0 && col !== this.settings.colsCount - 1
    },

    /**
     * Отображает в ячейках фигуры.
     */
    renderFigures(){
        for (let i = 0; i < this.figures.length; i++) {
            const figure = this.figures[i];
            const figureSymbol = figure.name + figure.color;
            const figureHtml = this.figureSymbol[figureSymbol];
            this.containerElement.querySelector(`td[data-position="${figure.pos}"]`).innerHTML = figureHtml;
        }
    },
};

game.run();
