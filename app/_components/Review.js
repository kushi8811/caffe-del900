"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

function Review() {
  const router = useRouter();
  const handleClick = () => {
    const googleReviewLink =
      "https://www.google.com/maps/place/Caff%C3%A8+Del+900+Firenze/@43.7712167,11.244659,17z/data=!4m8!3m7!1s0x132a56ab8521a4cf:0xd2d0ff663dbd7fa2!8m2!3d43.7712167!4d11.2472393!9m1!1b1!16s%2Fg%2F1hhlsgtq7?hl=it&entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D";

    router.push(googleReviewLink);
  };
  return (
    <div className="p-6 bg-primary-100 text-center  shadow-lg">
      <h2 className="text-2xl font-bold text-primary-700 mb-4">
        Enjoyed your visit to Caffè del 900?
      </h2>
      <p className="text-primary-900 mb-6">
        We’d love to hear your thoughts! Your feedback helps us improve and
        ensures others discover our cafe.
      </p>
      <Button onClick={handleClick}>Leave a Review</Button>
    </div>
  );
}

export default Review;
