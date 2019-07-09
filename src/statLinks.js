const linkStatus = require('./statusLink')

//stats links
const statLink = (links) =>{
    const arrLinks = links
    .then((res)=>{
        const linkStat = res.map ( (ele)=>{
        return ele.href
        })
        const totaLinks = new Set(linkStat)
        const brokeLink = res.filter((ele)=>ele.ok === 'fail')
        return{
        total: res.length,
        unique: totaLinks.size,
        broken: brokeLink.length,
        };
    })
    return arrLinks   
    }
    const newLink = linkStatus.statusLink(linkStatus.hrefLinks)
    statLink(newLink)
    .then(res=>console.log(res));

    module.exports = {
        statLink,
        newLink
    }