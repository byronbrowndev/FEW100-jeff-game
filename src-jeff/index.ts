
import './styles.css';


const secretNumber = getRandomInt(1, 9);

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currentSquare = 1;

squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);
});


export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleClick() {
    const that = this as HTMLDivElement;

    if (that.dataset.secret) {
        that.classList.add('winner');
        that.removeEventListener('click', handleClick);
        // Make all the other ones losers.
        squares
            .forEach(sq => {
                if (sq !== that) {
                    sq.classList.add('loser');
                }
            });

    } else {
        that.classList.add('loser');
        that.removeEventListener('click', handleClick);
    }
}
