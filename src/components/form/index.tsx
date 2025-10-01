import { FormEventHandler } from 'react';

interface ICustomFormProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const CustomForm: FC<ICustomFormProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <form {...restProps} className="space-y-4">
      {children}
    </form>
  );
};

export default CustomForm;
