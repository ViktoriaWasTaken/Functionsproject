var Height
var Width
var Depth
var Sweep
function doInputOutput() {
    Height = parseInt(document.getElementById("Height").value)
    Width = parseInt(document.getElementById("Width").value)
    Depth = parseInt(document.getElementById("Depth").value)
    Sweep = parseInt(document.getElementById("Sweep").value)
    if (checkInput(Height) && checkInput(Width) && checkInput(Depth) && checkInput(Sweep)) {
        let volume = houseVolume()
        document.getElementById("outputDiv").innerHTML = volume
    }
    else{
        document.getElementById("outputDiv").innerHTML = "Invalid Input"
    }
}
function houseVolume() {
    return livingVolume() + roofVolume()
}
function livingVolume() {
    return Width * Depth * Height
}
function roofVolume() {
    return triangleArea() * Width
}
function triangleArea() {
    return (Height + Width + Sweep) / 2
}
function checkInput (value) {
    if (value == undefined) {
        return false
    }
    if (value.length == 0) {
        return false
    }
    return isFinite(value)
}
