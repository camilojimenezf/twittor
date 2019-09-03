
//Guardar en el cache dinamico 
function actualizaCacheDinamico(dynamicCache, req , res){

    if(res){

        return caches.open( dynamicCache ).then( cache=>{

            cache.put( req, res.clone() ); //indicamos que en la cache dinamica, esa request tendra esa respuesta especifica
            return res.clone();
        });

    }else{
        return res;
    }

}