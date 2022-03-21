const importFiles=(r)=> {
    return r.keys().map(r);
  }
  
  const importsRoomsImages =() =>{
      return importFiles(require.context('../images/rooms', false, /\.(png|jpe?g|svg)$/)); 
  }
  
  const importsHallImages =() =>{
    return importFiles(require.context('../images/hall', false, /\.(png|jpe?g|svg)$/)); 
  }
  
  const importsKitchenImages =() =>{
    return importFiles(require.context('../images/kitchen', false, /\.(png|jpe?g|svg)$/)); 
  }
  
  const importsSurroundingsImages =() =>{
    return importFiles(require.context('../images/surroundings', false, /\.(png|jpe?g|svg)$/)); 
  }

  const Images={
      ROOMS:importsRoomsImages(),
      HALL:importsHallImages(),
      KITCHEN:importsKitchenImages(),
      SURROUNDINGS:importsSurroundingsImages()
  }

  export default Images;