import Layout from '@components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@config/index';

const AddPage = function () {
  return (
    <Layout>
      <h1>Add Event</h1>
    </Layout>
  );
};

export default AddPage;
