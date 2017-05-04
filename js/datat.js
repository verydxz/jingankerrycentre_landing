$(document).ready(function() {
    $.each(store, function(key, data) {
        $.each(data, function(index, data) {
            for (var i = 0; i < $(this).length; i++) {

                var tr = $('<tr/>');


                $(tr).append("<td class='col-md-8 col-xs-6 ShopName'><div class='CnShop'><h5  class='sc-t'>" + $(this)[i].shopnamecn + "</h5><h5>" + $(this)[i].shopname + "</h5></div><div class='EnShop'><h5>" + $(this)[i].shopname + "</h5><h5 class='sc-t'>" + $(this)[i].shopnamecn + "</h5></div><h5 class='mobile-v'>" + $(this)[i].shopnumber + "</h5></td>");

                $(tr).append("<td class='col-md-2 col-xs-6 ShopNumber desktop-v'><h5>" + $(this)[i].shopnumber + "</h5></td>");
                $(tr).append("<td class='col-md-2 col-xs-6 ShopCategory'><h5 class='EnShopCategory'>" + $(this)[i].category + "</h5><h5 class='CnShopCategory'>" + $(this)[i].categorycn + "</h5></td>");


                $(tr).addClass("sub-" + $(this)[i].sub + "")
                $(tr).addClass("" + key + "")

                $(tr).addClass("row")
                $(tr).addClass("item")

                $('#table_example').append(tr);
                $('#table_store').append(tr);
            }


        })

    })

    /* for (var i = 0; i < data.store.length; i++) {
       var tr = $('<tr/>');
       
       $(tr).append("<td class='col-md-8 col-xs-6 ShopName'><div class='CnShop'><h5  class='sc-t'>"+ data.store[i].ShopNameCn + "</h5><h5>"+ data.store[i].ShopName + "</h5></div><div class='EnShop'><h5>"+ data.store[i].ShopName + "</h5><h5 class='sc-t'>"+ data.store[i].ShopNameCn + "</h5></div><h5 class='mobile-v'>" + data.store[i].ShopNumber + "</h5></td>");

       $(tr).append("<td class='col-md-2 col-xs-6 ShopNumber desktop-v'><h5>" + data.store[i].ShopNumber + "</h5></td>");
       $(tr).append("<td class='col-md-2 col-xs-6 ShopCategory'><h5 class='EnShopCategory'>" + data.store[i].ShopCategory + "</h5><h5 class='CnShopCategory'>" + data.store[i].ShopCategoryCn + "</h5></td>");
        $(tr).addClass(""+ data.store[i].Class+"")
        $(tr).addClass(""+ data.store[i].ClassCn+"")

        $(tr).addClass("row")
        $(tr).addClass("item")

       $('#table_example').append(tr);
     }
     */


    $(".shop-t").find("li").each(function() {

        $(this).on('click touchstart', function() {
            $(".shop-t").find("li").removeClass("active")
            DDsrc = $(this).attr("data-src")
            $(".shop-t").find("li.t-" + DDsrc + "").addClass("active")
            $('#table_store').find("tbody").empty();
            $('#table_example').find("tbody").empty();


			if(DDsrc=="All"){
    $.each(store, function(key, data) {
        $.each(data, function(index, data) {
            for (var i = 0; i < $(this).length; i++) {

                var tr = $('<tr/>');


                $(tr).append("<td class='col-md-8 col-xs-6 ShopName'><div class='CnShop'><h5  class='sc-t'>" + $(this)[i].shopnamecn + "</h5><h5>" + $(this)[i].shopname + "</h5></div><div class='EnShop'><h5>" + $(this)[i].shopname + "</h5><h5 class='sc-t'>" + $(this)[i].shopnamecn + "</h5></div><h5 class='mobile-v'>" + $(this)[i].shopnumber + "</h5></td>");

                $(tr).append("<td class='col-md-2 col-xs-6 ShopNumber desktop-v'><h5>" + $(this)[i].shopnumber + "</h5></td>");
                $(tr).append("<td class='col-md-2 col-xs-6 ShopCategory'><h5 class='EnShopCategory'>" + $(this)[i].category + "</h5><h5 class='CnShopCategory'>" + $(this)[i].categorycn + "</h5></td>");


                $(tr).addClass("sub-" + $(this)[i].sub + "")
                $(tr).addClass("" + key + "")

                $(tr).addClass("row")
                $(tr).addClass("item")

                $('#table_example').append(tr);
                $('#table_store').append(tr);
            }


        })

    })
			
			}else{
           $.each(store, function(key, data) {
                if (key == DDsrc) {
        $.each(data, function(index, data) {
            for (var i = 0; i < $(this).length; i++) {

                var tr = $('<tr/>');


                $(tr).append("<td class='col-md-8 col-xs-6 ShopName'><div class='CnShop'><h5  class='sc-t'>" + $(this)[i].shopnamecn + "</h5><h5>" + $(this)[i].shopname + "</h5></div><div class='EnShop'><h5>" + $(this)[i].shopname + "</h5><h5 class='sc-t'>" + $(this)[i].shopnamecn + "</h5></div><h5 class='mobile-v'>" + $(this)[i].shopnumber + "</h5></td>");

                $(tr).append("<td class='col-md-2 col-xs-6 ShopNumber desktop-v'><h5>" + $(this)[i].shopnumber + "</h5></td>");
                $(tr).append("<td class='col-md-2 col-xs-6 ShopCategory'><h5 class='EnShopCategory'>" + $(this)[i].category + "</h5><h5 class='CnShopCategory'>" + $(this)[i].categorycn + "</h5></td>");


                $(tr).addClass("row")
                $(tr).addClass("item")

                $('#table_example').append(tr);
                $('#table_store').append(tr);
            }


        })

                 }

            })



            $.each(store, function(key, data) {
                $.each(data, function(index, data) {
                    for (var i = 0; i < $(this).length; i++) {
                        var obj = $(this)[i];
                        var value = obj.sub;
                        if (value == DDsrc) {

                            var tr = $('<tr/>');


                            $(tr).append("<td class='col-md-8 col-xs-6 ShopName'><div class='CnShop'><h5  class='sc-t'>" + $(this)[i].shopnamecn + "</h5><h5>" + $(this)[i].shopname + "</h5></div><div class='EnShop'><h5>" + $(this)[i].shopname + "</h5><h5 class='sc-t'>" + $(this)[i].shopnamecn + "</h5></div><h5 class='mobile-v'>" + $(this)[i].shopnumber + "</h5></td>");

                            $(tr).append("<td class='col-md-2 col-xs-6 ShopNumber desktop-v'><h5>" + $(this)[i].shopnumber + "</h5></td>");
                            $(tr).append("<td class='col-md-2 col-xs-6 ShopCategory'><h5 class='EnShopCategory'>" + $(this)[i].category + "</h5><h5 class='CnShopCategory'>" + $(this)[i].categorycn + "</h5></td>");


                $(tr).addClass("row")
                $(tr).addClass("item")
                            $('#table_example').append(tr);
                            $('#table_store').append(tr);
                        }

                    }


                })

            })


				
			}
        })
    })



});