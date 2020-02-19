
import './styles.css';
// console.log('Ready to Party With Some TypeScript!');

const secretNumber = Math.floor(Math.random() * 9) + 1;

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

console.log(squares);

squares.forEach((sq, i) => {
    if (i === secretNumber) {
        sq.dataset.secret = 'true';
    }
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement; // for intellisense

    if (that.dataset.secret) {
        that.classList.add('winner');
        that.removeEventListener('click', handleClick);
    } else {
        that.classList.add('loser');
        that.removeEventListener('click', handleClick);
    }
}

