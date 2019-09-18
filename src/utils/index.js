export default {}
const elP = document.createElement('p')

export function extractRichText(richContent) {
    elP.innerHTML = richContent
    return elP.innerText
}
