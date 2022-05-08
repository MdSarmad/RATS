import React from 'react';
import './SectionA3.css';

function SectionA3() {
  return (
    <div className='section-a3'>
        <h1 className='section-a3-heading'>See what others think</h1>
        <div className="section-a3-reviews">
            <div className="review1 review">
                <div className="review1-logo review-logo"></div>
                <div className="review1-text review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error numquam sint at voluptatem voluptate suscipit est accusantium repellendus, quisquam nihil?</div>
                <div className="review1-reviewer review-reviewer">Ross Geller</div>
            </div>
            <div className="review2 review">
                <div className="review2-logo review-logo"></div>
                <div className="review2-text review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea et deserunt accusantium enim adipisci architecto dolorum officiis omnis labore!</div>
                <div className="review2-reviewer review-reviewer">Joe Tribbiani</div>
            </div>
            <div className="review3 review">
                <div className="review3-logo review-logo"></div>
                <div className="review3-text review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore nihil officia quisquam quod consequatur maiores veritatis doloribus vitae et!</div>
                <div className="review3-reviewer review-reviewer">Chandler Bing</div>
            </div>
        </div>
    </div>
  )
}

export default SectionA3;