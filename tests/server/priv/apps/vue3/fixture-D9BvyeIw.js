const r=async(t="")=>{const o=location.protocol==="http:"?"4000":"4001";return fetch(`${location.protocol}//phoenix:${o}/api/fixture/${t}`).then(n=>n.json())};export{r as g};
