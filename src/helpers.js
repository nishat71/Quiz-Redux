export const shuffleAnswers = (question) => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];
    return unshuffledAnswers
    .map(answer => ({ sort: Math.random(), value: answer }))
    .sort((a,b)=> a.sort - b.sort)
    .map((obj)=> obj.value);
}

//shuffle element inside array
// every single answer will create an object

/*
.map(answer =>({sort : Math.random(), value:answer}))
here it became array of objects
array of strings to array of objects

.sort((a,b)=> a.sort - b.sort)
1st & next element
order them by this sort property

.map((obj)=> obj.value);
want to get our object
map array of objects again to get back flat array of strings
*/