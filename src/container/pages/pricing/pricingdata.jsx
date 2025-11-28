import { number } from "yup"

export const Pricingdata1 = [
    {
        id: 1,
        category: 'Free',
        price: 0,
        number:4,
        features: [
           
            { text: '30 days', isAvailable: true },
            { text: 'Private Messages', isAvailable: false },
            { text: 'Urgent Ads', isAvailable: false },
        ],
        buttonText: 'Choose plan',
        buttonVariant: 'primary'
    },
    {
        id: 2,
        category: 'Unlimited',
        price: 150,
        number:"Unlimited",
        features: [
          
            { text: '365 Days', isAvailable: true },
            { text: 'Private Messages', isAvailable: true },
            { text: 'Urgent ads', isAvailable: true },
        ],
        buttonText: 'Choose plan',
        buttonVariant: 'warning'
    },
    {
        id: 3,
        category: 'Premium',
        price: 65,
        number:50,
        features: [
          
            { text: '60 Days', isAvailable: true },
            { text: 'Private Messages', isAvailable: false },
            { text: 'Urgent ads', isAvailable: false },
        ],
        buttonText: 'Choose plan',
        buttonVariant: 'success',
        isFeatured: true
    },
    {
        id: 4,
        category: 'Enterprise',
        price: 100,
        number:100,
        features: [
          
            { text: '180 days', isAvailable: true },
            { text: 'Private Messages', isAvailable: true },
            { text: 'Urgent ads', isAvailable: false },
        ],
        buttonText: 'Choose plan',
        buttonVariant: 'danger'
    }
]

export const Pricingdata2 = [
    {
        id: 1,
        category: 'Personal',
        price: 15,
        features: [
            { amount: '2', text: 'Free Domain Name' },
            { amount: '3', text: 'One-Click Apps' },
            { amount: '1', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'support' },
        ],
        bgColor: 'bg-primary',
        buttonVariant: 'primary'
    },
    {
        id: 2,
        category: 'Team',
        price: 25,
        features: [
            { amount: '3', text: 'Free Domain Name' },
            { amount: '4', text: 'One-Click Apps' },
            { amount: '2', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'support' },
        ],
        bgColor: 'bg-warning',
        buttonVariant: 'warning'
    },
    {
        id: 3,
        category: 'Business',
        price: 99,
        features: [
            { amount: '5', text: 'Free Domain Name' },
            { amount: '8', text: 'One-Click Apps' },
            { amount: '2', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'support' },
        ],
        bgColor: 'bg-success',
        buttonVariant: 'success'
    },
    {
        id: 4,
        category: 'Corporate',
        price: 35,
        features: [
            { amount: '4', text: 'Free Domain Name' },
            { amount: '6', text: 'One-Click Apps' },
            { amount: '2', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'support' },
        ],
        bgColor: 'bg-danger',
        buttonVariant: 'danger'
    }
]
export const Pricingdata3 = [
    {
        id: 1,
        category: 'Basic',
        price: 10,
        features: [
            { amount: '2', text: 'Free Domain Name' },
            { amount: '2', text: 'One-Click Apps' },
            { amount: '1', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'Support' },
        ],
        buttonVariant: 'primary'
    },
    {
        id: 2,
        category: 'Premium',
        price: 49,
        features: [
            { amount: '3', text: 'Free Domain Name' },
            { amount: '5', text: 'One-Click Apps' },
            { amount: '3', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'Support' },
        ],
        buttonVariant: 'warning'
    },
    {
        id: 3,
        category: 'Enterprise',
        price: 99,
        features: [
            { amount: '10', text: 'Free Domain Name' },
            { amount: '10', text: 'One-Click Apps' },
            { amount: '8', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'Support' },
        ],
        buttonVariant: 'success'
    },
    {
        id: 4,
        category: 'Unlimited',
        price: 139,
        features: [
            { amount: '12', text: 'Free Domain Name' },
            { amount: '10', text: 'One-Click Apps' },
            { amount: '6', text: 'Databases' },
            { amount: 'Money', text: 'Back Guarantee' },
            { amount: '24/7', text: 'Support' },
        ],
        buttonVariant: 'danger'
    }
]