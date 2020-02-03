import React from 'react';
import styled from 'styled-components';

const NewsItemWrapper = styled.div ` 
      width: 80%;
      background: #fff;
      color: #333;
      display: flex;
      flex-flow: row wrap;
 `;

const NewsItem = () => {
    return (
        <NewsItemWrapper>
                <div className="submain-left">
                    News items 
                </div>

                <div className="submain-right">
                    News items 
                </div>
        </NewsItemWrapper>
    )
}

export default NewsItem;