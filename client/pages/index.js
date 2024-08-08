import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const isVerified = localStorage.getItem("isVerified");
    if (isVerified) {
      router.push("/home");
    } else {
      router.push("/verification");
    }
  }, [router]);

  return null; // or a loading spinner
}
