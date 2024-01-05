export function GET(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    res.end(`
        Name: Volodymir Gorchenko
        Age: 20
        Email: vovik26@gmail.com
        Username:vovchik

        Name: Igor Krivenko
        Age: 35
        Email: igorik@gmail.com
        Username:Proplay

        Name: Vincent Giroud
        Age: 23
        Email: giroudvini@gmail.com
        Username:vinifut

        Name: George Gilmor
        Age: 45
        Email: gigigilmor@gmail.com
        Username:fireball

        Name: Olga Patron
        Age: 25
        Email: patronchick@gmail.com
        Username:pistolking
    `);
}

export function POST(req, res, payload) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('POST request handled' + payload);
}

export function OPTIONS(req, res) {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.end();
}