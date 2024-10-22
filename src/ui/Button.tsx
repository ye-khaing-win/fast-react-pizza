import { FC, HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  to?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const { to, children, ...rest } = props;

  const className =
    'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-3';

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;
