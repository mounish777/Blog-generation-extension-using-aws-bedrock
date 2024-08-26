<h1 align="center">Chrome Extension for Blog Content Generation Using AWS Bedrock</h1>

<p align="center">
  <img src="https://path-to-your-banner-image" alt="Project Banner" />
</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#architecture">Architecture</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#technical-details">Technical Details</a></li>
  <li><a href="#troubleshooting">Troubleshooting</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="overview">Overview</h2>
<p>
  This project is a Chrome extension that allows users to generate blog content based on a given topic. 
  It leverages AWS services, including Bedrock and Llama 3 by Meta, to generate the content. 
  The extension integrates with a backend API, processes the content using a serverless architecture, 
  and displays the generated blog directly within the extension.
</p>

<h2 id="features">Features</h2>
<ul>
  <li><strong>User-Friendly Interface:</strong> Simple and intuitive interface for easy blog content generation.</li>
  <li><strong>Powerful AI Integration:</strong> Utilizes Llama 3 by Meta through AWS Bedrock for high-quality content generation.</li>
  <li><strong>Seamless AWS Integration:</strong> Built using AWS services like Lambda, API Gateway, and S3.</li>
  <li><strong>Real-Time Content Generation:</strong> Instantly generates and displays blog content within the extension.</li>
  <li><strong>Cross-Origin Request Handling:</strong> Uses a service worker to handle CORS issues for smooth backend communication.</li>
</ul>

<h2 id="architecture">Architecture</h2>
<p>The project follows a serverless architecture on AWS, integrating various services for optimal performance:</p>
<ol>
  <li><strong>Chrome Extension:</strong> Frontend UI for user interaction.</li>
  <li><strong>AWS API Gateway:</strong> Handles incoming HTTP requests from the extension.</li>
  <li><strong>AWS Lambda:</strong> Processes requests and interacts with AWS Bedrock for content generation.</li>
  <li><strong>AWS Bedrock:</strong> Uses Llama 3 by Meta to generate blog content.</li>
  <li><strong>Amazon S3:</strong> Stores generated content and other assets.</li>
</ol>

<p align="center">
  <img src="https://path-to-your-architecture-diagram" alt="Architecture Diagram" />
</p>

<h2 id="installation">Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a> installed on your machine.</li>
  <li>AWS account with necessary permissions (Lambda, API Gateway, Bedrock, S3).</li>
  <li>Chrome browser for testing and using the extension.</li>
</ul>

<h3>Steps</h3>
<ol>
  <li><strong>Clone the Repository:</strong></li>
  <pre><code>git clone https://github.com/mounish777/Blog-generation-extension-using-aws-bedrock/tree/main</code></pre>
  
  <li><strong>Navigate to the Project Directory:</strong></li>
  <pre><code>cd your-repo-name</code></pre>

  <li><strong>Install Dependencies:</strong></li>
  <pre><code>npm install</code></pre>

  <li><strong>Deploy AWS Services:</strong>
    <p>Set up your AWS Lambda, API Gateway, and S3 following the provided SRS document. Deploy the backend using AWS CloudFormation or manually configure the services.</p>
  </li>

  <li><strong>Load the Extension into Chrome:</strong>
    <ul>
      <li>Navigate to <code>chrome://extensions/</code> in your Chrome browser.</li>
      <li>Enable Developer Mode and click "Load unpacked."</li>
      <li>Select the project directory containing the <code>manifest.json</code> file.</li>
    </ul>
  </li>
</ol>

<h2 id="usage">Usage</h2>
<ol>
  <li>Open the Chrome extension.</li>
  <li>Enter a topic for your blog in the provided input field.</li>
  <li>Click on "Generate Blog."</li>
  <li>View the generated blog content displayed directly within the extension.</li>
</ol>

<h2 id="technical-details">Technical Details</h2>
<ul>
  <li><strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript (Chrome Extension), Python (AWS Lambda)</li>
  <li><strong>AWS Services:</strong> Lambda, API Gateway (HTTP API), Bedrock, S3</li>
  <li><strong>AI Model:</strong> Llama 3 by Meta via AWS Bedrock</li>
  <li><strong>CORS Management:</strong> Implemented using a service worker to handle cross-origin requests.</li>
</ul>

<h2 id="troubleshooting">Troubleshooting</h2>
<ul>
  <li>Ensure all AWS services are correctly set up and configured.</li>
  <li>Check CloudWatch logs for any errors or issues in the Lambda function.</li>
  <li>Validate the response structure of the API call and ensure the <code>blog_content</code> key is correctly handled in the extension.</li>
</ul>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.</p>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2 id="contact">Contact</h2>
<p>If you have any questions or need further assistance, feel free to contact me at <a href="mailto:mounish.bachalakuri7@example.com">mounish.bachalakuri7@gmail.com</a>.</p>
