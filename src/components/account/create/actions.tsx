import { Check, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { Button } from '@/components/ui/button';

import { useCreateAccountFormContext } from './hooks';

const CreateAccountActions: FC = () => {
  const {
    formState: { isSubmitting },
    control
  } = useCreateAccountFormContext();

  const router = useRouter();

  const goToHomePage = () => {
    router.push('/');
  };

  const success = useWatch({ name: 'success', control });

  const buttonLabel = useMemo(() => {
    if (isSubmitting) {
      return <Loader2 className="animate-spin" />;
    }

    if (success) {
      return <Check />;
    }

    return <>Create</>;
  }, [isSubmitting, success]);

  return (
    <div className="flex flex-row gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={goToHomePage}
        className="flex-1"
      >
        Back
      </Button>
      <Button type="submit" className="flex-1">
        {buttonLabel}
      </Button>
    </div>
  );
};

export default CreateAccountActions;
