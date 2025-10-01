'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AccountNotFound: FC = () => {
  const router = useRouter();

  const goToCreateAccountPage = () => {
    router.push('/account/create');
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Not Found</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row gap-2">
          <Button variant="outline" onClick={goToHomePage} className="flex-1">
            Back
          </Button>
          <Button onClick={goToCreateAccountPage} className="flex-1">
            Create Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountNotFound;
