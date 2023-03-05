import { FunctionComponent, useCallback } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

type PaginationProps = {
  size: number;
  totalPage: number;
  activePage: number;
  handlePageChange: (page: number) => void;
};

type ArrowButtonProps = {
  isDisabled: boolean;
};

type PageButtonProps = {
  isActive: boolean;
};

const Container = styled.div`
  display: flex;

  button + button {
    margin-left: 4px;
  }
`;

const BaseButton = styled.button`
  border: none;
  flex: 0;
  background: transparent;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

const ArrowButton = styled(BaseButton)<ArrowButtonProps>`
  display: flex;
  align-items: center;

  ${({ isDisabled }) =>
    isDisabled
      ? css`
          pointer-events: none;
          opacity: 0.3;
        `
      : css`
          pointer-events: auto;
          opacity: 1;
        `};
`;

const PageButton = styled(BaseButton)<PageButtonProps>`
  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.6;
        `};
`;

const Pagination: FunctionComponent<PaginationProps> = ({
  size,
  totalPage,
  activePage,
  handlePageChange,
}) => {
  const handleArrowButtonClick = useCallback(
    (type: string) => {
      handlePageChange(type === 'prev' ? activePage - 1 : activePage + 1);
    },
    [handlePageChange, activePage],
  );

  const handlePageButtonClick = useCallback(
    (page: number) => {
      handlePageChange(page);
    },
    [handlePageChange],
  );

  return (
    <Container>
      {size > 1 && (
        <ArrowButton
          isDisabled={activePage === 0}
          onClick={() => handleArrowButtonClick('prev')}
        >
          <RiArrowDropLeftLine />
        </ArrowButton>
      )}
      {Array(totalPage)
        .fill('')
        .map((_, i) => (
          <PageButton
            isActive={activePage === i}
            onClick={() => handlePageButtonClick(i)}
          >
            {i + 1}
          </PageButton>
        ))}
      {size > 1 && (
        <ArrowButton
          isDisabled={activePage === totalPage - 1}
          onClick={() => handleArrowButtonClick('next')}
        >
          <RiArrowDropRightLine />
        </ArrowButton>
      )}
    </Container>
  );
};

export default Pagination;
