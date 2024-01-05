function GET(req, res, url, payload) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Lab2 Title</title>
            <style>
            body{
                background-color:red
            }
            </style>
        </head>
        <body>
            <h1>Let's get ready for the rembooooo</h1>
            <a href="https://www.google.com/"> Click </a>
        </body>
        </html>
    `);
}

function POST(req, res, url, payload) {
    res.setHeader('Content-Type', 'text/html');

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>  
            <title>Lab2 Title</title>
            <style>
            body{
                background-color:red
            }
            </style>
        </head>
        <body>
            <h1>Let's get ready for the rembooooo</h1>
            <a href="https://www.google.com/"> Click </a>
            <h3>Received Body:</h3>
            <pre>${req.body}</pre>
        </body>
        </html>
    `);
}

export {GET,POST}