import React from 'react';
import { Reveal } from 'react-reveal';
import { TypeAnimation } from 'react-type-animation';
const OpenSourceText = () => {
  return (
    <div>
      <Reveal>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'React StudioJS',
            1000,
            // 'React StudioJS You Can Record',
            // 1000,
            'React StudioJS You Can Edit Multi tracks',
            1000,
            'React StudioJS You Can Instantly Download',
            1000,
            'React StudioJS You Can Make Annotations!',
            1000,
            'React StudioJS You Can Download Custom Annotations!',
            1000,
            'React StudioJS  And Much More...!',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </Reveal>
    </div>
  );
};

export default OpenSourceText;
