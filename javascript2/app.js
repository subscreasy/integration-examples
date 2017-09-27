
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

function ajaxPOST(serviceOfferingId, requestUrl, authorizationToken, successCallback, failureCallback) {
    var serviceInstance = {
        "serviceOffering": {"id": serviceOfferingId},
        "serviceUserId": "Cem bey"
    };
    var paymentCard = {
        "cardHolderName": "John Doe",
        "cardNumber": "5528790000000008",
        "expireYear": "2030",
        "expireMonth": "12",
        "cvc": "123",
        "registerCard": 0
    };

    var requestObject = {
        "serviceInstance": serviceInstance,
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
            "Authorization": "Bearer " + authorizationToken
        }
    }).done(successCallback).fail(failureCallback);
}




