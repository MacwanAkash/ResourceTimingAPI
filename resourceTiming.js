//Capture network request by initiator type
function captureRequests(initiator_type) {
    var capture_newtwork_request = [];
    var capture_resource = performance.getEntriesByType("resource");
    for (var i = 0; i < capture_resource.length; i++) {
        for (var j = 0; j < initiator_type.length; j++) {
            if (capture_resource[i].initiatorType == initiator_type[j] || capture_resource[i].initiatorType == initiator_type[j] || capture_resource[i].initiatorType == initiator_type[j]) {
                capture_newtwork_request.push(capture_resource[i].name)
            }
        }
    }
    return capture_newtwork_request;
}

// Using URL filter
function captureRequestsWithUrlFilter(initiator_type, url_filter) {
    var capture_newtwork_request = [];
    var capture_resource = performance.getEntriesByType("resource");
    for (var i = 0; i < capture_resource.length; i++) {
        for (var j = 0; j < initiator_type.length; j++) {
            if (capture_resource[i].initiatorType == initiator_type[j] || capture_resource[i].initiatorType == initiator_type[j] || capture_resource[i].initiatorType == initiator_type[j]) {
                if (capture_resource[i].name.indexOf(url_filter) > -1) {
                    capture_newtwork_request.push(capture_resource[i].name)
                }
            }
        }
    }
    return capture_newtwork_request;
}


//Initiator type will filter your network request based on xmlhttprequest, script, img e.t.c for more check read.md documentation
var initiator_type = ["xmlhttprequest", "script", "img"]

// specific url you want to capture from your network request pool
var url_filter = "https://www.google-analytics.com/collect";

// Calling the function
var network_request_logs = captureRequestsWithUrlFilter(initiator_type, url_filter);
