import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail({ params }) {
  const router = useRouter();
  // CSR 방식
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// SSR을 이용한 params 접근
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
