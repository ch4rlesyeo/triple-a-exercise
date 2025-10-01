import { Label } from '@/components/ui/label';

interface IInputSectionProps {
  label: string;
  htmlFor?: string;
}

const InputSection: FC<IInputSectionProps> = (props) => {
  const { label, htmlFor, children } = props;

  return (
    <div>
      <Label htmlFor={htmlFor} className="pb-2">
        {label}
      </Label>
      {children}
    </div>
  );
};

export default InputSection;
