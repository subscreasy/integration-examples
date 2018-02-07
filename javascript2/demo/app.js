
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

function subscribe(subscriptionPlanId, paymentCard, requestUrl, authorizationToken, successCallback, failureCallback) {
    var subscriptionPlan = {"id": subscriptionPlanId};
    var subscriber = {
        "secureId": "1231231",
        "email": "johndoe@example.com",
        "name": "John",
        "surname": "Doe"
    };

    var requestObject = {
        "subscriptionPlan": subscriptionPlan,
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




