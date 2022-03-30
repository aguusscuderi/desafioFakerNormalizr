
const addMessage = message =>{
    console.log(message)
    p.innerHTML += `
                    <div>
                        <h1>${message.author.email}</h1>
                        <h2>${message.author.name}</h1>
                        <b> ${message.date}</b>
                    </div>
                    <p>${message.message}</p>
    `
}

const loadMessage = (messages) => {
    messages.forEach((message) => addMessage(message))
}



/*const loadMessage = (msgs) => {
    let {normalizado_Mensajes, compressedPercentage} = {...msgs}
    //console.log(compressedPercentage)
  
    // let denormalizedData = normalize.denormalize(normalizedData.result, mensajesSchema, normalizedData.entities)
  
    // let normalizedData = normalize({id:'mensajes', denormalizedData}, mensajesSchema)
  
    console.log('los mensajes', msgs)
    console.log('normalized utilks')
  
    console.log("NORMALIZADA", Object.values(normalizado_Mensajes.entities.post).length)
    console.log("NORMALIZADA", normalizado_Mensajes.entities.post[1]._doc.text)
    console.log("NORMALIZADA", normalizado_Mensajes.entities.post[1]._doc.author.email)
    console.log("NORMALIZADA", normalizado_Mensajes.entities.post[1]._doc.fyh)
    console.log("NORMALIZADA", normalizado_Mensajes)

    compression.innerHTML += `Compresion ${compressedPercentage.toFixed(2)} %`
  
    for (i=1; i <= Object.values(normalizado_Mensajes.entities.post).length; i++){
        p.innerHTML += `<div>
                            <p style="display: inline; color: blue;"><b>${normalizado_Mensajes.entities.post[i]._doc.author.email},</b></p> 
                            <p style="display: inline; color: green;"><i>${normalizado_Mensajes.entities.post[i]._doc.message}</i></p>
                            <p style="display: inline; color: brown;">${normalizado_Mensajes.entities.post[i]._doc.date}:</p>
                        </div>
                    `
    }
  }*/