import { FC, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LinkButtonProps {
  children: ReactNode;
  to: string;
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  const { children, to, ...rest } = props;

  const navigate = useNavigate();

  const className = 'text-sm text-blue-500 hover:text-blue-900';

  if (to === '-1') {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
