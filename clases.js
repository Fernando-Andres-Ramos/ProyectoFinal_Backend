const fs = require("fs")

module.exports = class Contenedor{
  constructor(path){
    this.path = path
  }

  async save(productToSave){
    try{
      const originalContent = await fs.promises.readFile(this.path,'utf-8')
      if (originalContent){
        const auxContentList = JSON.parse(originalContent)
        let newID = 0
        for (const product of auxContentList){
          if (product.id>newID)
            newID = product.id
        }
        Object.assign(productToSave,{id:(newID+1)})
        auxContentList.push(productToSave)
        fs.writeFileSync(this.path, JSON.stringify(auxContentList))
        return productToSave.id
      }
      else{
        Object.assign(productToSave,{id:1})
        const auxContentList = [productToSave]
        fs.writeFileSync(this.path, JSON.stringify(auxContentList))
        return productToSave.id
      }
    }
    catch(err){
      console.log('Error al intentar guardar el producto',err)
    }
  }

  async getById(productId){
    try{
      const originalContent = await fs.promises.readFile(this.path,'utf-8')
      const auxContentList = JSON.parse(originalContent)
      const productToFind = auxContentList.filter((product)=>product.id===parseInt(productId))
      if(productToFind.length>0)
        return productToFind
      else
        return null
    }
    catch{
      console.log('Error al intentar encontrar el producto',err)
    }
  }

  async getAll(){
    try{
      const originalContent = await fs.promises.readFile(this.path,'utf-8')
      const auxContentList = JSON.parse(originalContent)
      return auxContentList
    }
    catch{
      console.log('Error al intentar encontrar la lista de productos',err)
    }
  }

  async deleteById(productId){
    try{
      const originalContent = await fs.promises.readFile(this.path,'utf-8')
      const auxContentList = JSON.parse(originalContent)
      const listWithProductDeleted = auxContentList.filter((product)=>product.id!==parseInt(productId))
      fs.promises.writeFile(this.path,JSON.stringify(listWithProductDeleted))
    }
    catch{
      console.log('Error al intentar eliminar el producto',err)
    }
  }

  async deleteAll(){
    try{
      const emptyList = []
      await fs.promises.writeFile(this.path,JSON.stringify(emptyList))
    }
    catch{
      console.log('Error al intentar eliminar la lista de productos',err)
    }
  }


  /* metodo extra que cree para ordenar los productos segun su ID  */
  /* async sortById(){
    try{
      const originalContent = await fs.promises.readFile(this.path,'utf-8')
      const auxContentList = JSON.parse(originalContent)
      auxContentList.sort(function(a,b){return a.id - b.id})
      fs.promises.writeFile(this.path,JSON.stringify(auxContentList))
    }
    catch(err){
      console.log('Error al intentar encontrar la lista de productos',err)
    }
  } */
}