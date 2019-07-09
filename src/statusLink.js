const fetch = require('node-fetch');
const fn_Links = require('./links')
routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src';


//función que verifica el estatus
const statusLink = (routeStatus) =>{
    const linkStat = routeStatus.map(eleLink =>{
      return fetch(eleLink.href)
      .then ((res)=>{
        eleLink.status = res.status;
          if(res.ok){
            eleLink.ok = 'ok';
          }else{
            eleLink.ok = 'fail';
          }
            return eleLink
      })
    })
      return Promise.all(linkStat)
  }
  const hrefLinks = fn_Links.routeLinks(fn_Links.routeMd(routers))
  statusLink(hrefLinks)
//   .then((res)=>{ console.log(res) })



module.exports = {
    statusLink,
    hrefLinks
}