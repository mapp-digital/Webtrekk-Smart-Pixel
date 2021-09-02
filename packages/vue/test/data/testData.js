const wtPage = {
    name: 'test-directive-page',
    search: 'testSearch',
    numberSearchResults: 7,
    errorMessages: 'test error',
    paywall: true,
    articleTitle: 'test article',
    contentTags: 'test content tag',
    title: 'test title',
    type: 'test type',
    length: '700',
    daysSincePublication: 2,
    testVariant: 'test variant',
    testExperiment: 'test experiment',
    parameter: {'1': 'cp1 value'},
    category: {'1': 'cg1 value'},
    goal: {'1': 'ec1 value'}
};

const wtSession = {
    loginStatus: 'testing',
    parameter: {1: 'cs1 value'}
};

const wtAction = {
    name: 'en.click.on.some.link',
    parameter: {
        1: 'en'
    },
    goal: {
        2: 'goal value 2'
    }
};

const wtCampaign = {
    id: 'wt_mc%3Den.internal.newsletter.2017.05',
    parameter: {
        1: 'Newsletter 123'
    },
    oncePerSession: true,
    mediaCode: ['mc', 'wt_mc']
};

const wtCustomer = {
    id: 'user5684798169',
    validation: true,
    email: 'john.doe@webtrekk.com',
    emailRID: 'test',
    emailOptin: true,
    gender: 1,
    birthday: '19870913',
    firstName: 'John',
    lastName: 'Doe',
    telephone: '0049132456789',
    country: 'Germany',
    city: 'Berlin',
    postalCode: '10115',
    street: 'Robert-Koch-Platz',
    streetNumber: '4',
    category: {
        5: 'login'
    }
};

const wtOrder = {
    value: 120.99,
    id: 'M-12345',
    couponValue: 10.0,
    paymentMethod: 'paypal',
    shippingService: 'dhl',
    shippingSpeed: 'express',
    shippingCosts: 4.95,
    grossMargin: 12.95,
    parameter: {
        5: 'bill'
    }
};

export {wtPage, wtSession, wtAction, wtCampaign, wtCustomer, wtOrder};
