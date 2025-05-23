import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './styles';
import LoadingSpinner from '../LoadingSpinner';

export type ButtonStyleType = 'primary' | 'secondary' | 'disabled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: ButtonStyleType;
  isLoading?: boolean;
}

const Button = ({ styleType, isLoading = false, children, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <S.ButtonContainer $styleType={styleType} $isLoading={isLoading} {...props}>
      <S.ContentWrapper $isLoading={isLoading}>{children}</S.ContentWrapper>
      {isLoading && (
        <S.SpinnerWrapper>
          <LoadingSpinner color={styleType} />
        </S.SpinnerWrapper>
      )}
    </S.ButtonContainer>
  );
};

export default Button;
