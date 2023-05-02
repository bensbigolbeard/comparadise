import * as React from 'react';
import { TRPCClientErrorLike } from '@trpc/client';
import { AppRouter } from '../../backend/server';

export const Error = ({ error }: { error: TRPCClientErrorLike<AppRouter> }) => {
  const { data, message } = error;
  return (
    <div className="text-center m-5">
      <h2 className="text-3xl">Error!</h2>
      <h3 className="text-xl">{`Code: ${data?.code}, Status: ${data?.httpStatus}`}</h3>
      <h4 className="text-lg font-bold mt-5 text-red-700">{message}</h4>
    </div>
  );
};
