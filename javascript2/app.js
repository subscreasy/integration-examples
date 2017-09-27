
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

function ajaxPOST(serviceOfferingId, requestUrl) {
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

    var authorizationToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoa2FyYWtvc2UiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNTA2NTkwNjk1fQ.fy3Y7x7c5rnr41RrNbzB6__9GkbBEyjJ0cp4n0diCI2_cxA3lLsYHvaZKnbFpy-UOtlbvnRsRhB5eeqhoscJYg";
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
    }).done(function (data){
        var jsonResponse = JSON.stringify(data, null, 4);
        console.log("response: " + jsonResponse);
        // $("#myModal").toggleClass("in");
    }).fail(function (data, status, er) {
        alert("error response: " + JSON.stringify(data, null, 4) + " status: " + status + " error:" + er);
    });
}




