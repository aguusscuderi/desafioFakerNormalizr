let { schema, normalize } = require('normalizr')

/*function compression(normalizedData, denormalizedData){
    if(Object.values(normalizedData).length>0){
        let normalizedLength = Object.values(normalizedData).length
        let denormalizedLength = denormalizedData.length    
        return (normalizedLength*100)/(denormalizedLength)
    }else{
        console.log('nothing to compress...')
    }
}*/

module.exports = (denormalizedData) => {
    let schemaAuthor = new schema.Entity('author', {}, {idAttribute: "id"})

    let schemaMensaje = new schema.Entity('post', {author: schemaAuthor}, {idAttribute: "id"})

    let schemaMensajes = new schema.Entity('posts', {denormalizedData: [schemaMensaje]}, {idAttribute: "id"})

    let normalizado_Mensajes = normalize({id:"mensajesNormalizados", denormalizedData}, schemaMensajes)

    //let compressedPercentage = compression(normalizado_Mensajes.entities.post, denormalizedData)

    //console.log("data normalizada", normalizado_Mensajes.entities.post[1]._doc)
    //console.log("data normalizada", normalizado_Mensajes)
    //console.log("data denormalizada", denormalizedData)

    return {normalizado_Mensajes, denormalizedData, schemaMensajes /*compressedPercentage*/}
}