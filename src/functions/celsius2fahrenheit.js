const { app } = require('@azure/functions');

app.http('celsius2fahrenheit', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // const celsius = (request.params.celsius || (request.body && request.body.celsius));
        const celsius = request.query.get('celsius') || await request.text() || 'world';
        const responseMessage = celsius
            ? celsius + "We have " + ((celsius * 5 / 9) + 32) + " °F"
            : "Please pass a temperature in celsius.";

        // return { body: responseMessage}
        return { body: celsius + ' °C = ' + ((celsius * 9 / 5) + 32) + ' °F' };
    }
});