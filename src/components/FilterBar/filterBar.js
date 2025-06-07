import './filterBar.css';
const FilterBar = () =>{
    const quoteCategories = [
  "Romantic",
  "Motivational",
  "Adventure",
  "Inspirational",
  "Life",
  "Love",
  "Friendship",
  "Success",
  "Happiness",
  "Wisdom",
  "Spiritual",
  "Funny",
  "Leadership",
  "Courage",
  "Self-Love",
  "Positive Thinking",
  "Sadness",
  "Mindfulness",
  "Philosophical",
  "Growth"
];

        return(
            <div className="filterBarWrapper">
                {quoteCategories.map((category, idx) =>{
                    return (
                        <div className="filterOption font-cursive" key={idx}>
                            {category}
                        </div>
                    );
                })}
            </div>
        );
} 

export default FilterBar;