import Image from 'next/image'

export default function Card() {
  return (
    <div
      className="card relative cursor-pointer bg-neutral-800 border border-neutral-700 w-96 p-4 z-10 duration-100 rounded-2xl hover:scale-[1.02] overflow-hidden"
      style={{ opacity: "0%", translate: "100px" }}
    >
      <div>
        <Image className="h-48 w-full object-cover rounded-xl" src="/tes.jpg" width={1280} height={720} alt="Placeholder" />
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold mb-2 text-center">Project</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia
          ratione quaerat quibusdam. In, odit sunt quam dolorum, cumque deleniti
          facilis cum, nisi temporibus aut placeat modi praesentium nam optio.
        </p>
      </div>
    </div>
  );
}
