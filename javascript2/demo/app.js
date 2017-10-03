
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

function subscribe(serviceOfferingId, paymentCard, requestUrl, authorizationToken, successCallback, failureCallback) {
    var serviceOffering = {"id": serviceOfferingId};
    var subscriber = {"uuid": "0c90dc55-3663-4f3d-9fdc-ca42a75a3932"};

    var requestObject = {
        "serviceOffering": serviceOffering,
        "subscriber": subscriber,
        "paymentCard": paymentCard
    };

    var requestData = JSON.stringify(requestObject);

    console.log("requestData: " + requestData);

    $.ajax({
        url: requestUrl,
        type: 'POST',
        dataType: 'json',
        data: requestData,
        contentType: 'application/json',
        mimeType: 'application/json',
        headers: {
            "Authorization": "Apikey " + authorizationToken
        }
    }).done(successCallback).fail(failureCallback);
}




