import './FAQ.css';
import Nav from '../Nav';
import Footer from '../Footer';

function FaqPage (){

    const faqData = [
        { question: 'How long will it take to sell my property?', answer: 'When selling a property, the closing process typically takes around 30 to 60 days, although it can vary depending on various factors: . Location, Market conditions, Pricing, Property condition. ' },
        { question: 'SHOULD I BUY OR CONTINUE TO RENT?', answer: 'Buying a home or landed property is a great investment.  For some renting can as well be a good option depending on  the situation at the time and sorounding circumstances. Your savings and earning is also a factor.' },
        { question: 'HOW MANY PROPERTIES SHOULD I INSPECT BEFORE PUTTING IN A PURCHASE OFFER?', answer: 'There is no specific number of properties you should look at before buying one. Don’t feel that if you were to purchase the first property inspected that you’re making a mistake.' },
        { question: 'ARE REAL ESTATE PRICES NEGOTIABLE?', answer: 'Yes, almost everything in real estate is negotiable. Typically, there is a difference between a home’s list price and how much it actually sells for. The current market’s saturation will determine how much room there is for negotiation.' },
        { question: 'WHAT IS MORTGAGE AND HOW DOES IT WORK?', answer: 'A mortgage is a type of loan obtained to finance a property. People who are not wealthy enough to purchase Properties in cash opt for mortgage. Thus, a mortgage serves as a secure loan that comes with a fixed interest rate and gets paid off over 2 to 30 years, depending on the terms and agreement between the buyer and the mortage bank.' },
        { question: 'HOW MUCH SHOULD I OFFER THE SELLERS?', answer: 'When buying a property, you are the only one who can determine how much you should offer a seller.  Certainly it’s suggested you ask for your Realtors advice and thoughts, but ultimately you are the only person who can determine how much you should offer for Properties whose price is negotiable.' },
      ];

    return(
        <div>
            <Nav />
            <div className="faq-container">
                <h2>Frequently Asked Questions</h2>
                <p>Got a question? We are here to answer. If you dont see your question here, drop us a line on
                    our contact page.
                </p>
                
            </div>
            <div className='faq-questions'>
                {/* <div className='faq-bk'> */}
                {faqData.map((item, index) => (
                    <div key={index} className='faq-bk'>
                        <strong>{item.question}</strong>
                        <p>{item.answer}</p>
                    </div>
                ))}
                {/* </div> */}
            </div>
            <Footer />
        </div>
    )
}
export default FaqPage;