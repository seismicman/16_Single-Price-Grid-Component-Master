import React from "react";

const Card = () => {
  return (
    <section className="master">
      <article className="summary">
        <h2 className="title">Join our community</h2>
        <h3 className="guarantee">30-day, hassle-free money back guarantee</h3>
        <p className="description">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </article>
      <article className="details">
        <div className="subscription">
          <h3 className="subtitle">Monthly Subscription</h3>
          <p className="price">
            &#36;29 <span>per month</span>
          </p>
          <p className="desc-subscription">
            Full access for less than &#36;1 a day
          </p>
          <button className="btn">Sign Up</button>
        </div>
        <div className="whyus">
          <h3 className="subtitle">Why Us</h3>
          <ul className="reasons">
            <li>Tutorials by industry experts</li>
            <li>Peer &#38; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Card;
