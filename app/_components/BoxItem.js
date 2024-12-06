import Link from "next/link";
import Image from "next/image";
function BoxItem({ title, image, description, link }) {
  return (
    <Link href={link}>
      <div className="box-border bg-white h-auto w-48 p-4 border-none rounded-md shadow-2xl text-center mb-4 hover:shadow-lg hover:bg-gray-200 transition-all">
        <h1 className="text-lg font-bold mb-2">{title}</h1>
        <Image
          src={image}
          alt="Bakery"
          className="h-24 w-full object-cover mb-2 rounded-md"
        />
        <p className="text-sm mb-2">{description}</p>
      </div>
    </Link>
  );
}

export default BoxItem;
