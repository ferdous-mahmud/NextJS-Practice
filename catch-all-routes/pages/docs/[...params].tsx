import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <div>
      <h1>Doc Homepage</h1>
      <h2>{params[0]}</h2>
      <h2>{params[1]}</h2>
    </div>
  );
}
