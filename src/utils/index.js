export default {}
const elP = document.createElement('p')

export function extractRichText(richContent) {
    elP.innerHTML = richContent
    return elP.innerText
}



export function filterHTMLTag (msg) {
    var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
    msg = msg.replace(/[|]*\n/, '') //去除行尾空格
    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
    return msg;
}
