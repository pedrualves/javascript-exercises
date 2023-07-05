
/*
 * Complete the 'subsetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function subsetA(arr) {
    const uniquesItens = _validateUniqueItens(arr)
    // se somente houver elementos repetidos basta equalizar o retorno com metade + 1
    if (uniquesItens) {
        return uniquesItens
    }

    const sortedArr = _sortArray(arr)
    let sumSorted = _sumElementFromArray(sortedArr)
    const minimalElements = _fetchMinimalElementsFromSortedArray(sumSorted, sortedArr)

    return minimalElements.sort((a, b) => a - b)

}

function _validateUniqueItens(arr) {
    const uniqueItens = [...new Set(arr)]
    const limitUniqueItens = 2
    if (uniqueItens.length < limitUniqueItens) {
        const startPosition = 0
        const halfRoundedUpUniqueItens = (arr.length / 2) + 1
        return arr.slice(startPosition, halfRoundedUpUniqueItens)
    }
}

function _sortArray(arr) {
    return [...arr].sort((a, b) => b - a)
}

function _sumElementFromArray(arr) {
    return arr.reduce((total, actual) => total += actual)
}

function _fetchMinimalElementsFromSortedArray(sumSorted, sortedArr) {
    let sumMinimialElements = 0
    const minimalElements = []
    while (sumMinimialElements < sumSorted) {
        const firstElement = sortedArr[0]
        minimalElements.push(firstElement)
        sumMinimialElements += firstElement
        sumSorted -= firstElement
        sortedArr.shift()
    }
    return minimalElements
}
