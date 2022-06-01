import React, { Suspense } from 'react';

const BComponent = React.lazy(() => import('./b'));

export default function ComponentA() {
  return (
    <div>

        显示组件 A



      <Suspense fallback={<div>组件 B 加载中</div>}>
        <BComponent />
      </Suspense>
    </div>
  );
}