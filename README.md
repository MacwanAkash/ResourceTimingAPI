# ResourceTimingAPI
Using resource timing API you can capture network calls or network request

# captureRequests(arg1) function
This function will return the network request based on initiator type.initiator type represents the type of resource that initiated the performance event.

# captureRequestsWithUrlFilter(arg1,arg2)
This function will return network request based on initiator type as well as you can filter based on specific url i.e if you just want to capture google analytics request or facebook pixel request e.t.c

# how to use it 

var initiator_type = ["xmlhttprequest", "script", "img"]

var url_filter = "https://www.google-analytics.com/collect";

var network_request_log = captureRequestsWithUrlFilter(initiator_type,url_filter);
