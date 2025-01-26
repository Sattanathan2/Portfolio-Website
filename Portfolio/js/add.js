function showDetails(projectId) {
    const details = {
        1: "Project 1 is a dynamic web application built with React and Node.js. It features a responsive design and integrates an API for real-time data.",
        2: "Project 2 is an e-commerce platform built with HTML, CSS, and JavaScript. It includes a custom shopping cart and responsive animations."
    };

    alert(details[projectId] || "Project details not found.");
}
