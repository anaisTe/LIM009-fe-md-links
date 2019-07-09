const routers = 'C:/Users/L-5-38/LIM009-fe-md-links/src'
const fs = require('fs');
const inFile = fs.readdirSync(routers);     
const path = require('path');
const myMarked = require('marked'); //compilador
const fetch = require('node-fetch');
const fnPath = require ('../src/path')

//extrae los archivos .md y los inserta en un array como obj
const routeMd = (routers) => {
    let arrRouteMd = [];
      inFile.forEach(eleFile =>{
        let newRouter =  path.join(routers, eleFile)
        if(fnPath.authDir(newRouter)===true){
          routeMd(newRouter)
        }else if(fnPath.fileExtMd(newRouter)){
          arrRouteMd.push({file: newRouter})
        }
      })
    //   console.log(arrRouteMd);   
    return arrRouteMd
  };
  
  //Usando Marked extrae las propiedades de la ruta y las coloca como obj en un arr
  const routeLinks = (routerMd) =>{
    let arrHref = [];
    routerMd.forEach(eleArr => {    
      let intoLink = (eleArr).file;      
      const linksFile = fs.readFileSync(intoLink, 'UTF-8');
      let renderer = new myMarked.Renderer(); //options
        renderer.link = (href, title, text) => { 
          let z = {href, text, file:intoLink};
          arrHref.push(z)
        }
      myMarked(linksFile, { renderer })
    })
    return arrHref
  }
  const arrMds = routeMd(routers)
  routeLinks(arrMds)
  // console.log(routeLinks(arrMds));

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
statusLink(routeLinks(arrMds))
.then((res)=>{
    console.log(res);
})

  module.exports = {
    routeMd,
    routeLinks,
    statusLink
  }