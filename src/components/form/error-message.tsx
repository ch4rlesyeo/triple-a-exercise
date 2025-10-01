interface IErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = (props) => {
  const { message } = props;

  return <p className="text-xs text-destructive h-[18px] mt-1">{message}</p>;
};

export default ErrorMessage;
