import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {

    try {
        const spec = createSwaggerSpec({
            apiFolder: 'src/app/api', // define api folder under app folder
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'Blinkadz APIs',
                    version: '1.0',
                    description: 'These are the apis for Blinkadz. Authenicate using the /auth/login endpoint and use the token in the header for all other requests.',
                },
                components: {
                    securitySchemes: {
                        BearerAuth: {
                            type: 'http',
                            scheme: 'bearer',
                            bearerFormat: 'JWT',
                        },
                        OAuth2: {
                            type: "oauth2",
                            flows: {
                                authorizationCode: {
                                    authorizationUrl: "https://example.com/oauth/authorize",
                                    tokenUrl: "https://example.com/oauth/token",
                                    scopes: {
                                        read: "Grants read access",
                                        write: "Grants write access",
                                    },
                                },
                            },
                        },
                    },
                },
                security: [],
            },
        });
        return spec;
    }
    catch (err) {
        console.log("Swagger Error Generation => ", err);
        throw err
    }
};