WORKING QUERIES - enter directly into GraphiQL


1. Querying logos

{
  logos{
    _id
    text
    color
    fontSize
    bgColor
    borderColor
    borderRadius
    borderThickness
    padding
    margin
    lastUpdate
  }
}

Query by selecting by id
{
  logo(id: "5e920e66ec3aea14b889e1a5"){
    _id
    text
    color
    fontSize
    bgColor
    borderColor
    borderRadius
    borderThickness
    padding
    margin
    lastUpdate
  }
}

2. Removing logos

mutation{
  removeLogo(id: "5e920e66ec3aea14b889e1a5") {
    _id
    text
    color
    fontSize
    lastUpdate
  }
}


3. Adding logos

mutation{
  addLogo (
    text : "sample3",
    color : "#00000",
    fontSize : 24,
    bgColor : "#00000",
    borderColor: "#00000",
    borderRadius : 12,
    borderThickness : 0,
    padding : 10,
    margin : 15
	)
}

4. Updating logos

mutation{
  updateLogo (
    id : "5e920e66ec3aea14b889e1a5",
    text : "sample4",
    color : "#00000",
    fontSize : 1000,
    bgColor : "#00000",
    borderColor: "#00000",
    borderRadius : 12,
    borderThickness : 0,
    padding : 10,
    margin : 15
	)
}