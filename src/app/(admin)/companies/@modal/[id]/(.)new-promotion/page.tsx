'use client';

import React from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: Promise<{ id: string }>;  // Додаємо Promise, оскільки параметри можуть бути асинхронними
}

export default function Page({ params }: PageProps) {
  // Використовуємо асинхронний код для отримання параметрів
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);

  React.useEffect(() => {
    params.then((res) => setResolvedParams(res)); // Отримуємо значення з промісу
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;  // Покажемо "Loading..." поки проміс не буде вирішений
  }

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={resolvedParams.id} />
    </div>
  );
}
