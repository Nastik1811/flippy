
export const calculateInterval = (previousRecall: Date, suggestedRecall: Date, ease: Ease): number => {
    const today = new Date();

    let suggestedInterval = suggestedRecall.getDate() - previousRecall.getDate();
    let delay = today.getDate() - suggestedRecall.getDate();

    let newInterval;

    switch(ease){
        case 'hard':
            newInterval = suggestedInterval + delay/4 
            break;
        case 'norm':
            newInterval = (suggestedInterval + delay/2 ) * 1.5
            break;
        case 'easy':
            newInterval = (suggestedInterval + delay) * 2
            break;
        default:
            throw Error
    }

    return newInterval;
}
