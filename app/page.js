import { Suspense } from "react";
import Header from "./_components/Header";
import HomeBg from "./_components/HomeBg";
import Box from "./_components/Box";
import Footer from "./_components/Footer";
import Button from "./_components/Button";
import Spinner from "./_components/Spinner";
import Review from "./_components/Review";
export default function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <HomeBg />
        <Box />
        <Review />
        <Footer />
      </div>
    </Suspense>
  );
}
