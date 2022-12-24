$(function() {
    $("#link1").hide()
    $("#metroLink").click(function() {
        $("#link1").show(2000)
        $("#link2").hide(1000)
        $("#link3").hide(1000)
        $("#link4").hide(1000)
        $("#link5").hide(1000)
        $("#link6").hide(1000)
        $("#link7").hide(1000)
        $("#link8").hide(1000)

    })


    $("#link2").hide()
    $("#sportsLink").click(function() {
        $("#link2").show(2000)
        $("#link1").hide(1000)
        $("#link3").hide(1000)
        $("#link4").hide(1000)
        $("#link5").hide(1000)
        $("#link6").hide(1000)
        $("#link7").hide(1000)
        $("#link8").hide(1000)


    })

    $("#link3").hide()
    $("#politicsLink").click(function() {
        $("#link3").show(2000)
        $("#link1").hide(1000)
        $("#link2").hide(1000)
        $("#link4").hide(1000)
        $("#link5").hide(1000)
        $("#link6").hide(1000)
        $("#link7").hide(1000)
        $("#link8").hide(1000)



    })

    $("#link4").hide()
    $("#entertainmentLink").click(function() {
        $("#link4").show(2000)
        $("#link1").hide(1000)
        $("#link2").hide(1000)
        $("#link3").hide(1000)
        $("#link5").hide(1000)
        $("#link6").hide(1000)
        $("#link7").hide(1000)
        $("#link8").hide(1000)



    })

    $("#link5").hide()
    $("#educationLink").click(function() {
        $("#link5").show(2000)
        $("#link1").hide(1000)
        $("#link2").hide(1000)
        $("#link3").hide(2000)
        $("#link4").hide(1000)
        $("#link6").hide(1000)
        $("#link7").hide(1000)
        $("#link8").hide(1000)



    })

    $("#link6").hide()
    $("#industryLink").click(function() {
        $("#link6").show(2000)
        $("#link1").hide(1000)
        $("#link2").hide(1000)
        $("#link4").hide(1000)
        $("#link5").hide(1000)
        $("#link3").hide(1000)
        $("#link7").hide(1000)
        $("#link8").hide(1000)



    })

    $("#link7").hide()
    $("#financeLink").click(function() {
        $("#link7").show(2000)
        $("#link1").hide(1000)
        $("#link2").hide(1000)
        $("#link4").hide(1000)
        $("#link5").hide(1000)
        $("#link6").hide(1000)
        $("#link3").hide(1000)
        $("#link8").hide(1000)



    })

    $("#link8").hide()
    $("#editorialsLink").click(function() {
        $("#link8").show(2000)
        $("#link1").hide(1000)
        $("#link2").hide(1000)
        $("#link4").hide(1000)
        $("#link5").hide(1000)
        $("#link6").hide(1000)
        $("#link7").hide(1000)
        $("#link3").hide(1000)



    })
    $("#cancel").click(function() {
        $("#link1").hide(1000)
        $("#link2").hide(1000)
        $("#link3").hide(1000)
        $("#link4").hide(1000)
        $("#link5").hide(1000)
        $("#link6").hide(1000)
        $("#link7").hide(1000)
        $("#link8").hide(2000)

    })



    // $("#menu-bar").click(function() {
    //     $("#center").css('width', '60%')
    //     $("#left").css("display", "block")
    // })

    $("#menu-bar").click(function() {
        $("#left").toggle(function() {
            $("#columns-items").css("display", 'block')
        })
    })


})