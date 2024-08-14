// service-worker.js

self.addEventListener('fetch', function(event) {
    const url = new URL(event.request.url);

    // Check if the request is to your specific API endpoint
    if (url.origin === 'https://isyr2t6ro7.execute-api.us-east-1.amazonaws.com') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Clone the response so we can modify it
                    let modifiedResponse = response.clone();
                    let newHeaders = new Headers(modifiedResponse.headers);

                    // Add the necessary CORS headers
                    newHeaders.set('Access-Control-Allow-Origin', '*');
                    newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
                    newHeaders.set('Access-Control-Allow-Headers', 'Content-Type');

                    // Return the modified response
                    return new Response(modifiedResponse.body, {
                        status: modifiedResponse.status,
                        statusText: modifiedResponse.statusText,
                        headers: newHeaders
                    });
                })
                .catch(error => {
                    console.error('Fetch failed:', error);
                    return new Response('Network error', {
                        status: 500,
                        statusText: 'Network error'
                    });
                })
        );
    } else {
        // If the request is not for the API, let it pass through as usual
        event.respondWith(fetch(event.request));
    }
});
