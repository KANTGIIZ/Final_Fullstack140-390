$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData(){
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get
        $.get(url, function (data, status)
        {
            if(status == 'success')
            {
                for(index in data)
                {
                    var product = data[index];
                    var row = ` 
                    <tr>
                        <td><img src="${product.photo}" height="42" width="42"></td>
                        <td>${product.serialno}</td>
                        <td>${product.name}</td>
                        <td>${product.category}</td>
                        <td>${product.price}</td>
                   
                        <td>
                            <a class="btn btn-primary btn-lg" href="userdetail.html?id=${product.serialno}">View</a>
                        </td>
                    </tr>` ;
                    $("#plist").append(row);
                }
            }
        });
        // ===============================
    }
    
    // Update photo when URL has changed
    $("#photo").change(function(){
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
        $.post(url, newproduct, function(result){
            $("span").html(result);
          });
        // ===============================

    });
})