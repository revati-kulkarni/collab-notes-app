export function setRoutes(app: any) {
    // Example route
    app.get('/api/example', (req: any, res: any) => {
        res.send('This is an example route');
    });

    // Additional routes can be added here
}