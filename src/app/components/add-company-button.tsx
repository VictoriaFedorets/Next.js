'use client';

import React from 'react';
import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';

export default function AddCompanyButton() {
  const router = useRouter()
  return (
    <>
      <Button onClick={() => router.push("/companies/new")}>Add company</Button>
    </>
  );
}