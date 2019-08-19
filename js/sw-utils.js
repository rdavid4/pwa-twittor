
function actualizaCacheDinamico( dynamicCache, req, res) {
    if( res.ok ){
         return caches.open(dynamicCache).then(cache=>{
            cache.put(req, res.clone())
            return res.clone()
        })
    }else{ç
        //Si no hay conexion y no hay cache
        return res
    }
}