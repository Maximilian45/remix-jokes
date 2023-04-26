export default function Blogs({ title, text }: any) {
  return (
    <div className="border-2 border-black ">
      <h1 className="text-[25px]">{title}</h1>

      <p className="text-[16px] p-4">{text}</p>
    </div>
  );
}
