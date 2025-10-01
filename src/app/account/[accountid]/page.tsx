'use client';

import Account from '@/components/account';

export default function AccountPage() {
  return <Account />;
}

// 'use client';

// import { useParams, useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// import TransactionForm from '@/components/TransactionForm';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { ApiService, IAccount } from '@/lib/api';
// import { formatBalance } from '@/lib/utils';

// type TAccountPageParams = {
//   accountid: string;
// };

// export default function AccountPage() {
//   const params = useParams<TAccountPageParams>();
//   const router = useRouter();
//   const accountId = params.accountid as string;

//   const [account, setAccount] = useState<IAccount | null>(null);
//   const [accountNotFound, setAccountNotFound] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showTransfer, setShowTransfer] = useState(false);

//   useEffect(() => {
//     const fetchAccount = async () => {
//       setIsLoading(true);
//       setAccount(null);
//       setAccountNotFound(false);

//       try {
//         const foundAccount = await ApiService.getAccountBalance(accountId);
//         setAccount(foundAccount);
//       } catch (err) {
//         setAccountNotFound(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAccount();
//   }, [accountId]);

//   const handleTransactionComplete = async () => {
//     setShowTransfer(false);
//     try {
//       const updatedAccount = await ApiService.getAccountBalance(accountId);
//       setAccount(updatedAccount);
//     } catch (err) {
//       // Handle error
//     }
//   };

//   if (isLoading) {
//     return (
//       <Card>
//         <CardContent className="py-8 text-center">Loading...</CardContent>
//       </Card>
//     );
//   }

//   if (accountNotFound) {
//     return (
//       <div className="min-h-screen bg-white">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold text-center mb-8 text-black">
//             Banking Application
//           </h1>
//           <div className="max-w-sm mx-auto">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Account Not Found</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <p className="text-sm text-muted-foreground">
//                   Account ID {accountId} does not exist.
//                 </p>
//                 <div className="flex gap-2">
//                   <Button
//                     onClick={() => router.push('/account/create')}
//                     className="flex-1"
//                   >
//                     Create New Account
//                   </Button>
//                   <Button
//                     variant="outline"
//                     onClick={() => router.push('/')}
//                     className="flex-1"
//                   >
//                     Back to Search
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8 text-black">
//           Banking Application
//         </h1>

//         <div className="max-w-sm mx-auto">
//           <Card>
//             <CardHeader>
//               <CardTitle>Account Details</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {!showTransfer ? (
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-sm text-muted-foreground mb-1">
//                       Account ID
//                     </p>
//                     <p className="font-mono text-sm">{account?.id}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground mb-1">
//                       Balance
//                     </p>
//                     <p className="text-2xl font-bold">
//                       $
//                       {account?.balance
//                         ? formatBalance(account.balance)
//                         : '0.00'}
//                     </p>
//                   </div>
//                   <Button
//                     onClick={() => setShowTransfer(true)}
//                     className="w-full"
//                   >
//                     Transfer Funds
//                   </Button>
//                 </div>
//               ) : (
//                 <>
//                   {/* Source Account Info */}
//                   <div className="border rounded-lg p-4 bg-secondary">
//                     <p className="text-xs font-semibold mb-3 uppercase tracking-wide">
//                       From Account
//                     </p>
//                     <div className="space-y-3">
//                       <div>
//                         <p className="text-xs text-muted-foreground mb-1">
//                           Account ID
//                         </p>
//                         <p className="font-mono text-sm">{account?.id}</p>
//                       </div>
//                       <div>
//                         <p className="text-xs text-muted-foreground mb-1">
//                           Balance
//                         </p>
//                         <p className="text-lg font-bold">
//                           $
//                           {account?.balance
//                             ? formatBalance(account.balance)
//                             : '0.00'}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Timeline connector */}
//                   <div className="flex justify-center m-0">
//                     <div className="w-0.5 h-16 bg-border"></div>
//                   </div>

//                   {/* Transfer Form */}
//                   <div className="border rounded-lg p-4">
//                     <p className="text-xs font-semibold mb-3 uppercase tracking-wide">
//                       Transfer To
//                     </p>
//                     <TransactionForm
//                       fromAccountId={account?.id}
//                       onTransactionComplete={handleTransactionComplete}
//                       onCancel={() => setShowTransfer(false)}
//                       inline
//                     />
//                   </div>
//                 </>
//               )}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
