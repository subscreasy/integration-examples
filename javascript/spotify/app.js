
function ajaxGET(requestTextArea, requestUrl, responseTextArea) {
    var requestData = requestTextArea.val();
    console.log("requestData: " + requestData)
    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function (data) {
            console.log("response: " + data);
            responseTextArea.text(data);

            if (requestTextArea.attr("id") == "resetRequest") {
                $("#loggedInUser").text("");
            }
        },
        error: function (data, status, er) {
            console.log("error response: " + data + " status: " + status + " error:" + er);
        }
    });
}

function ajaxPOST(serviceOfferingId, requestUrl, responseTextArea) {
    var serviceOffering = {"id": serviceOfferingId};
    var requestData = JSON.stringify({
        "serviceOffering": serviceOffering,
        "serviceUserId": "Cem bey"
    });

    console.log("requestData: " + requestData);
    $.ajax({
        url: requestUrl,
        type: 'POST',
        dataType: 'json',
        data: requestData,
        contentType: 'application/json',
        mimeType: 'application/json',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTUwNTEyNTUyN30.3Px74wzFNcjF_qtb_OzEqOqC9lQgta-wshnt99r_iFvwuzWDq5Xr818M0KXR7Z3IPbFgd3kMmFtwlu3uR_KIvQ"
        }
    }).done(function (data){
        var jsonResponse = JSON.stringify(data, null, 4);
        responseTextArea.text(jsonResponse);
        $("#myModal").toggleClass("in");
    }).fail(function (data, status, er) {
        alert("error response: " + JSON.stringify(data, null, 4) + " status: " + status + " error:" + er);
    });
}




