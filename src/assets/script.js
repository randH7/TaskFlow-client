function changeColor(elementId, color) {
    console.log(1)
    var element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = color;
    }
}


// 24:45
function sideBarAction(elementId, elementId2) {

    let sidebar = document.querySelector(elementId)
    let sidebarBtn = document.querySelector(elementId2)
    console.log(sidebarBtn)

    sidebar.classList.toggle("close")

}