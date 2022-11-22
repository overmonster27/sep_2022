let cards = [
    {cardSuit: 'spade', value: '1', color: 'black'},
    {cardSuit: 'spade', value: '2', color: 'black'},
    {cardSuit: 'spade', value: '3', color: 'black'},
    {cardSuit: 'spade', value: '4', color: 'black'},
    {cardSuit: 'spade', value: '5', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'none', value: 'joker', color: 'black'},
    {cardSuit: 'diamond', value: '1', color: 'black'},
    {cardSuit: 'diamond', value: '2', color: 'black'},
    {cardSuit: 'diamond', value: '3', color: 'black'},
    {cardSuit: 'diamond', value: '4', color: 'black'},
    {cardSuit: 'diamond', value: '5', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: '1', color: 'red'},
    {cardSuit: 'heart', value: '2', color: 'red'},
    {cardSuit: 'heart', value: '3', color: 'red'},
    {cardSuit: 'heart', value: '4', color: 'red'},
    {cardSuit: 'heart', value: '5', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '1', color: 'red'},
    {cardSuit: 'clubs', value: '2', color: 'red'},
    {cardSuit: 'clubs', value: '3', color: 'red'},
    {cardSuit: 'clubs', value: '4', color: 'red'},
    {cardSuit: 'clubs', value: '5', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'red'},
    {cardSuit: 'none', value: 'joker', color: 'red'},
];

let reduce = cards.reduce((accumulator, obj) => {
    if (obj.cardSuit=== 'spade'){
    accumulator.spade.push(obj)}

    if (obj.cardSuit === 'diamond'){
    accumulator.diamond.push(obj)}

    if (obj.cardSuit === 'heart'){
    accumulator.heart.push(obj)}

    if (obj.cardSuit === 'clubs'){
    accumulator.clubs.push(obj)}

    return accumulator

},{spade:[],diamond:[],heart:[],clubs:[]})

console.log(reduce);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }