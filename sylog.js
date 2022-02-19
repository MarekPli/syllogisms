const question1 = document.querySelector("#question1")
const question2 = document.querySelector("#question2")
const answer = document.querySelector("#answer")
const colorAnswer = 'bisque'
const inp = document.querySelector('input')
const nameSyl = document.querySelector('#name-syl')

const termins = [
    ['astronom', 'astronomowie', 'astronomem', 'astronomami', 'astronomach'],
    ['Ateńczyk', 'Ateńczycy', 'Ateńczykiem', 'Ateńczykami', 'Ateńczykach'],
    ['Grek', 'Grecy', 'Grekiem', 'Grekami', 'Grekach'],
    ['buddysta', 'buddyści', 'buddystą', 'buddystami', 'buddystach'],
    ['dyplomata', 'dyplomaci', 'dyplomatą', 'dyplomatami', 'dyplomatach'],
    ['filozof', 'filozofowie', 'filozofem', 'filozofami', 'filozofach'],
    ['fizyk', 'fizycy', 'fizykiem', 'fizykami', 'fizykach'],
    ['geodeta', 'geodeci', 'geodetą', 'geodetami', 'geodetach'],
    ['geometra', 'geometrzy', 'geometrą', 'geometrami', 'geometrach'],
    ['informatyk', 'informatycy', 'informatykiem', 'informatykami', 'informatykach'],
    ['inżynier', 'inżynierowie', 'inżynierem', 'inżynierami', 'inżynierach'],
    ['kompozytor', 'kompozytorzy', 'kompozytorem', 'kompozytorami', 'kompozytorach'],
    ['kosmita', 'kosmici', 'kosmitą', 'kosmitami', 'kosmitach'],
    ['matematyk', 'matematycy', 'matematykiem', 'matematykami', 'matematykach'],
    ['mędrzec', 'mędrcy', 'mędrcem', 'mędrcami', 'mędrcach'],
    ['muzyk', 'muzycy', 'muzykiem', 'muzykami', 'muzykach'],
    ['oficer', 'oficerowe', 'oficerem', 'oficerami', 'oficerach'],
    ['poseł', 'posłowie', 'posłem', 'posłami', 'posłach'],
    ['programista', 'programiści', 'programistą', 'programistami', 'programistach'],
    ['retor', 'retorzy', 'retorem', 'retorami', 'retorach'],
    ['samuraj', 'samurajowie', 'samurajem', 'samurajami', 'samurajach'],
    ['student', 'studenci', 'studentem', 'studentami', 'studentach'],
    ['sportowiec', 'sportowcy', 'sportowcem', 'sportowcami', 'sportowcach'],
    ['technik', 'technicy', 'technikiem', 'technikami', 'technikach']
]

const sylog = [
    ['Bar-ba-ra', 'Bar-ba-ri', 'Ce-la-rent', 'Ce-la-ront', 'Da-ri-i', 'Fe-ri-o'],
    ['Ces-ar-e', 'Ces-ar-o', 'Cam-es-tres',
        'Cam-es-tros', 'Fes-ti-no', 'Ba-rocc-o'
    ],
    ['Da-rap-ti', 'Dis-am-is', 'Da-tis-i', 'Fe-lap-ton', 'Boc-ar-do', 'Fe-ris-on'],
    ['Bam-a-lip', 'Ca-lem-es', 'Ca-lem-os', 'Dim-a-tis', 'Fes-ap-o', 'Fres-is-on']
]

const sylText = (a, x, b, texts) => {
    let r
    a = a === 'P' ? 0 : a === 'M' ? 1 : 2
    b = b === 'P' ? 0 : b === 'M' ? 1 : 2

    if (x === 'a')
        r = `Każdy ${termins[texts[a]][0]} jest ${termins[texts[b]][2]}`
    else if (x === 'i')
        r = `Niektórzy ${termins[texts[a]][1]} są ${termins[texts[b]][3]}`
    else if (x === 'e')
        r = `Żaden ${termins[texts[a]][0]} nie jest ${termins[texts[b]][2]}`
    else if (x === 'o')
        r = `Niektórzy ${termins[texts[a]][1]} nie są ${termins[texts[b]][3]}`

    return `${r}.`
}

const getArr = (f, n) => {
    const syl = sylog[f][n]
    const arr = []
    for (let i = 0; i < syl.length; i++) {
        if ("aeio".includes(syl[i]))
            arr.push(syl[i])
    }
    return arr

}

const getTexts = () => {
    const arr = []
    let r
    while (arr.length < 3) {
        r = Math.floor(Math.random() * termins.length)
        if (!arr.includes(r))
            arr.push(r)
    }
    return arr

}


const getFig1 = (char) => {
    let result = ''
    sylog[0].forEach(element => {
        if (element[0] === char) {
            if (result)
                result += '</b> oraz <b>'
            result += element.replace(/-/g, '')
        }
    })
    return result
}

const sylogizm = (f, n) => {
    const arr = getArr(f, n)
    const texts = getTexts()
    let q1, q2

    if (f === 0) {
        q1 = sylText('M', arr[0], 'P', texts)
        q2 = sylText('S', arr[1], 'M', texts)
    } else if (f === 1) {
        q1 = sylText('P', arr[0], 'M', texts)
        q2 = sylText('S', arr[1], 'M', texts)
    } else if (f === 2) {
        q1 = sylText('M', arr[0], 'P', texts)
        q2 = sylText('M', arr[1], 'S', texts)
    } else if (f === 3) {
        q1 = sylText('M', arr[0], 'P', texts)
        q2 = sylText('M', arr[1], 'S', texts)
    } else
        q1 = `Błąd danych dla ${f}`

    let arrTest
    let ans = ''
    let sylogs = ''
    for (let i = 0; i < sylog[f].length; i++) {
        arrTest = getArr(f, i)
        if (arrTest[0] === arr[0] && arrTest[1] === arr[1]) {
            if (ans) {
                ans += '<br><small><i>co oznacza również</i>:</small><br>'
                sylogs += ' albo '
            }
            ans += sylText('S', arrTest[2], 'P', texts)
            sylogs += `<b>${sylog[f][i]}</b>`
        }

    }
    let sylTxt = `Sylogizm należy do <b>figury ${f+1}</b>.<br>` +
        `Jego nazwa to: ${sylogs}`
    if (f !== 0) {
        const sylFig1 = getFig1(sylogs[3])
        sylTxt += `,<br>co odpowiada sylogizmowi <b>${sylFig1}</b> figury 1.`
    } else sylTxt += '.'
    return [q1, q2, ans, termins[texts[2]][4], sylTxt]

}



const getSylog = () => {
    const f = Math.floor(Math.random() * 4)
    const i = Math.floor(Math.random() * 6)
    const m = sylogizm(f, i)
    const p = Math.floor(Math.random() * 2)
    if (p) {
        question1.innerText = m[0]
        question2.innerText = m[1]
    } else {
        question1.innerText = m[1]
        question2.innerText = m[0]
    }
    answer.innerHTML = m[2]
    inp.setAttribute("value", `Pokaż wynik: co wiadomo o ${m[3]}?`)
    answer.style.color = colorAnswer
    nameSyl.style.visibility = 'hidden'
    nameSyl.innerHTML = m[4]
}

const getVisible = (doIt) => {
    if (doIt)
        answer.style.color = 'unset'
    else
        answer.style.color = colorAnswer
}
const getVisibleS = (doIt) => {
    if (doIt)
        nameSyl.style.visibility = 'visible'
    else
        nameSyl.style.visibility = 'hidden'
}