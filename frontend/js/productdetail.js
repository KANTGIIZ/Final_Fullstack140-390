$(function () {

    var searchParams = new URLSearchParams(window.location.search);
    var pid = searchParams.get("pid");
    var url = "/api/products/" + pid;

    // Get data when first time open
    getData();

    function getData() {
        // #14 Get a selected product and display as a form
        // use $.get

        // ===============================
    }

    // Update photo when URL has changed
    $("#photo").change(function () {
        $("#preview").attr("src", $("#photo").val());
    })

    // Save edited product data
    $("#saveproduct").click(function () {
        var editproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }
        $.ajax({
            url: url,
            type: 'PUT',
            data: editproduct,
            success: function (result) {
                //Show updated status
                $("#modalbody").text("Updated product " + pid);
                $('#alertModal').modal('toggle');
                // Refresh data
                getData();
            }
        });
    });

    $("#deleteproduct").click(function () {
        $('#confirmModal').modal('toggle');
    });

    $("#confirmdelete").click(function () {
        // #15 Get a selected product and go back to product list
        // use $.get and winidow.location.href

        // ===============================
    });
});