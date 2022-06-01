import { FunctionComponent, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

type CarouselProps = {
  width?: string;
  imageList?: string[];
};

type ContainerTypes = Pick<CarouselProps, 'width'>;

const Container = styled.div<ContainerTypes>`
  width: ${(props) => props.width};
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;

type ArrowButtonTypes = {
  direction: 'left' | 'right';
};

const ArrowButton = styled.button<ArrowButtonTypes>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #000;
  font-size: 36px;
  margin: 0;
  padding: 0;

  ${({ direction }) =>
    direction === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;

  width: 95%;
  margin: 0 auto;
`;

const CarouselListItem = styled.li<{ activeIndex: number }>`
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 300ms ease-in-out;

  & > img {
    width: 100%;
    height: fit-content;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

const NavListItem = styled.li<{ isActive: boolean }>`
  margin: 0 5px;

  & > button {
    display: inline-block;
    cursor: pointer;
    width: 16px;
    height: 100%;
    padding: 0;
    border: none;
    border-radius: 100%;
    background: ${({ isActive }) => (isActive ? '#000' : 'gray')}
`;

const Carousel: FunctionComponent<CarouselProps> = ({
  width = '100%',
  imageList = [],
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleLeftArrowClick = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
  }, []);

  const handleRightArrowClick = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  return (
    <Container width={width}>
      <Content>
        {imageList.length > 1 && activeIndex > 0 && (
          <ArrowButton
            direction="left"
            title="Left Arrow Button"
            aria-label="Left Arrow Button"
            onClick={handleLeftArrowClick}
          >
            <RiArrowDropLeftLine />
          </ArrowButton>
        )}
        {imageList.length > 0 && (
          <CarouselList>
            {imageList.map((image, index) => (
              <CarouselListItem
                key={`CarouselListItem_${index}`}
                activeIndex={activeIndex}
              >
                <img src={image} alt="" />
              </CarouselListItem>
            ))}
          </CarouselList>
        )}
        {imageList.length > 1 && activeIndex < imageList.length - 1 && (
          <ArrowButton
            direction="right"
            title="Right Arrow Button"
            aria-label="Right Arrow Button"
            onClick={handleRightArrowClick}
          >
            <RiArrowDropRightLine />
          </ArrowButton>
        )}
      </Content>
      {imageList.length > 0 && (
        <NavList>
          {imageList.map((image, index) => (
            <NavListItem
              key={`NavListItem_${index}`}
              isActive={activeIndex === index}
            >
              <button
                onClick={() => setActiveIndex(index)}
                aria-label="Navigation Button"
              />
            </NavListItem>
          ))}
        </NavList>
      )}
    </Container>
  );
};

export default Carousel;
