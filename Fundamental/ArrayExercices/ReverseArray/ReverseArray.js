

function reverseArray(a) {


    let min = 0

    let max = a.length - 1

    while (min < max){


        const temp = a[min]

        a[min] = a[max]

        a[max] = temp



        min++
        max--
    }

    return a
}

