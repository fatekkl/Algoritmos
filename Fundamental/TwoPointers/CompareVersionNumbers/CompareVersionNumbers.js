/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

    version1 = version1.split(".")

    version2 = version2.split(".")

    let len = version1.length



    if (version2.length > version1.length) {
        len = version2.length
    }


    for (let i = 0; i < len; i++) {
        if (version1[i] === undefined) {
            version1.push("0");
        }
        if (version2[i] === undefined) {
            version2.push("0");
        }
    }

    for (let i = 0; i < len; i++) {

        const n1 = parseInt(version1[i])
        const n2 = parseInt(version2[i])


        if (n1 < n2) {
            return -1
        }

        if (n1 > n2) {
            return 1
        }
    }

    return 0
};