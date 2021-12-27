/*$(".check").on("click", () => {
    let id = (check.checked)
    if(id==true) {
        $(".english").fadeIn()
        $(".español").fadeOut()
    } else {
        $(".english").fadeOut()
        $(".español").fadeIn()
    }
})*/

let check = $("#check")

check.on("click", () => {
    let id = (check.prop('checked'))
    if(id==true) {
        $(".english").fadeIn()
        $(".español").fadeOut()
    } else {
        $(".english").fadeOut()
        $(".español").fadeIn()
    }
})


