import React from 'react';
import star from '../../assets/images/Star rating.svg';
import starOutline from '../../assets/images/Star outline rating.svg';

function Star(props: { value: any; styles: any }) {
  const baseStyle = {
    width: '2vw',
    height: '2vw',
    marginTop: '5px',
    marginBottom: '5px',
    marginRight: '5px',
    minWidth: '15px',
    minHeight: '15px',
    maxWidth: '25px',
    maxHeight: '25px',
  };

  const customStyles = Object.assign({}, baseStyle, props.styles);

  switch (props.value) {
    case 1:
      return <img src={star} alt='' style={customStyles} />;

    case 0.5:
    default:
      return <img src={starOutline} alt='' style={customStyles} />;
  }
}

const Rating = (props: { styles?: any; rating: number }) => {
  const customStyles = props.styles ? { ...props.styles } : {};
  return (
    <div className='d-flex col rating-container' style={{ marginRight: '0.8rem' }}>
      {(() => {
        const array = [];
        const ratingCount = props.rating;
        let prevIndicator = null;
        let indicator = 0;
        let pushValue = null;

        for (let i = 0; i < 5; i++) {
          indicator = 0; // reset to default

          switch (true) {
            case ratingCount === 0:
              break;

            case ratingCount > 0 && ratingCount < 1:
              indicator = 0.5;
              break;

            case ratingCount - i >= 1:
              indicator = 1;
              break;

            case ratingCount - i < 1 && ratingCount - i > 0:
              indicator = 0.5;
              break;

            default:
              break;
          }

          pushValue = prevIndicator === null || prevIndicator > 0.5 ? indicator : 0;
          array.push(pushValue);
          prevIndicator = pushValue;
        }
        return array.map((val, index) => (
          <Star key={`r${index}`} value={val} styles={customStyles} />
        ));
      })()}
    </div>
  );
};

export default Rating;
