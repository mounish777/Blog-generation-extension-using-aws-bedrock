// popup.js

document.getElementById('generateButton').addEventListener('click', function() {
    const blogTopic = document.getElementById('blogTopic').value;
    console.log('Blog Topic:', blogTopic); // Log the input value

    fetch('https://isyr2t6ro7.execute-api.us-east-1.amazonaws.com/dev/blog-generation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ blog_topic: blogTopic })
    })
    .then(response => {
        console.log('Response Status:', response.status); // Log response status
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data); // Log the parsed JSON data
        if (data.blog_content) {
            document.getElementById('output').innerText = data.blog_content;
        } else {
            document.getElementById('output').innerText = 'No blog content received.';
        }
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors
        document.getElementById('output').innerText = 'Failed to fetch the blog.';
    });
});
