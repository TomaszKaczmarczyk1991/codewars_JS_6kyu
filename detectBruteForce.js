const logs = [
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=root",
    "10.0.0.5 LOGIN_FAIL user=test",
    "10.0.0.5 LOGIN_SUCCESS user=test"
]

function detectBruteForce(logs) {
    const sus = []
    const failureCount = {}

    const l = logs.map(x => x.split(' '))

    for(let i = 0; i < l.length; i++){
        if(!(l[i][0] in failureCount)) failureCount[l[i][0]] = 0
        if(l[i][1] === 'LOGIN_SUCCESS') failureCount[l[i][0]] = 0
        if(l[i][1] === 'LOGIN_FAIL'){
            failureCount[l[i][0]] += 1
        }
        if(failureCount[l[i][0]] >= 3) sus.push(l[i][0])
    }

    const noDupsIP = [...new Set(sus)].sort()

    return noDupsIP
}

console.log(detectBruteForce(logs)) // [ '192.168.1.1' ]