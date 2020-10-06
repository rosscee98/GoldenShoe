import React from 'react';
import { Container } from 'react-bootstrap';

function FaqScreen(props) {
    const entries = [
        {
            question: "What are my delivery options?",
            answer: "Standard delivery takes 2-4 business days and costs £4.50, or is free for orders over £50. Next-day delivery takes 1-2 business days, costs £8, and is available before 12pm, Monday-Thursday."
        },
        {
            question: "What is your returns policy?",
            answer: "We design our shoes and gear to help you perform at peak level, so if they're not working exactly right for you, we've got you covered. When you shop with Golden Shoe, we provide you 30 days to take your purchases for a trial run, confidently knowing you can return any item (some exceptions apply) for any reason within those 30 days. Even after 30 days, you can still return items if they're unworn and unwashed."
        },
        {
            question: "Where is my refund?",
            answer: "Once we receive your items, we'll process your return and issue a refund to your original form of payment, usually within two to five business days. We'll send you an email to let you know we've issued the refund — depending on your payment method, it may take up to 10 additional days for the funds to show in your account."
        }
    ]

    return <Container className="content-container px-4 pt-0 pb-3" fluid>
        <div className="bg-light-grey px-5 py-3 mt-0 round-edge">
            <h2>Frequently asked questions</h2>
            <hr className="pb-2" />
            <ul className="mt-2">
            {
                entries.map(entry => (
                    <li key={ entry.question } className="mt-4">
                        <h4>{ entry.question }</h4>
                        <p>{ entry.answer }</p>
                    </li>
                ))
            }
            </ul>
            <div className="px-5 py-3 mt-5 w-100 round-edge" style={{'background-color': 'white'}} fluid>
                <h4>Didn't find your answer? Get in touch!</h4>
                <hr className="pb-2" />
                <p className="p-0 m-0">Email: <a href="mailto:customerservice@goldenshoe.com">customerservice@goldenshoe.com</a></p>
                <p>Telephone: 0171 835 6072</p>
            </div>
        </div>
    </Container>
};

export default FaqScreen;