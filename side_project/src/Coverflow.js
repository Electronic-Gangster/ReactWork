import React, { useState } from 'react';
import Coverflow from 'react-coverflow';

function CoverFlowComponent(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = (index) => {
    setCurrentImage(index);
    setShowDescription(!showDescription);
  };

  return (
    <Coverflow
      width={960}
      height={480}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
      active={currentImage}
      enableScroll // 이미지 플립을 위해 enableScroll을 true로 설정
    >
      <div
        onClick={() => handleClick(0)}
        onKeyDown={() => handleClick(0)}
        role="menuitem"
        tabIndex="0"
      >
        <img
          src={require('./image/cover1.png')}
          alt="title or description"
          style={{
            display: 'block',
            width: '100%',
            cursor: 'pointer' // 커서 스타일 변경
          }}
        />
        {currentImage === 0 && showDescription && (
          <div className="image-description">
            <p>This is the description for Image 1.</p>
          </div>
        )}
      </div>
      {/* 나머지 이미지들 */}
      <img src={require('./image/cover1.png')} alt="title or description" data-action="#" />
      <img src={require('./image/cover2.png')} alt="title or description" data-action="#" />
      <img src={require('./image/cover3.png')} alt="title or description" data-action="#" />
      <img src={require('./image/cover4.png')} alt="title or description" data-action="#" />
      <img src={require('./image/cover5.png')} alt="title or description" data-action="#" />
    </Coverflow>
  );
}

export default CoverFlowComponent;
