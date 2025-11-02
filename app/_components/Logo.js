import Image from "next/image";
import logo from "@/public/caffe-images/logo1.jpg";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-center">
        <Image src={logo} alt="logo" className="w-32 h-auto rounded-full " />
      </div>
    </Link>
  );
}

export default Logo;
