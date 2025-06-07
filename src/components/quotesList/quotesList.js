import './quotesList.css';
import Quotes from '../../quotes';
const QuotesList = () => {
    console.log(Quotes);
  return (
    <div className="quotes-list">
      {Quotes.map((quote, index) => (
        <div key={index} className="quote-item">
          <p className="quote-text font-cursive">{quote.name}</p>
          <p className="quote-author font-cursive">- {quote.author ==="Unknown" ? "Guest" : quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default QuotesList;