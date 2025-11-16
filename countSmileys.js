function countSmileys(arr) {
    const eyes = [':', ';']
    const noses = ['-', '~']
    const mouths = [')', 'D']

    let smileysCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 2 || arr[i].length > 3) continue;

        if (arr[i].length === 2) {
            if (
                (arr[i][0] === eyes[0] || arr[i][0] === eyes[1]) &&
                (arr[i][1] === mouths[0] || arr[i][1] === mouths[1])
            ) {
                smileysCounter++;
            }
        }

        if (arr[i].length === 3) {
            if (
                (arr[i][0] === eyes[0] || arr[i][0] === eyes[1]) &&
                (arr[i][1] === noses[0] || arr[i][1] === noses[1]) &&
                (arr[i][2] === mouths[0] || arr[i][2] === mouths[1])
            ) {
                smileysCounter++;
            }
        }
    }
    return smileysCounter;
}

console.log(countSmileys([':)',':(',':D',':O',':;'])) // 2